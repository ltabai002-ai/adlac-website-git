import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  GraduationCap,
  Users,
  Target,
  UserCheck,
  Repeat,
  BarChart3,
  ShieldCheck,
  Award,
  Wallet,
  TrendingUp,
  PiggyBank,
  Clock,
  Landmark,
  Train,
  FileText,
  MapPin,
  Shield,
  Calculator,
  Brain,
  Languages,
  Globe2,
  AlertTriangle,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import YouTubeVideo from "@/components/YouTubeVideo";
import CallbackModal from "@/components/CallbackModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { foundationVideos } from "@/data/foundationVideos";
import {
  // foundationFees removed — fee section deleted from this page
  heroHighlights,
  whyChooseAdlac,
  careerBenefits,
  jobCategories,
  coreSubjects,
  strategySteps,
  commonMistakes,
  courseHighlights,
  targetExams,
} from "@/data/foundationCourse";

// ---------------------------------------------------------------------
// Tiny presentational helpers
// ---------------------------------------------------------------------

const whyIcons = [GraduationCap, BookOpen, Target, UserCheck, Repeat, BarChart3];
const careerIcons = [ShieldCheck, Award, Wallet, TrendingUp, PiggyBank, Clock];
const sectorIcons: Record<string, typeof Landmark> = {
  Banking: Landmark,
  Railways: Train,
  SSC: FileText,
  "State Government": MapPin,
  Defence: Shield,
};
const subjectIcons = [Calculator, Brain, Languages, Globe2];
const benefitIcons = [Sparkles, ShieldCheck, Target, UserCheck, Award, TrendingUp, GraduationCap];

const SplitSection = ({
  id,
  reverse = false,
  children,
  video,
}: {
  id?: string;
  reverse?: boolean;
  children: ReactNode;
  video: ReactNode;
}) => (
  <section id={id} className="py-16 md:py-24">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <ScrollReveal direction={reverse ? "left" : "right"} className={reverse ? "lg:order-2" : ""}>
          {children}
        </ScrollReveal>
        <ScrollReveal direction={reverse ? "right" : "left"} className={reverse ? "lg:order-1" : ""}>
          {video}
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof GraduationCap;
  title: string;
  description: string;
}) => (
  <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/40 hover:shadow-navy transition-all duration-300">
    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-gradient-gold group-hover:text-accent-foreground transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

// ---------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------

const AdlacFoundationCourse = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "ADLAC Foundation Course — Government Exam Preparation in Guwahati";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      "Build a strong foundation for SSC, Banking, Railways and ADRE with the ADLAC Foundation Course in Guwahati. Expert faculty, structured curriculum, regular tests and personalised mentorship."
    );
  }, []);

  return (
    <Layout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block mb-5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/15 text-accent rounded-full border border-accent/30">
                ADLAC Foundation Course
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Complete Foundation for{" "}
                <span className="text-gradient-gold">Government Exam Success</span>
              </h1>
              <p className="mt-6 text-base md:text-lg opacity-85 max-w-3xl mx-auto leading-relaxed">
                Build a strong foundation in General Studies, Quantitative Aptitude, Reasoning and English while
                preparing for SSC, Banking, Railways, ADRE and other competitive examinations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ul className="mt-8 flex flex-wrap gap-3 justify-center">
                {heroHighlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="h-12 px-7 rounded-xl bg-gradient-gold text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 shadow-gold hover:opacity-95 transition-opacity"
                >
                  Enrol Now <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="h-12 px-7 rounded-xl border border-primary-foreground/30 text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ============ SECTION: Video Learning Center (Content L / Video R) ============ */}
      <section className="bg-warm-alt">
        <SplitSection
          id="learning-center"
          video={
            <YouTubeVideo
              url={foundationVideos.learningCenter.youtubeUrl}
              title={foundationVideos.learningCenter.title}
              description={foundationVideos.learningCenter.description}
            />
          }
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
            Learning Centre
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            Learn Directly From Our Experts
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Get a feel of the ADLAC classroom before you enrol. Our faculty regularly share concept videos, strategy
            sessions and exam tips here — and more videos are being added all the time.
          </p>
        </SplitSection>
      </section>

      {/* ============ SECTION: What We Offer (Video L / Content R) ============ */}
      <section className="bg-warm">
        <SplitSection
          id="what-we-offer"
          reverse
          video={
            <YouTubeVideo
              url={foundationVideos.whatWeOffer.youtubeUrl}
              title={foundationVideos.whatWeOffer.title}
              description={foundationVideos.whatWeOffer.description}
            />
          }
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
            What We Offer
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            Everything You Need to Crack Government Exams
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From structured classroom training and complete syllabus coverage to weekly tests, daily practice,
            personalised mentorship, doubt-solving sessions, performance analysis and printed study material —
            ADLAC gives you a complete preparation ecosystem under one roof.
          </p>
        </SplitSection>
      </section>

      {/* ============ SECTION 3: Government Career Benefits (Content L / Video R) ============ */}
      <SplitSection
        id="career-benefits"
        video={
          <YouTubeVideo
            url={foundationVideos.governmentCareer.youtubeUrl}
            title={foundationVideos.governmentCareer.title}
            description={foundationVideos.governmentCareer.description}
          />
        }
      >
        <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
          Career Pathway
        </span>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
          The Benefits of a Government Career
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          A government job is more than a salary — it is lifelong security, social respect and a clear growth path for you and your family.
        </p>
      </SplitSection>


      {/* ============ SECTION 4: Four Core Subjects (Video L / Content R) ============ */}
      <section className="bg-warm-alt">
        <SplitSection
          id="core-subjects"
          reverse
          video={
            <YouTubeVideo
              url={foundationVideos.coreSubjects.youtubeUrl}
              title={foundationVideos.coreSubjects.title}
              description={foundationVideos.coreSubjects.description}
            />
          }
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
            Core Pillars
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            Master the Four Core Subjects
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every government exam tests the same fundamentals — Quantitative Aptitude, Reasoning, English and General Studies. Master these four and you are ready for almost any pattern.
          </p>
        </SplitSection>
      </section>

      {/* ============ SECTION 5: What Not To Do (Content L / Video R) ============ */}
      <SplitSection
        id="mistakes"
        video={
          <YouTubeVideo
            url={foundationVideos.mistakes.youtubeUrl}
            title={foundationVideos.mistakes.title}
            description={foundationVideos.mistakes.description}
          />
        }
      >
        <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-destructive/10 text-destructive rounded-full border border-destructive/20">
          Avoid These
        </span>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
          Common Mistakes That Prevent Success
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Most aspirants do not fail because the exam is hard — they fail because of avoidable mistakes. Know them, skip them.
        </p>
      </SplitSection>


      {/* ============ SECTION 7: Strategic Deep Dive (Content L / Video R) ============ */}
      <SplitSection
        id="strategy"
        video={
          <YouTubeVideo
            url={foundationVideos.strategy.youtubeUrl}
            title={foundationVideos.strategy.title}
            description={foundationVideos.strategy.description}
          />
        }
      >
        <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
          Our Strategy
        </span>
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
          Strategic Preparation That Delivers Results
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          A clear, stage-by-stage learning roadmap that takes you from zero to exam-ready with confidence.
        </p>
      </SplitSection>

      {/* ============ SECTION 8: ADLAC Foundation Course (Video L / Content R) ============ */}
      <section className="bg-warm-alt">
        <SplitSection
          id="course"
          reverse
          video={
            <YouTubeVideo
              url={foundationVideos.foundationCourse.youtubeUrl}
              title={foundationVideos.foundationCourse.title}
              description={foundationVideos.foundationCourse.description}
            />
          }
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
            The Programme
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            ADLAC Foundation Course
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A complete programme designed for students preparing for SSC, Banking, Railways, ADRE and other government examinations.
          </p>
        </SplitSection>
      </section>



      {/* ============ SECTION 14: Final CTA ============ */}
      <section className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
        </div>
        <div className="container relative py-16 md:py-24 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Government Exam Journey Today
            </h2>
            <p className="mt-5 max-w-2xl mx-auto opacity-85 leading-relaxed">
              Join the ADLAC Foundation Course and build the right strategy, knowledge and confidence needed to
              succeed in competitive examinations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="h-12 px-7 rounded-xl bg-gradient-gold text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 shadow-gold hover:opacity-95 transition-opacity"
              >
                Enrol Now <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/contact"
                className="h-12 px-7 rounded-xl border border-primary-foreground/30 text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} prefilledExam="Foundation Course" />
    </Layout>
  );
};

export default AdlacFoundationCourse;
