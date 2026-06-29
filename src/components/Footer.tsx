import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import logoImg from "@/assets/Advanced_learning_academy.webp";

const courseLinks = [
  { to: "/courses/rrb-ntpc", label: "RRB NTPC" },
  { to: "/courses/ssc-cgl", label: "SSC CGL" },
  { to: "/courses/ssc-chsl", label: "SSC CHSL" },
  
  { to: "/courses/bank-clerk", label: "Bank Clerk" },
  { to: "/courses/adre", label: "ADRE" },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/adlac-foundation-course", label: "Foundation Course" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="bg-gradient-navy text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="mb-4 inline-block">
            <img src={logoImg} alt="The Advanced Learning Academy" className="h-12 w-auto mix-blend-screen" />
          </Link>
          <p className="text-sm leading-relaxed opacity-80">
            Guwahati's trusted coaching institute for SSC, Banking, Railways & ADRE exam preparation. Launching our mobile learning platform soon.
          </p>
          <div className="flex gap-3 mt-4">
            {[
              { icon: Instagram, href: "https://x.com/talaghy2026", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587826914928", label: "Facebook" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/the-advanced-learning-academy/about/?viewAsMember=true", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/talaghy2026", label: "X (Twitter)" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors" aria-label={s.label}>
                <s.icon className="w-4 h-4 opacity-80" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Courses</h4>
          <ul className="space-y-2">
            {courseLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Chenikuthi, MC Road, Guwahati, Opp. St. Mary's Higher Secondary School</span>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 60023 46625</span>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>theadvancedlearningacademy.ghy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs opacity-60">
        <p>© {new Date().getFullYear()} The Advanced Learning Academy. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
