import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import CallbackModal from "./CallbackModal";

const StickyContactBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Positioned higher on mobile to avoid bottom CTA bar overlap */}
      <div className="fixed bottom-20 md:bottom-4 right-3 md:right-4 z-40 flex flex-col gap-2.5">
        <button
          onClick={() => setShowModal(true)}
          className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-navy shadow-navy flex items-center justify-center text-primary-foreground hover:scale-105 active:scale-95 transition-transform"
          aria-label="Request callback"
        >
          <Phone className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <a
          href="https://wa.me/916002346625"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-success shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 md:w-6 md:h-6 text-card" />
        </a>
      </div>

      <CallbackModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default StickyContactBar;
