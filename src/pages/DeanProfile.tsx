import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Quote } from "lucide-react";

const DeanProfile = () => (
  <Layout>
    <section className="bg-gradient-navy py-12 md:py-20 text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gold/20 border-4 border-gold/30 flex items-center justify-center">
              <span className="text-5xl font-display font-bold text-gold">MB</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">Dean of Academics</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Prof. Meera Bora</h1>
            <p className="text-sm opacity-80 mb-4">Dean of Academics, The Advanced Learning Academy</p>
            <div className="flex flex-wrap gap-2">
              {["M.Phil. Mathematics", "15+ Years in Education", "Curriculum Expert"].map((q) => (
                <span key={q} className="px-3 py-1 text-xs rounded-full bg-primary-foreground/10 border border-primary-foreground/20">{q}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 md:py-14">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-xl font-bold mb-4">Biography</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>Prof. Meera Bora brings 15+ years of academic leadership to The Advanced Learning Academy. As Dean of Academics, she oversees curriculum design, faculty development, and student performance tracking.</p>
            <p>Her data-driven approach to teaching has helped establish the academy's renowned mock test and performance analysis system that students rely on for measurable improvement.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <h2 className="font-display text-xl font-bold mb-4">Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Designed curriculum for 6+ competitive exams",
              "Implemented AI-based performance tracking",
              "Published research on exam preparation methods",
              "Mentored 50+ faculty members",
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                <Award className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div className="p-6 rounded-xl bg-warm-alt border border-border">
            <Quote className="w-8 h-8 text-accent/30 mb-3" />
            <p className="text-sm text-foreground italic leading-relaxed">
              "A good curriculum is like a roadmap — it doesn't just show you the destination, it guides you through every turn with confidence."
            </p>
            <p className="text-sm font-semibold text-foreground mt-3">— Prof. Meera Bora</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <h2 className="font-display text-xl font-bold mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {["Curriculum Development", "Academic Assessment", "Faculty Training", "Performance Analytics", "Educational Technology"].map((e) => (
              <span key={e} className="px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent font-medium">{e}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default DeanProfile;
