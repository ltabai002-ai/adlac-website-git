import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, ChevronRight, Clock, Users, Monitor, BookOpen, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { courses } from "@/data/courses";
import CallbackModal from "@/components/CallbackModal";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!course) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Course Not Found</h1>
          <Link to="/courses" className="text-accent mt-4 inline-block">← Back to Courses</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-navy py-12 md:py-20 text-primary-foreground">
        <div className="container">
          <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
            <Link to="/courses" className="hover:opacity-100">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span>{course.name}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-4xl mb-4 block">{course.icon}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">{course.name} Preparation</h1>
              <p className="text-sm opacity-80 leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-foreground/10 text-sm">
                  <Clock className="w-4 h-4 text-gold" /> {course.duration}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-foreground/10 text-sm">
                  <Users className="w-4 h-4 text-gold" /> Max {course.batchSize}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-foreground/10 text-sm">
                  <Monitor className="w-4 h-4 text-gold" /> {course.learningMode}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setModalOpen(true)} className="h-11 px-6 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center hover:opacity-90 transition-opacity">
                  Book Demo Class
                </button>
                <button onClick={() => setModalOpen(true)} className="h-11 px-6 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm flex items-center hover:bg-primary-foreground/10">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-navy-dark/50 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center mb-3">
                <Play className="w-6 h-6 text-accent-foreground ml-1" />
              </div>
              <span className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Online Features */}
      <section className="py-10 md:py-14 bg-warm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Monitor, label: "Live Online Classes" },
              { icon: BookOpen, label: "Recorded Lectures" },
              { icon: Users, label: "Interactive Sessions" },
              { icon: CheckCircle, label: "Performance Tracking" },
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border">
                  <f.icon className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-medium text-foreground">{f.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 md:py-14">
        <div className="container">
          <SectionHeading title="Course Highlights" align="left" />
          <div className="grid sm:grid-cols-2 gap-3">
            {course.highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-10 md:py-14 bg-warm-alt">
        <div className="container">
          <SectionHeading title="Detailed Syllabus" align="left" />
          <div className="grid md:grid-cols-2 gap-5">
            {course.syllabusSections.map((sec, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-display font-bold text-foreground mb-3">{sec.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {sec.topics.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="py-10 md:py-14">
        <div className="container">
          <SectionHeading title="Exam Pattern" align="left" />
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 font-semibold text-foreground">Section</th>
                    <th className="text-center p-3 font-semibold text-foreground">Questions</th>
                    <th className="text-center p-3 font-semibold text-foreground">Marks</th>
                    <th className="text-center p-3 font-semibold text-foreground">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {course.examPattern.map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 text-foreground">{row.section}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.questions}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.marks}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-10 md:py-14 bg-warm">
        <div className="container">
          <SectionHeading title="Curriculum Roadmap" align="left" />
          <div className="space-y-4">
            {course.curriculumRoadmap.map((phase, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{phase.phase}</h3>
                    <p className="text-xs text-accent font-medium mb-1">{phase.weeks}</p>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="py-10 md:py-14">
        <div className="container">
          <SectionHeading title="Batch Timings" align="left" />
          <div className="grid sm:grid-cols-2 gap-4 lg:flex lg:justify-center">
            {course.batchTimings.map((bt, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="lg:w-72">
                <div className="p-5 rounded-xl bg-card border border-border text-center">
                  <h3 className="font-display font-bold text-foreground mb-2">{bt.batch}</h3>
                  <p className="text-sm font-semibold text-accent mt-1">{bt.time}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to Start?</h2>
          <p className="text-sm opacity-80 mb-6">Join the next batch and take the first step towards your dream government job.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => setModalOpen(true)} className="h-12 px-6 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center hover:opacity-90">
              Book Demo Class
            </button>
            <button onClick={() => setModalOpen(true)} className="h-12 px-6 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm flex items-center hover:bg-primary-foreground/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} prefilledExam={course.examCategory === "State Exams" ? "ADRE" : course.name} />
    </Layout>
  );
};

export default CourseDetail;
