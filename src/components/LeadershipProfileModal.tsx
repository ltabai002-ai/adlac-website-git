import { X, GraduationCap, Award, Briefcase, BookOpen, Globe, Clock, MessageSquare, Target, Users } from "lucide-react";

export interface Leader {
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string;
  achievements: string[];
  highestDegree?: string;
  totalExperience?: string;
  specializations?: string[];
  philosophy?: string;
  languages?: string[];
  contactAvailability?: string;
}

const imageMap: Record<string, string> = {};

export const getLeaderImage = (key: string) => imageMap[key] || "";

export const getLeaderInitials = (name: string) => {
  const parts = name.replace(/\(.*?\)/g, "").replace(/,.*/, "").trim().split(" ");
  return parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0][0];
};

export const leaders: Leader[] = [
  {
    name: "Robin Kalita, IRTS (Retd.)",
    role: "Director",
    credentials: "IRTS (1981 Batch) • Former Director, IRCTC",
    image: "robin-kalita",
    bio: "Robin Kalita is a retired civil servant from the 1981 UPSC Civil Services Examination batch. Before joining the Indian Railways, he taught Economics at Jorhat Engineering College and St. Edmund's College. During his distinguished career in the Railways, he served in several key roles, retiring as Director, IRCTC, Delhi.\n\nAfter retirement, he continued contributing to public administration and education as Advisor to RITES, Officer on Special Duty to the Minister of State for Railways, Advisor (Transport), Government of Assam, and Director at Royal Global University.\n\nCurrently, he serves as a Member of CAC in AERC, Government of Assam, and as a Distinguished Visiting Fellow at Gauhati University, where he actively guides aspirants preparing for the Civil Services.\n\nMr. Kalita has received awards from the President of India, the Railway Minister, and several organisations for his service. Beyond administration and education, he is also passionate about the arts—he sings, acts in films and plays, and has been a Quizmaster for over four decades.",
    achievements: ["Presidential Award Recipient", "Former Director, IRCTC", "Distinguished Visiting Fellow, Gauhati University", "40+ Years as Quizmaster"],
    highestDegree: "Post Graduate (Economics)",
    totalExperience: "40+ Years",
    specializations: ["Civil Services Mentoring", "Public Administration", "Economics", "Transport Policy"],
    philosophy: "True leadership is about guiding the next generation to achieve what they believe is impossible.",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "By Appointment",
  },
  {
    name: "Dr. Pulak Bhattacharyya",
    role: "Academic Director",
    credentials: "Doctorate • Oxford Teaching Qualification • 30+ Years Experience",
    image: "pulak-bhattacharyya",
    bio: "Dr. Pulak Bhattacharyya is an eminent educationist with over 30 years of experience in teaching, training, and academic leadership. A doctorate holder with a teaching qualification from Oxford (UK), he has been a distinguished trainer for competitive government examinations across India.\n\nHe previously served as Senior Faculty for Reasoning and English at Career Launcher, New Delhi, mentoring aspirants for major national-level examinations such as CAT, MAT, Banking Services, Railways, and IB. Over the years, he has guided thousands of candidates, earning recognition for his conceptual clarity and exam-oriented teaching approach.\n\nDr. Bhattacharyya has also been associated with IIBM, contributing to academic training and professional development programmes.\n\nA CBSE Resource Person and Cambridge Master Trainer, he has conducted over 100 faculty development programmes across the country. He is the author of more than 40 books, including NEP 2020 Unplugged.\n\nHe has been honoured with the Indian Leadership Award for Education Excellence by the All India Achievers' Association, in collaboration with NERDA, New Delhi.",
    achievements: ["Author of 40+ Books", "100+ Faculty Development Programmes", "Indian Leadership Award for Education Excellence", "Cambridge Master Trainer"],
    highestDegree: "Doctorate (Oxford Teaching Qualification)",
    totalExperience: "30+ Years",
    specializations: ["Reasoning & English", "Competitive Exam Training", "Faculty Development", "Curriculum Design"],
    philosophy: "Conceptual clarity is the foundation of success in any competitive examination.",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Medium Availability (Scheduled Sessions)",
  },
];

interface Props {
  leader: Leader | null;
  open: boolean;
  onClose: () => void;
}

const LeadershipProfileModal = ({ leader, open, onClose }: Props) => {
  if (!open || !leader) return null;

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
            {leader.image === "pulak-bhattacharyya" ? (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 border-3 border-gold/30 shadow-lg flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl font-bold text-gold">PB</span>
              </div>
            ) : getLeaderImage(leader.image) ? (
              <img
                src={getLeaderImage(leader.image)}
                alt={leader.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-gold/30 shadow-lg"
              />
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/20 border-3 border-gold/30 shadow-lg flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl font-bold text-gold">{getLeaderInitials(leader.name)}</span>
              </div>
            )}
            <div>
              <h2 className="font-display text-lg md:text-xl font-bold text-primary-foreground">{leader.name}</h2>
              <p className="text-sm text-gold font-medium">{leader.role}</p>
              <p className="text-xs text-primary-foreground/60 mt-0.5">{leader.credentials}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 space-y-5 pb-20 md:pb-6">
          {leader.philosophy && (
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <MessageSquare className="w-4 h-4 text-accent mb-2" />
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{leader.philosophy}"</p>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">About</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
          </div>

          {leader.highestDegree && <InfoRow icon={GraduationCap} label="Highest Degree" value={leader.highestDegree} />}
          {leader.totalExperience && <InfoRow icon={Clock} label="Total Experience" value={leader.totalExperience} />}

          {leader.specializations && leader.specializations.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Specializations</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {leader.specializations.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/10 text-accent border border-accent/15">{s}</span>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Highlights</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {leader.achievements.map((a) => (
                <span key={a} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-muted text-muted-foreground border border-border">{a}</span>
              ))}
            </div>
          </div>

          {leader.languages && leader.languages.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Languages</span>
              </div>
              <p className="text-sm text-muted-foreground">{leader.languages.join(", ")}</p>
            </div>
          )}

          {leader.contactAvailability && <InfoRow icon={Clock} label="Availability" value={leader.contactAvailability} />}
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

export default LeadershipProfileModal;
