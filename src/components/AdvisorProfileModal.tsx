import { X, GraduationCap, BookOpen, Target, MessageSquare, Globe, Clock, Award, Briefcase, MapPin, Trophy } from "lucide-react";
import { Advisor } from "@/data/advisors";
import srBaruahImg from "@/assets/advisors/sr-baruah.jpeg";
import rpKalitaImg from "@/assets/advisors/rp-kalita.webp";
import sugatoLahiriImg from "@/assets/advisors/sugato-lahiri.webp";

const imageMap: Record<string, string> = {
  "sr-baruah": srBaruahImg,
  "rp-kalita": rpKalitaImg,
  "sugato-lahiri": sugatoLahiriImg,
};

export const getAdvisorImage = (imageKey: string) => imageMap[imageKey] || "";

const initialsMap: Record<string, string> = {};

interface Props {
  advisor: Advisor | null;
  open: boolean;
  onClose: () => void;
}

const AdvisorProfileModal = ({ advisor: a, open, onClose }: Props) => {
  if (!open || !a) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] bg-card rounded-t-2xl md:rounded-2xl overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="relative bg-gradient-navy p-6 pb-8">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-4">
            {initialsMap[a.image] ? (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 border-3 border-gold/30 shadow-lg flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl font-bold text-gold">{initialsMap[a.image]}</span>
              </div>
            ) : (
              <img
                src={getAdvisorImage(a.image)}
                alt={a.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-gold/30 shadow-lg"
              />
            )}
            <div>
              <h2 className="font-display text-lg md:text-xl font-bold text-primary-foreground">{a.name}</h2>
              <p className="text-sm text-gold font-medium">{a.designation}</p>
              <p className="text-xs text-primary-foreground/60 mt-0.5">{a.primaryDomain}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 space-y-5 pb-20 md:pb-6">
          {a.philosophy && (
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <MessageSquare className="w-4 h-4 text-accent mb-2" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{a.philosophy}"</p>
            </div>
          )}

          <InfoRow icon={GraduationCap} label="Highest Qualification" value={a.highestDegree} />
          <InfoRow icon={Clock} label="Total Experience" value={a.totalExperience} />
          {a.serviceTenure && <InfoRow icon={Award} label="Service Tenure" value={a.serviceTenure} />}
          {a.previousWork && <InfoRow icon={Briefcase} label="Senior Positions Held" value={a.previousWork} />}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Areas of Expertise</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {a.expertiseAreas.map((s) => (
                <span key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent border border-accent/15">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Postings</span>
            </div>
            <ul className="space-y-1.5">
              {a.keyPostings.map((p) => (
                <li key={p} className="text-sm text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-gold">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Notable Achievements</span>
            </div>
            <ul className="space-y-1.5">
              {a.notableAchievements.map((p) => (
                <li key={p} className="text-sm text-muted-foreground leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-gold">{p}</li>
              ))}
            </ul>
          </div>

          <InfoRow icon={Target} label="Mentoring Style" value={a.teachingStyle} />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Languages</span>
            </div>
            <p className="text-sm text-muted-foreground">{a.languages.join(", ")}</p>
          </div>

          <InfoRow icon={Clock} label="Availability" value={a.contactAvailability} />
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-4 h-4 text-accent mt-0.5 shrink-0" />
    <div>
      <span className="text-xs font-semibold text-foreground uppercase tracking-wide block">{label}</span>
      <p className="text-sm text-muted-foreground mt-0.5">{value}</p>
    </div>
  </div>
);

export default AdvisorProfileModal;
