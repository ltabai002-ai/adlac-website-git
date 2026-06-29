import { useState } from "react";
import { Play, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { faculty, Faculty } from "@/data/faculty";
import { advisors, Advisor } from "@/data/advisors";
import FacultyProfileModal, { getFacultyImage } from "@/components/FacultyProfileModal";
import AdvisorProfileModal, { getAdvisorImage } from "@/components/AdvisorProfileModal";
import LeadershipProfileModal, { leaders, Leader, getLeaderImage, getLeaderInitials } from "@/components/LeadershipProfileModal";
import WhyChooseUs from "@/components/WhyChooseUs";

// Profiles that should show initials instead of images
const initialsMap: Record<string, string> = {
  "pulak-bhattacharyya": "PB",
  "dr-sir": "DR",
  "n-bhuyan": "NB",
  "robin-kalita": "RK",
  "raman-bora": "RB",
};

const InitialsAvatar = ({ initials }: { initials: string }) => (
  <div className="w-full h-full flex items-center justify-center">
    <span className="font-display text-4xl md:text-5xl font-bold text-gold/80">{initials}</span>
  </div>
);

const timeline = [
{ year: "2015", event: "Academy Founded" },
{ year: "2017", event: "500+ Students Trained" },
{ year: "2019", event: "Infrastructure Expansion" },
{ year: "2021", event: "Online Learning Platform Launched" },
{ year: "2023", event: "1000+ Successful Selections" }];



const About = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <Layout>
    <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">About Us</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold">Empowering Government Job Aspirants With confidence</h1>
        <p className="mt-3 text-sm opacity-80 max-w-xl">Building careers through quality coaching, personalised mentoring, and innovative learning solutions in Guwahati.</p>
      </div>
    </section>

    {/* Intro Video */}
    <section className="py-10 md:py-14">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-navy shadow-navy">
            <iframe
              src="https://www.youtube.com/embed/Wyferueaw-Q?rel=0&modestbranding=1"
              title="About Advanced Learning Academy"
              className="w-full h-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Journey Infographic - commented out for later use
              <section className="py-14 md:py-20 bg-gradient-navy text-primary-foreground overflow-hidden">
               <div className="container">
                 <SectionHeading title="Our Journey" className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/60" />
                  <div className="hidden lg:block relative mt-16 mb-8">
                   <div className="absolute left-0 right-0 top-[calc(50%-1px)] h-[3px] bg-primary-foreground/10 rounded-full z-0" />
                   <div className="absolute left-0 right-0 top-[calc(50%-1px)] h-[3px] bg-gradient-gold rounded-full z-0" />
                    <div className="grid grid-cols-5 relative">
                     {timeline.map((t, i) => {
                       const isAbove = i % 2 === 0;
                       return (
                         <ScrollReveal key={i} delay={i * 0.12} direction="none">
                           <div className="flex flex-col items-center relative" style={{ height: '220px' }}>
                             {isAbove ? (
                               <>
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-[90%]">
                                   <div className="px-4 py-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
                                     <p className="text-xs text-gold font-semibold tracking-wide">{t.year}</p>
                                     <p className="text-sm font-medium mt-1.5 leading-snug">{t.event}</p>
                                   </div>
                                 </div>
                                 <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gold/40" style={{ top: '76px', bottom: 'calc(50% + 6px)' }} />
                                 <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                                   <div className="w-3.5 h-3.5 rounded-full bg-gold border-2 border-gold-light shadow-gold" />
                                   {i === timeline.length - 1 && <div className="absolute inset-0 rounded-full animate-pulse-gold" />}
                                 </div>
                               </>
                             ) : (
                               <>
                                 <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                                   <div className="w-3.5 h-3.5 rounded-full bg-gold border-2 border-gold-light shadow-gold" />
                                   {i === timeline.length - 1 && <div className="absolute inset-0 rounded-full animate-pulse-gold" />}
                                 </div>
                                 <div className="absolute left-1/2 -translate-x-1/2 w-px bg-gold/40" style={{ top: 'calc(50% + 6px)', bottom: '76px' }} />
                                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-[90%]">
                                   <div className="px-4 py-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
                                     <p className="text-xs text-gold font-semibold tracking-wide">{t.year}</p>
                                     <p className="text-sm font-medium mt-1.5 leading-snug">{t.event}</p>
                                   </div>
                                 </div>
                               </>
                             )}
                           </div>
                         </ScrollReveal>
                       );
                     })}
                   </div>
                 </div>
                  <div className="lg:hidden relative mt-6">
                   <div className="absolute left-[6px] top-0 bottom-0 w-0.5 bg-primary-foreground/10" />
                   <div className="absolute left-[6px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold-dark" />
                    {timeline.map((t, i) => (
                     <ScrollReveal key={i} delay={i * 0.1}>
                       <div className="relative flex items-start gap-5 mb-8 last:mb-0">
                         <div className="relative z-10 shrink-0 mt-2">
                           <div className="w-3.5 h-3.5 rounded-full bg-gold border-2 border-gold-light shadow-gold" />
                           {i === timeline.length - 1 && (
                             <div className="absolute inset-0 rounded-full animate-pulse-gold" />
                           )}
                         </div>
                         <div className="flex-1 pt-1">
                           <div className="px-4 py-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                             <p className="text-xs text-gold font-semibold tracking-wide">{t.year}</p>
                             <p className="text-sm font-medium mt-1">{t.event}</p>
                           </div>
                         </div>
                       </div>
                     </ScrollReveal>
                   ))}
                 </div>
               </div>
              </section>
              */



      }

    {/* For Students & Parents + Vision & Mission */}
    <WhyChooseUs />


    {/* Leadership */}
    <section className="bg-warm-alt py-10 md:py-20">
      <div className="container">
        <SectionHeading
            label="Meet Our Leadership"
            title="Learn from the Best"
            description="Experienced educators passionate about your success." />

        {/* Leadership - Directors */}
        <p className="text-[11px] font-semibold uppercase tracking-wider text-gold mb-3">Leadership</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 max-w-3xl mx-auto">
          {leaders.map((l, i) =>
            <ScrollReveal key={l.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl border-2 border-gold/20 overflow-hidden hover:shadow-navy transition-shadow group relative">
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gold text-primary">{l.role}</span>
                </div>
                <div className="relative h-52 md:h-64 bg-gradient-navy overflow-hidden">
                  {initialsMap[l.image] ? (
                    <InitialsAvatar initials={initialsMap[l.image]} />
                  ) : (
                    <img
                      src={getLeaderImage(l.image)}
                      alt={l.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-bold text-primary-foreground text-lg md:text-xl leading-tight">{l.name}</h3>
                    
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[13px] text-accent font-semibold mb-1">{l.credentials}</p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{l.totalExperience} of experience · {l.specializations?.slice(0, 2).join(", ")}</p>
                  <button
                    onClick={() => setSelectedLeader(l)}
                    className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all">
                    <Eye className="w-4 h-4" /> View Profile
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Faculty */}
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-3">Faculty</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {faculty.map((f, i) =>
            <ScrollReveal key={f.id} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-navy transition-shadow group">
                <div className="relative h-48 md:h-56 bg-gradient-navy overflow-hidden">
                  {initialsMap[f.image] ? (
                    <InitialsAvatar initials={initialsMap[f.image]} />
                  ) : (
                    <img
                      src={getFacultyImage(f.image)}
                      alt={f.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-bold text-primary-foreground text-base md:text-lg leading-tight">{f.name}</h3>
                    <p className="text-[11px] md:text-xs text-gold font-medium">{f.designation}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[13px] text-accent font-semibold mb-1">{f.primarySubject}</p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{f.totalExperience} of experience · {f.teachingStyle} · {f.studentsTrained ? `${f.studentsTrained} students trained` : f.examsSpecialised.slice(0, 2).join(", ")}</p>
                  <button
                    onClick={() => setSelectedFaculty(f)}
                    className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all">
                    <Eye className="w-4 h-4" /> View Profile
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Advisors & Guest Lecturers */}
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-3 mt-10">Advisors & Guest Lecturers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {advisors.map((a, i) =>
            <ScrollReveal key={a.id} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-navy transition-shadow group">
                <div className="relative h-48 md:h-56 bg-gradient-navy overflow-hidden">
                  <img
                    src={getAdvisorImage(a.image)}
                    alt={a.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-bold text-primary-foreground text-base md:text-lg leading-tight">{a.name}</h3>
                    <p className="text-[11px] md:text-xs text-gold font-medium">{a.designation}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[13px] text-accent font-semibold mb-1">{a.primaryDomain}</p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{a.totalExperience} · {a.expertiseAreas.slice(0, 2).join(", ")}</p>
                  <button
                    onClick={() => setSelectedAdvisor(a)}
                    className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all">
                    <Eye className="w-4 h-4" /> View Profile
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>

    <FacultyProfileModal faculty={selectedFaculty} open={!!selectedFaculty} onClose={() => setSelectedFaculty(null)} />
    <LeadershipProfileModal leader={selectedLeader} open={!!selectedLeader} onClose={() => setSelectedLeader(null)} />
    <AdvisorProfileModal advisor={selectedAdvisor} open={!!selectedAdvisor} onClose={() => setSelectedAdvisor(null)} />
  </Layout>);

};

export default About;