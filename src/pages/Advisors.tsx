import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const advisors = [
  {
    initials: "RG",
    name: "Dr. Rakesh Goswami",
    designation: "Senior Academic Advisor",
    bio: "Former SSC examiner with 25 years in the competitive exam ecosystem. Provides strategic guidance on exam pattern changes and preparation methodologies.",
    qualifications: "Ph.D. Public Administration, Former Civil Servant",
    expertise: ["Exam Strategy", "Policy Updates", "Career Guidance"],
    quote: "Understanding the examiner's mind is half the battle won.",
  },
  {
    initials: "NK",
    name: "Prof. Nirmali Kakati",
    designation: "Banking Exam Advisor",
    bio: "Retired banking professional with expertise in IBPS and SBI exam preparation. Guides students on banking awareness and interview techniques.",
    qualifications: "MBA Finance, 30 Years Banking Experience",
    expertise: ["Banking Awareness", "Interview Coaching", "Financial Literacy"],
    quote: "Banking is not just a career — it's a service to the nation's economic backbone.",
  },
  {
    initials: "SD",
    name: "Mr. Sanjay Dutta",
    designation: "Railway Exam Advisor",
    bio: "Former Railway Board member who brings insider perspective on RRB exam patterns and selection processes.",
    qualifications: "M.Tech., Former Railway Board Member",
    expertise: ["Railway Exams", "Technical Guidance", "Career Planning"],
    quote: "Indian Railways offers one of the most stable and rewarding career paths.",
  },
];

const Advisors = () => (
  <Layout>
    <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
      <div className="container">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">Leadership</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold">Academic Advisors</h1>
        <p className="mt-2 text-sm opacity-80">Industry experts who shape our curriculum and strategy.</p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container">
        <div className="space-y-8">
          {advisors.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid md:grid-cols-4 gap-0">
                  <div className="bg-gradient-navy p-6 flex flex-col items-center justify-center text-primary-foreground">
                    <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/30 flex items-center justify-center mb-3">
                      <span className="text-2xl font-display font-bold text-gold">{a.initials}</span>
                    </div>
                    <h3 className="font-display font-bold text-center">{a.name}</h3>
                    <p className="text-xs text-gold mt-1">{a.designation}</p>
                  </div>
                  <div className="md:col-span-3 p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{a.bio}</p>
                    <p className="text-xs text-foreground font-medium mb-3">{a.qualifications}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {a.expertise.map((e) => (
                        <span key={e} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium">{e}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 items-start text-muted-foreground">
                      <Quote className="w-4 h-4 text-accent/50 shrink-0 mt-0.5" />
                      <p className="text-xs italic">"{a.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Advisors;
