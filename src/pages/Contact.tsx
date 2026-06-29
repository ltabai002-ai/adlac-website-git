import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2, Instagram, Facebook, Linkedin, Twitter, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { submitLead, isValidPhone, checkPhoneExists } from "@/lib/leadApi";

const examOptions = ["RRB NTPC", "SSC CGL", "SSC CHSL", "Bank Clerk", "ADRE", "Scholarship Exams", "Other"];
const modeOptions = ["Online", "Offline", "Hybrid"];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get("form") === "demo";
  const prefilledExam = searchParams.get("exam") || "";
  const prefilledMode = searchParams.get("mode") || "";

  const [form, setForm] = useState({ name: "", phone: "", email: "", exam: prefilledExam, mode: prefilledMode, message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

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
      message: form.message,
      source: isDemo ? "DEMO_BOOKING" : "CONTACT_FORM",
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold">
            {isDemo ? "Book a Free Demo Class" : "Contact Us"}
          </h1>
          <p className="mt-2 text-sm opacity-80">
            {isDemo ? "Experience our teaching methodology firsthand." : "We'd love to hear from you. Reach out to us anytime."}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="p-5 rounded-xl bg-card border border-border">
                  <h3 className="font-display font-bold text-foreground mb-4">Get in Touch</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">Chenikuthi, MC Road, Guwahati<br />Opposite St. Mary's Higher Secondary School</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 60023 46625</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">theadvancedlearningacademy.ghy@gmail.com</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Working Hours</p>
                        <p className="text-sm text-muted-foreground">Monday to Sunday</p>
                      </div>
                    </li>
                  </ul>
                  <div className="flex gap-3 mt-5">
                    {[
                      { icon: Instagram, href: "https://x.com/talaghy2026", label: "Instagram" },
                      { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587826914928", label: "Facebook" },
                      { icon: Linkedin, href: "https://www.linkedin.com/company/the-advanced-learning-academy/about/?viewAsMember=true", label: "LinkedIn" },
                      { icon: Twitter, href: "https://x.com/talaghy2026", label: "X (Twitter)" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors" aria-label={s.label}>
                        <s.icon className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {isDemo ? "Book Your Demo Class" : "Send Message"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">Our team will contact you within 24 hours.</p>

                  {submitted ? (
                    <div className="py-10 text-center">
                      <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                      <h4 className="font-display font-bold text-lg">Thank You!</h4>
                      <p className="text-sm text-muted-foreground mt-1">We've received your message and will get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input required placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                      <input required type="tel" inputMode="numeric" maxLength={10} pattern="\d{10}" placeholder="Phone Number * (10 digits)" value={form.phone} onChange={(e) => {
                        const phone = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setForm({ ...form, phone });
                        setPhoneError(phone.length > 0 && !isValidPhone(phone) ? "Please enter a valid 10-digit phone number." : "");
                      }}
                        className={`h-11 px-4 text-sm rounded-lg border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 ${phoneError ? "border-destructive" : "border-input"}`} />
                      {phoneError && (
                        <div className="sm:col-span-2 flex items-center gap-1.5 text-destructive text-xs">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{phoneError}</span>
                        </div>
                      )}
                      <input required type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30" />
                      <select required value={form.exam} onChange={(e) => setForm({ ...form, exam: e.target.value })}
                        className="h-11 px-4 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30">
                        <option value="">Exam Interest *</option>
                        {examOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <select value={form.mode} onChange={(e) => setForm({ ...form, mode: e.target.value })}
                        className="sm:col-span-2 h-11 px-4 text-sm rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30">
                        <option value="">Preferred Learning Mode</option>
                        {modeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                        className="sm:col-span-2 px-4 py-3 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none" />
                      <button type="submit" disabled={submitting || (form.phone.length > 0 && !isValidPhone(form.phone))} className="sm:col-span-2 h-12 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2">
                        {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : (isDemo ? "Book Demo Class" : "Send Message")}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10 md:py-14 bg-warm">
        <div className="container">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">How to Reach Us</h2>
          <div className="rounded-xl overflow-hidden border border-border h-64 md:h-96">
            <iframe
              src="https://maps.google.com/maps?q=26.1864033,91.7576831&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Advanced Learning Academy Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
