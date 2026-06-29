import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, BookOpen, Users, Quote } from "lucide-react";

const DirectorProfile = () => (
  <Layout>
    <section className="bg-gradient-navy py-12 md:py-20 text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gold/20 border-4 border-gold/30 flex items-center justify-center">
              <span className="text-5xl font-display font-bold text-gold">AK</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">Director</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Dr. Anand Kumar</h1>
            <p className="text-sm opacity-80 mb-4">Founder & Director, The Advanced Learning Academy</p>
            <div className="flex flex-wrap gap-2">
              {["Ph.D. Education", "20+ Years Experience", "IAS Trainer"].map((q) => (
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
          <div className="prose prose-sm text-muted-foreground space-y-3">
            <p>Dr. Anand Kumar founded The Advanced Learning Academy in 2015 with a singular vision — to bring quality competitive exam coaching to the students of Assam and Northeast India.</p>
            <p>With over two decades of experience in education, Dr. Kumar has trained thousands of students who have gone on to secure positions in prestigious government services across Railway, SSC, Banking, and State-level exams.</p>
            <p>His belief in small-batch teaching and personalised mentoring has been the cornerstone of the academy's remarkable success rate of 98%.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <h2 className="font-display text-xl font-bold mb-4">Achievements</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Founded the academy in 2015",
              "Trained 5000+ students",
              "1000+ successful selections",
              "Introduced hybrid learning model in NE India",
              "Published author on competitive exam strategies",
              "Regular speaker at education conferences",
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
              "Education is not the filling of a pail, but the lighting of a fire. At The Advanced Learning Academy, we don't just prepare students for exams — we ignite their potential for lifelong success."
            </p>
            <p className="text-sm font-semibold text-foreground mt-3">— Dr. Anand Kumar</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <h2 className="font-display text-xl font-bold mb-4">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {["Competitive Exam Strategy", "Education Administration", "Curriculum Design", "Student Mentoring", "Hybrid Learning Systems", "Faculty Training"].map((e) => (
              <span key={e} className="px-3 py-1.5 text-xs rounded-full bg-accent/10 text-accent font-medium">{e}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default DirectorProfile;
