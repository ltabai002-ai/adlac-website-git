import { useState, useEffect } from "react";
import { X, CheckCircle, Loader2, AlertTriangle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { submitLead, isValidPhone, checkPhoneExists } from "@/lib/leadApi";

interface CallbackModalProps {
  open: boolean;
  onClose: () => void;
  prefilledExam?: string;
}

const examOptions = ["RRB NTPC", "SSC CGL", "SSC CHSL", "Bank Clerk", "ADRE", "Scholarship Exams", "Other"];
const modeOptions = ["Online", "Offline", "Hybrid"];

const CallbackModal = ({ open, onClose, prefilledExam = "" }: CallbackModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", exam: prefilledExam, mode: "" });

  useEffect(() => {
    if (open) {
      setForm((prev) => ({ ...prev, exam: prefilledExam }));
      setPhoneError("");
    }
  }, [prefilledExam, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!isValidPhone(form.phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);

    const exists = await checkPhoneExists(form.phone);
    if (exists) {
      setPhoneError("This phone number is already registered. Our team will contact you soon.");
      setSubmitting(false);
      return;
    }

    await submitLead({
      name: form.name,
      phone: form.phone,
      email: form.email,
      exam: form.exam,
      mode: form.mode,
      source: "CALLBACK_MODAL",
    });
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", exam: "", mode: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm px-4 pb-20 sm:pb-4 pt-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card rounded-2xl w-full max-w-md shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-navy p-5 text-primary-foreground">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg">Submit The Details</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-primary-foreground/10">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm opacity-80 mt-1">Fill out the form and our team will contact you within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <p className="font-display font-semibold text-lg">Thank You!</p>
                <p className="text-sm text-muted-foreground mt-1">We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3 overflow-y-auto flex-1">
                <input
                  required
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="\d{10}"
                  placeholder="Phone Number * (10 digits)"
                  value={form.phone}
                  onChange={(e) => {
                    const phone = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setForm({ ...form, phone });
                    setPhoneError(phone.length > 0 && !isValidPhone(phone) ? "Please enter a valid 10-digit phone number." : "");
                  }}
                  className={`w-full h-11 px-4 text-sm rounded-lg border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 ${phoneError ? "border-destructive" : "border-input"}`}
                />
                {phoneError && (
                  <div className="flex items-center gap-1.5 text-destructive text-xs">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </div>
                )}
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <select
                  required
                  value={form.exam}
                  onChange={(e) => setForm({ ...form, exam: e.target.value })}
                  className="w-full h-11 px-4 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                >
                  <option value="">Exam Interest *</option>
                  {examOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <select
                  value={form.mode}
                  onChange={(e) => setForm({ ...form, mode: e.target.value })}
                  className="w-full h-11 px-4 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                >
                  <option value="">Preferred Learning Mode</option>
                  {modeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <button
                  type="submit"
                  disabled={submitting || (form.phone.length > 0 && !isValidPhone(form.phone))}
                  className="w-full h-12 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CallbackModal;
