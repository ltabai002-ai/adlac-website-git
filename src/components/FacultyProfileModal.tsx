import { X, GraduationCap, BookOpen, Target, MessageSquare, Globe, Clock, Award, Briefcase, Users } from "lucide-react";
import { Faculty } from "@/data/faculty";
const imageMap: Record<string, string> = {};

export const getFacultyImage = (imageKey: string) => imageMap[imageKey] || "";

const initialsMap: Record<string, string> = {
  "raman-bora": "RB",
  "dr-sir": "DR",
  "n-bhuyan": "NB",
};

interface Props {
  faculty: Faculty | null;
  open: boolean;
  onClose: () => void;
}

const FacultyProfileModal = ({ faculty: f, open, onClose }: Props) => {
  if (!open || !f) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] bg-card rounded-t-2xl md:rounded-2xl overflow-y-auto shadow-xl">
        {/* Header with image */}
        <div className="relative bg-gradient-navy p-6 pb-8">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-4">
            {initialsMap[f.image] ? (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 border-3 border-gold/30 shadow-lg flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl font-bold text-gold">{initialsMap[f.image]}</span>
              </div>
            ) : (
              <img
                src={getFacultyImage(f.image)}
                alt={f.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-gold/30 shadow-lg"
              />
            )}
            <div>
              <h2 className="font-display text-lg md:text-xl font-bold text-primary-foreground">{f.name}</h2>
              <p className="text-sm text-gold font-medium">{f.designation}</p>
              <p className="text-xs text-primary-foreground/60 mt-0.5">{f.primarySubject}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 space-y-5 pb-20 md:pb-6">
          {f.philosophy && (
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <MessageSquare className="w-4 h-4 text-accent mb-2" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{f.philosophy}"</p>
            </div>
          )}

          <InfoRow icon={GraduationCap} label="Highest Degree" value={f.highestDegree} />
          <InfoRow icon={Clock} label="Teaching Experience" value={f.totalExperience} />
          {f.coachingExperience && <InfoRow icon={Award} label="Coaching Experience" value={f.coachingExperience} />}
          {f.previousWork && <InfoRow icon={Briefcase} label="Previous Experience" value={f.previousWork} />}
          {f.studentsTrained && <InfoRow icon={Users} label="Students Trained" value={f.studentsTrained} />}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Subjects</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {f.subjects.map((s) => (
                <span key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent border border-accent/15">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Exams Specialised</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {f.examsSpecialised.map((e) => (
                <span key={e} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-muted text-muted-foreground border border-border">{e}</span>
              ))}
            </div>
          </div>

          <InfoRow icon={Target} label="Teaching Style" value={f.teachingStyle} />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Languages</span>
            </div>
            <p className="text-sm text-muted-foreground">{f.languages.join(", ")}</p>
          </div>

          <InfoRow icon={Clock} label="Availability" value={f.contactAvailability} />
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

export default FacultyProfileModal;
