import { useState, useRef, useEffect, useCallback } from "react";
import { submitLead, isValidPhone, checkPhoneExists } from "@/lib/leadApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, Monitor, BookOpen, FileCheck, UserCheck, MapPin,
  ChevronRight, Play, Wifi, BookOpenCheck, BarChart3, HelpCircle,
  Snowflake, Car, Accessibility, Building2, MonitorSmartphone,
  Clock, Download, MessageSquare, TrendingUp, Star, Quote, CalendarCheck, ArrowRight, Eye } from
"lucide-react";
import Layout from "@/components/Layout";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallbackModal from "@/components/CallbackModal";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import { courses, courseCategories } from "@/data/courses";
import { faculty, Faculty } from "@/data/faculty";
import FacultyProfileModal, { getFacultyImage } from "@/components/FacultyProfileModal";
import { defaultTestimonials } from "@/data/testimonials";

const highlights = [
{ icon: Users, label: "Small Batches", desc: "Max 20 students" },
{ icon: Monitor, label: "Online Classes", desc: "Playback Available" },
{ icon: BookOpen, label: "Study Materials", desc: "Print + Digital" },
{ icon: FileCheck, label: "Mock Tests", desc: "Full-length exams" },
{ icon: UserCheck, label: "Mentoring", desc: "Personalised support" }];


const methodology = [
{ icon: BookOpenCheck, title: "Concept Classes", desc: "3 days/week, online & offline" },
{ icon: FileCheck, title: "Weekly Tests", desc: "Practice with real exam patterns" },
{ icon: BarChart3, title: "Mock Exams", desc: "Full-length with detailed analysis" },
{ icon: TrendingUp, title: "Performance Ranking", desc: "Track your progress vs peers" },
{ icon: HelpCircle, title: "Doubt Clearing", desc: "Dedicated support sessions" },
{ icon: UserCheck, title: "Remedial Support", desc: "Extra help where needed" }];


const infrastructure = [
{ icon: Snowflake, label: "AC Classrooms" },
{ icon: Wifi, label: "WiFi Campus" },
{ icon: BookOpen, label: "Library" },
{ icon: Monitor, label: "Computer Lab" },
{ icon: Car, label: "Parking" },

{ icon: Accessibility, label: "Accessible" },
{ icon: Building2, label: "Study Rooms" }];


const mobileFeatures = [
{ icon: Clock, label: "24/7 Access" },
{ icon: HelpCircle, label: "Instant Doubts" },
{ icon: MessageSquare, label: "Faculty Chat" },
{ icon: Download, label: "Offline Downloads" },
{ icon: TrendingUp, label: "Analytics" }];


const faqs = [
{ q: "What study materials do you provide?", a: "We provide comprehensive printed and digital study materials covering the complete syllabus, previous year papers, practice sets, and current affairs capsules." },
{ q: "Do you offer online classes?", a: "Yes! All our courses are available in hybrid mode — attend classes offline at our Guwahati campus or join online from anywhere. Recorded lectures are also available." },
{ q: "What is the batch size?", a: "We maintain a strict maximum of 20 students per batch to ensure personalised attention and effective doubt resolution." },
{ q: "How are mock tests conducted?", a: "We conduct weekly sectional tests and bi-weekly full-length mock exams. Each test is followed by detailed analysis with all-India ranking." },
{ q: "Do you have fast-track batches?", a: "Yes, we offer fast-track intensive batches for students who need to prepare in a shorter time frame. Contact us for upcoming fast-track schedules." },
{ q: "Will enrolled students get mobile app access?", a: "Our mobile learning platform is coming soon! All enrolled students will get free access featuring 24/7 course access, doubt clearing, and performance analytics." }];


/* Inline mid-page CTA component */
const MidPageCTA = ({ title, onClick }: {title: string; onClick: () => void;}) =>
<ScrollReveal>
    <div className="my-2 md:my-6 mx-4 md:mx-auto md:max-w-lg">
      <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-3 px-5 py-4 md:py-3 rounded-2xl md:rounded-xl bg-gradient-gold shadow-gold active:scale-[0.98] transition-all group">
      
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-9 md:h-9 rounded-xl bg-accent-foreground/15 flex items-center justify-center shrink-0">
            <CalendarCheck className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <span className="text-[14px] md:text-sm font-bold text-accent-foreground block leading-tight text-left">{title}</span>
            <span className="text-[11px] text-accent-foreground/70 font-medium">Free · No commitment</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-accent-foreground group-hover:translate-x-1 transition-transform shrink-0" />
      </button>
    </div>
  </ScrollReveal>;


/* Mobile marquee with auto-scroll + manual swipe */
const MobileMarquee = ({ highlights }: {highlights: {icon: React.ComponentType<{className?: string;}>;label: string;desc: string;}[];}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPaused = useRef(false);
  const speed = 0.5; // px per frame

  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (el && !isPaused.current) {
      el.scrollLeft += speed;
      // Loop: when first set scrolls out, jump back
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    }
    animRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animRef.current);
  }, [autoScroll]);

  return (
    <div
      ref={scrollRef}
      className="md:hidden flex gap-3 overflow-x-auto scrollbar-hide touch-pan-x px-4"
      onTouchStart={() => {isPaused.current = true;}}
      onTouchEnd={() => {setTimeout(() => {isPaused.current = false;}, 2000);}}>
      
      {[0, 1].map((set) =>
      <div key={set} className="flex gap-3 shrink-0">
          {highlights.map((h, i) =>
        <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 shrink-0 min-w-[160px]">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <h.icon className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground leading-tight">{h.label}</p>
                <p className="text-[11px] text-muted-foreground">{h.desc}</p>
              </div>
            </div>
        )}
        </div>
      )}
    </div>);

};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "", exam: "", mode: "", message: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [scholarshipModalOpen, setScholarshipModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [coursesModalOpen, setCoursesModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);

  const filteredCourses = activeCategory === "all" ?
  courses :
  courses.filter((c) => c.examCategory === activeCategory);

  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadPhoneError, setLeadPhoneError] = useState("");

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadPhoneError("");

    if (!isValidPhone(leadForm.phone)) {
      setLeadPhoneError("Please enter a valid 10-digit phone number.");
      return;
    }

    setLeadSubmitting(true);

    const exists = await checkPhoneExists(leadForm.phone);
    if (exists) {
      setLeadPhoneError("This phone number is already registered. Our team will contact you soon.");
      setLeadSubmitting(false);
      return;
    }

    await submitLead({
      name: leadForm.name,
      phone: leadForm.phone,
      email: leadForm.email,
      exam: leadForm.exam,
      mode: leadForm.mode,
      message: leadForm.message,
      source: "HOMEPAGE_LEAD_FORM"
    });
    setLeadSubmitting(false);
    setLeadSubmitted(true);
    setTimeout(() => setLeadSubmitted(false), 3000);
  };

  return (
    <Layout>
      <div className="overflow-x-hidden">
      <section className="relative bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="container relative py-10 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                
              <h1 className="font-display text-[26px] leading-[1.15] md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Crack Government Exams{" "}
                <span className="text-gradient-gold">with Confidence</span>
              </h1>
              <p className="mt-3 text-[13px] md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                Results-focused coaching for Railway, SSC, Banking, and ADRE exams with expert guidance.
              </p>


              {/* CTAs — full width on mobile */}
              <div className="mt-5 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <Link
                    to="/courses"
                    className="h-12 sm:h-12 px-6 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
                    
                  Explore Programmes <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                    to="/contact?form=demo"
                    className="h-12 sm:h-12 px-6 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary-foreground/10 active:scale-[0.98] transition-all">
                    
                  Book Free Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights — auto-scrolling marquee on mobile, grid on desktop */}
      <section className="bg-card border-b border-border">
        <div className="py-4 md:py-6">
          {/* Desktop: static grid */}
          <div className="hidden md:block container">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center max-w-4xl mx-auto">
              {highlights.map((h, i) =>
                <ScrollReveal key={i} delay={i * 0.05} className="flex items-center gap-2.5 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <h.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground leading-tight">{h.label}</p>
                    <p className="text-[11px] text-muted-foreground">{h.desc}</p>
                  </div>
                </ScrollReveal>
                )}
            </div>
          </div>

          {/* Mobile: swipeable auto-scroll marquee */}
          <MobileMarquee highlights={highlights} />
        </div>
      </section>

      {/* Scholarship Exam Banner */}
      <section className="py-8 md:py-12">
        <div className="container">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary via-navy-dark to-primary shadow-navy">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold blur-3xl" />
                <div className="absolute bottom-0 left-10 w-60 h-60 rounded-full bg-gold-light blur-3xl" />
              </div>
              <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-[11px] font-semibold rounded-full bg-gold/20 text-gold-light border border-gold/20">
                    <Star className="w-3 h-3" /> Limited Seats
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                    Scholarship Exams <span className="text-gradient-gold">2026</span>
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-primary-foreground/80 max-w-lg leading-relaxed">
                    Appear for our Scholarship Exam and unlock up to <strong className="text-gold-light">100% fee waiver</strong> on all coaching programmes. Don't miss this opportunity!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-5 md:justify-start justify-center">
                    <button
                        onClick={() => setScholarshipModalOpen(true)}
                        className="h-12 px-8 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-gold">
                        
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-primary-foreground/60">Free registration · Results in 7 days</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CallbackModal open={scholarshipModalOpen} onClose={() => setScholarshipModalOpen(false)} prefilledExam="Scholarship Exams" />

      {/* Programmes Overview */}
      <section className="py-10 md:py-20">
        <div className="container">
          <SectionHeading
              label="Our Programmes"
              title="Government Exam Preparation"
              description="Specialised programmes for every major government competitive exam." />
            

          {/* Scrollable filter pills on mobile */}
          <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto scrollbar-hide pb-1 md:flex-wrap md:justify-center -mx-4 px-4 md:mx-0 md:px-0">
            {courseCategories.map((cat) =>
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat.id ?
                "bg-primary text-primary-foreground shadow-navy" :
                "bg-muted text-muted-foreground hover:bg-muted/80"}`
                }>
                
                {cat.label}
              </button>
              )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {filteredCourses.map((course, i) =>
              <ScrollReveal key={course.id} delay={i * 0.08}>
                <CourseCard course={course} />
              </ScrollReveal>
              )}
          </div>
        </div>
      </section>

      {/* Mid-page CTA 1 */}
      <MidPageCTA title="Book a free demo class today" onClick={() => setDemoModalOpen(true)} />
      <CallbackModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      {/* Founder Message */}
      <section className="bg-warm-alt py-10 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-center">
            {/* Video first on mobile for visual impact */}
            <ScrollReveal direction="right" className="order-first md:order-last">
              <div className="aspect-video rounded-2xl md:rounded-xl bg-gradient-navy overflow-hidden shadow-navy">
                <iframe
                  src="https://www.youtube.com/embed/eUQU8BWGvGE?rel=0&modestbranding=1"
                  title="From the Founder — Advanced Learning Academy"
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="inline-block mb-3 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full border border-accent/20">
                From the Founder 
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
                Empowering Dreams,<br className="md:hidden" /> Building Futures
              </h2>
              <div className="relative pl-4 border-l-2 border-accent/30 space-y-3 mb-4">
                <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed italic">
                  "AdLaC has been founded as an accessible platform for aspirants from Assam and the North-East to prepare for Grade 2 & 3 government jobs. We understand the strengths and weaknesses of our youth and all we are trying to do is to offer a mentorship in a cost-effective, homely and tech-savvy environment to prepare the aspirants for success."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-navy flex items-center justify-center">
                  <span className="text-sm font-display font-bold text-gold">TA</span>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-foreground leading-tight">Founder</p>
                  <p className="text-[11px] text-muted-foreground">The Advanced Learning Academy</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-10 md:py-20">
        <div className="container">
          <SectionHeading
              label="Our Approach"
              title="Structured Learning Methodology"
              description="A proven system combining concept clarity, regular testing, and personalised feedback." />
            
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {methodology.map((m, i) =>
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group p-3.5 md:p-5 rounded-xl border border-border bg-card hover:shadow-navy transition-all duration-300 h-full">
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <m.icon className="w-4 h-4 md:w-5 md:h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-[13px] md:text-base mb-0.5">{m.title}</h3>
                  <p className="text-[11px] md:text-sm text-muted-foreground leading-snug">{m.desc}</p>
                </div>
              </ScrollReveal>
              )}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-gradient-navy py-10 md:py-20 text-primary-foreground">
        <div className="container">
          <ScrollReveal className="mb-8 md:mb-12 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-gold/15 text-gold-light rounded-full border border-gold/25">
              Campus
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Modern Infrastructure
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
              State-of-the-art facilities in the heart of Guwahati.
            </p>
          </ScrollReveal>


          {/* Facilities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 md:gap-4">
            {infrastructure.map((item, i) =>
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  </div>
                  <span className="text-[12px] md:text-sm font-medium text-primary-foreground leading-tight">{item.label}</span>
                </div>
              </ScrollReveal>
              )}
          </div>
        </div>
      </section>

      {/* Mid-page CTA 2 */}
      <MidPageCTA title="Explore all courses & batch timings" onClick={() => setCoursesModalOpen(true)} />
      <CallbackModal open={coursesModalOpen} onClose={() => setCoursesModalOpen(false)} />

      {/* Mobile App Coming Soon */}
      <section className="py-10 md:py-20 bg-warm">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <ScrollReveal>
              <span className="inline-block mb-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-accent/10 text-accent rounded-full border border-accent/20">
                Coming Soon
              </span>
              <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-2">
                Learn on the Go
              </h2>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                Our mobile learning platform will bring the classroom to your pocket — access courses anytime and track your performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {mobileFeatures.map((f, i) =>
                  <span key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium rounded-lg bg-card border border-border">
                    <f.icon className="w-3.5 h-3.5 text-accent" /> {f.label}
                  </span>
                  )}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <div className="w-40 h-64 md:w-56 md:h-96 rounded-3xl bg-gradient-navy border-4 border-navy-light flex items-center justify-center animate-float">
                  <div className="text-center text-primary-foreground">
                    <MonitorSmartphone className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 text-gold" />
                    <p className="font-display font-bold text-[13px]">Mobile App</p>
                    <p className="text-[10px] opacity-70 mt-0.5">Coming Soon</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories - commented out for now
                                                                               <section className="py-10 md:py-20">
                                                                                <div className="container">
                                                                                  <SectionHeading
                                                                                      label="Success Stories"
                                                                                      title="Our Students, Our Pride"
                                                                                      description="Students who cracked their dream exams with our guidance." />
                                                                                    
                                                                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-8">
                                                                                    {defaultTestimonials.filter((t) => t.featured).map((t, i) =>
                                                                                      <ScrollReveal key={t.id} delay={i * 0.08}>
                                                                                        <div className="bg-card rounded-xl border border-border p-4 md:p-5 hover:shadow-navy transition-shadow flex gap-3 md:flex-col">
                                                                                          <Quote className="w-5 h-5 md:w-8 md:h-8 text-accent/30 shrink-0 md:mb-1" />
                                                                                          <div className="flex-1 min-w-0">
                                                                                            <p className="text-[13px] text-muted-foreground leading-relaxed mb-2 line-clamp-3 md:line-clamp-none">"{t.story}"</p>
                                                                                            <div className="border-t border-border pt-2">
                                                                                              <p className="font-semibold text-[13px] text-foreground">{t.studentName}</p>
                                                                                              <p className="text-[11px] text-accent font-medium">{t.examCleared} • {t.rankOrScore}</p>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </ScrollReveal>
                                                                                      )}
                                                                                  </div>
                                                                                  <div className="grid grid-cols-3 gap-3 max-w-sm md:max-w-lg mx-auto text-center">
                                                                                    {[
                                                                                      { num: "1000+", label: "Selections" },
                                                                                      { num: "98%", label: "Success Rate" },
                                                                                      { num: "15+", label: "Years Experience" }].
                                                                                      map((s, i) =>
                                                                                      <ScrollReveal key={i} delay={i * 0.1}>
                                                                                        <p className="font-display text-xl md:text-3xl font-bold text-foreground">{s.num}</p>
                                                                                        <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{s.label}</p>
                                                                                      </ScrollReveal>
                                                                                      )}
                                                                                  </div>
                                                                                </div>
                                                                               </section>
                                                                               */}

      {/* Why Choose Us */}
      <WhyChooseUs />


      {/* FAQs */}
      <section className="py-10 md:py-20">
        <div className="container max-w-3xl">
          <SectionHeading
              label="FAQs"
              title="Frequently Asked Questions" />
            
          <div className="space-y-2 md:space-y-3">
            {faqs.map((faq, i) =>
              <ScrollReveal key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-3.5 md:p-4 rounded-xl border border-border bg-card hover:shadow-sm active:bg-muted/30 transition-all">
                  
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] md:text-sm font-semibold text-foreground leading-snug">{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </div>
                  {openFaq === i &&
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-[13px] text-muted-foreground mt-2.5 leading-relaxed">
                    
                      {faq.a}
                    </motion.p>
                  }
                </button>
              </ScrollReveal>
              )}
          </div>
        </div>
      </section>

      {/* Lead Generation */}
      <section className="bg-gradient-navy py-10 md:py-20 text-primary-foreground">
        <div className="container max-w-2xl">
          <ScrollReveal className="mb-8 md:mb-12 text-center">
            <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-gold/15 text-gold-light rounded-full border border-gold/25">
              Get Started
            </span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Begin Your Journey Today
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
              Our academic counsellor will reach out within 24 hours.
            </p>
          </ScrollReveal>
          {leadSubmitted ?
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                <ChevronRight className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-display text-lg font-bold">Thank You!</h3>
              <p className="text-[13px] opacity-80 mt-1">Our team will contact you within 24 hours.</p>
            </div> :

            <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
              <input required placeholder="Full Name *" value={leadForm.name} onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
              className="h-11 md:h-12 px-4 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30" />
              <input required type="tel" inputMode="numeric" maxLength={10} pattern="\d{10}" placeholder="Phone Number * (10 digits)" value={leadForm.phone} onChange={(e) => {
                const phone = e.target.value.replace(/\D/g, "").slice(0, 10);
                setLeadForm({ ...leadForm, phone });
                setLeadPhoneError(phone.length > 0 && !isValidPhone(phone) ? "Please enter a valid 10-digit phone number." : "");
              }}
              className={`h-11 md:h-12 px-4 text-sm rounded-lg bg-primary-foreground/10 border text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 ${leadPhoneError ? "border-destructive" : "border-primary-foreground/20"}`} />
              {leadPhoneError && (
                <div className="sm:col-span-2 flex items-center gap-1.5 text-destructive text-xs bg-destructive/10 rounded-md px-3 py-1.5">
                  <span>{leadPhoneError}</span>
                </div>
              )}
              <input required type="email" placeholder="Email *" value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              className="h-11 md:h-12 px-4 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30" />
              <select required value={leadForm.exam} onChange={(e) => setLeadForm({ ...leadForm, exam: e.target.value })}
              className="h-11 md:h-12 px-4 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/30">
                <option value="" className="text-foreground">Exam Interest *</option>
                {["RRB NTPC", "SSC CGL", "SSC CHSL", "Bank Clerk", "ADRE", "Scholarship Exams", "Other"].map((e) => <option key={e} value={e} className="text-foreground">{e}</option>)}
              </select>
              <select value={leadForm.mode} onChange={(e) => setLeadForm({ ...leadForm, mode: e.target.value })}
              className="h-11 md:h-12 px-4 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/30">
                <option value="" className="text-foreground">Preferred Mode</option>
                {["Online", "Offline", "Hybrid"].map((m) => <option key={m} value={m} className="text-foreground">{m}</option>)}
              </select>
              <textarea placeholder="Message (optional)" value={leadForm.message} onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })} rows={3}
              className="sm:col-span-2 px-4 py-3 text-sm rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" />
              <button type="submit" disabled={leadSubmitting || (leadForm.phone.length > 0 && !isValidPhone(leadForm.phone))} className="sm:col-span-2 h-12 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                {leadSubmitting ? "Submitting…" : "Submit Inquiry"}
              </button>
            </form>
            }
        </div>
      </section>
      </div>
    </Layout>);

};

export default Index;