import { useState } from "react";
import {
  BookOpen, BarChart3, FileText, Users, MessageCircle, Sparkles,
  ClipboardCheck, ShieldCheck, Building2, Monitor,
  Lightbulb, Target, CheckCircle, Award
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const studentFeatures = [
  { icon: BookOpen, label: "Specialised Courses", desc: "Tailored for every major government exam", gradient: "from-[hsl(220_60%_96%)] to-[hsl(220_50%_90%)]", iconBg: "bg-[hsl(220_55%_45%)]", borderTint: "border-[hsl(220_45%_85%)]" },
  { icon: FileText, label: "Study Materials", desc: "Printed + digital resources included", gradient: "from-[hsl(160_45%_95%)] to-[hsl(152_40%_89%)]", iconBg: "bg-[hsl(152_45%_38%)]", borderTint: "border-[hsl(152_35%_83%)]" },
  { icon: BarChart3, label: "Mock Tests", desc: "Weekly tests with all-India ranking", gradient: "from-[hsl(38_65%_95%)] to-[hsl(32_55%_88%)]", iconBg: "bg-[hsl(36_70%_42%)]", borderTint: "border-[hsl(38_50%_83%)]" },
  { icon: MessageCircle, label: "Personal Mentoring", desc: "1-on-1 doubt clearing sessions", gradient: "from-[hsl(280_45%_96%)] to-[hsl(270_40%_90%)]", iconBg: "bg-[hsl(275_42%_48%)]", borderTint: "border-[hsl(280_30%_86%)]" },
  { icon: Users, label: "Small Batches", desc: "Focused learning in intimate groups", gradient: "from-[hsl(190_50%_95%)] to-[hsl(195_45%_89%)]", iconBg: "bg-[hsl(190_50%_38%)]", borderTint: "border-[hsl(190_38%_83%)]" },
];

const parentFeatures = [
  { icon: ClipboardCheck, label: "Progress Tracking", desc: "Regular performance reports shared", gradient: "from-[hsl(160_45%_95%)] to-[hsl(152_40%_89%)]", iconBg: "bg-[hsl(152_45%_38%)]", borderTint: "border-[hsl(152_35%_83%)]" },
  { icon: Sparkles, label: "Parent Meetings", desc: "Scheduled parent-teacher interactions", gradient: "from-[hsl(38_65%_95%)] to-[hsl(32_55%_88%)]", iconBg: "bg-[hsl(36_70%_42%)]", borderTint: "border-[hsl(38_50%_83%)]" },
  { icon: ShieldCheck, label: "Safe Environment", desc: "Supportive and secure campus", gradient: "from-[hsl(220_60%_96%)] to-[hsl(220_50%_90%)]", iconBg: "bg-[hsl(220_55%_45%)]", borderTint: "border-[hsl(220_45%_85%)]" },
  { icon: Monitor, label: "Full Transparency", desc: "Open communication on student progress", gradient: "from-[hsl(280_45%_96%)] to-[hsl(270_40%_90%)]", iconBg: "bg-[hsl(275_42%_48%)]", borderTint: "border-[hsl(280_30%_86%)]" },
  { icon: Building2, label: "Modern Facilities", desc: "Accessible campus with latest amenities", gradient: "from-[hsl(190_50%_95%)] to-[hsl(195_45%_89%)]", iconBg: "bg-[hsl(190_50%_38%)]", borderTint: "border-[hsl(190_38%_83%)]" },
];

const missionItems = [
  "Deliver quality coaching with experienced faculty",
  "Maintain student-focused teaching with small batches",
  "Innovate through hybrid learning and digital platforms",
];

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState<"students" | "parents">("students");
  const features = activeTab === "students" ? studentFeatures : parentFeatures;

  return (
    <>
      {/* Why Choose Us */}
      <section className="py-14 md:py-20 bg-warm-alt">
        <div className="container">
          <SectionHeading
            title="Why Choose Us"
            description="Dedicated support for students and complete transparency for parents."
            className="[&_h2]:text-primary [&_p]:text-muted-foreground"
          />

          {/* Pill Toggle */}
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full bg-muted p-1">
                <button
                  onClick={() => setActiveTab("students")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "students"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  For Students
                </button>
                <button
                  onClick={() => setActiveTab("parents")}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === "parents"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  For Parents
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto" key={activeTab}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.06} direction="up">
                  <div className={`group rounded-2xl bg-gradient-to-br ${f.gradient} border ${f.borderTint} p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-x-6 -translate-y-10" />
                    <div className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h4 className="text-[15px] font-bold text-foreground mb-1 tracking-tight">{f.label}</h4>
                    <p className="text-[13px] text-muted-foreground/80 leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Experience */}
      <section className="py-14 md:py-20 bg-gradient-navy text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Vision */}
            <ScrollReveal delay={0}>
              <div className="group rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8 h-full hover:bg-primary-foreground/8 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Lightbulb className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">Our Vision</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Enable students to achieve successful government careers through quality education, innovative teaching methods, and unwavering support throughout their preparation journey.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <div className="group rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8 h-full hover:bg-primary-foreground/8 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Target className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">Our Mission</h3>
                <ul className="space-y-2.5">
                  {missionItems.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-sm opacity-80">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal delay={0.2}>
              <div className="group rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8 h-full hover:bg-primary-foreground/8 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Award className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">Our Experience</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Our founders, leaders, advisors, and faculty bring decades of experience in education, public administration, and student empowerment. Together, they have guided countless young minds in their academic and professional journeys while making meaningful contributions to society.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
