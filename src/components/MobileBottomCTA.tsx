import { Link } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";

const MobileBottomCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border safe-area-bottom">
    <div className="flex items-center gap-2 px-3 py-2.5">
      <a
        href="tel:+916002346625"
        className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        to="/contact?form=demo"
        className="flex-1 h-11 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
      >
        <CalendarCheck className="w-4 h-4" />
        Book Demo
      </Link>
    </div>
  </div>
);

export default MobileBottomCTA;
