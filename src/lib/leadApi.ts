const CRM_API_BASE = "https://ltabaicrm.online";
const WHATSAPP_NUMBER = "916002346625";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  exam?: string;
  mode?: string;
  message?: string;
  source?: string;
}

const PHONE_REGEX = /^\d{10}$/;

/**
 * Validates that a phone number is exactly 10 digits.
 */
export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim());
}

/**
 * Checks if a phone number already exists in the CRM.
 */
export async function checkPhoneExists(phone: string): Promise<boolean> {
  const cleaned = phone.replace(/\D/g, "").slice(0, 10);
  try {
    const res = await fetch(`${CRM_API_BASE}/api/v1/leads/check-phone?phone=${encodeURIComponent(cleaned)}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      console.warn("Phone check endpoint returned", res.status);
      return false; // If endpoint doesn't exist or errors, allow submission
    }
    const data = await res.json();
    return !!data.exists;
  } catch (err) {
    console.warn("Phone check failed:", err);
    return false;
  }
}

/**
 * Submits lead to CRM backend and opens WhatsApp with details.
 */
export async function submitLead(data: LeadPayload): Promise<{ success: boolean; id?: string; error?: string }> {
  const source = data.source || "WEBSITE";

  const payload: Record<string, string | null> = {
    name: data.name,
    phone: data.phone,
    email: data.email?.trim() || null,
    course: data.exam || null,
    source,
  };

  try {
    console.log("CRM payload:", JSON.stringify(payload));

    const res = await fetch(`${CRM_API_BASE}/api/v1/leads/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const raw = await res.text();
    let result: { id?: string; error?: string; message?: string } = {};
    try {
      result = raw ? JSON.parse(raw) : {};
    } catch {
      result = { message: raw || "Non-JSON response from CRM" };
    }

    console.log("CRM response:", res.status, JSON.stringify(result));

    if (!res.ok) {
      throw new Error(result.error || result.message || `CRM request failed with status ${res.status}`);
    }

    // 2. Open WhatsApp with prefilled message
    sendWhatsAppNotification(data);

    return { success: true, id: result.id };
  } catch (err) {
    console.error("CRM submission failed:", err);
    // Still try WhatsApp even if CRM fails
    sendWhatsAppNotification(data);
    return { success: false, error: err instanceof Error ? err.message : "Failed to submit to CRM" };
  }
}

function sendWhatsAppNotification(data: LeadPayload) {
  const lines = [
    `📋 *New Lead from Website*`,
    `👤 Name: ${data.name}`,
    `📞 Phone: ${data.phone}`,
  ];
  if (data.email) lines.push(`📧 Email: ${data.email}`);
  if (data.exam) lines.push(`📚 Exam Interest: ${data.exam}`);
  if (data.mode) lines.push(`🖥️ Mode: ${data.mode}`);
  if (data.message) lines.push(`💬 Message: ${data.message}`);
  lines.push(`🔗 Source: ${data.source || "Website"}`);

  const text = encodeURIComponent(lines.join("\n"));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
}
