import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Monitor, CheckCircle2, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";
import CallbackModal from "./CallbackModal";

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<string, string> = {
  RRB: "bg-primary text-primary-foreground",
  SSC: "bg-accent text-accent-foreground",
  Banking: "bg-success text-primary-foreground",
  "State Exams": "bg-navy text-primary-foreground",
};

const CourseCard = ({ course }: CourseCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const examName = course.examCategory === "State Exams" ? "ADRE" : course.name;

  return (
    <>
      <div className="group flex flex-col rounded-xl overflow-hidden border border-border bg-card hover:border-accent/40 hover:shadow-navy transition-all duration-300 h-full">
        {/* Image with overlays */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Category badge */}
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${categoryColors[course.examCategory] || "bg-muted text-foreground"}`}>
            {course.examCategory}
          </span>

          {/* Popular badge */}
          {course.popular && (
            <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-accent text-accent-foreground">
              ⭐ Popular
            </span>
          )}

          {/* Title overlay on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{course.icon}</span>
              <h3 className="font-display font-bold text-lg text-primary-foreground leading-tight drop-shadow-md">
                {course.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-4">
          {/* Description */}
          <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {course.description}
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg bg-muted text-foreground">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg bg-muted text-foreground">
              <Users className="w-3.5 h-3.5 text-accent" />
              Max {course.batchSize}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg bg-muted text-foreground">
              <Monitor className="w-3.5 h-3.5 text-accent" />
              {course.learningMode.replace("Hybrid (Online + Offline)", "Hybrid")}
            </span>
          </div>

          {/* Top 3 benefits */}
          <ul className="space-y-2 mb-4 flex-1">
            {course.highlights.slice(0, 3).map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-[12px] text-muted-foreground leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="pt-3 border-t border-border flex items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 h-9 rounded-lg bg-accent text-accent-foreground font-semibold text-[13px] flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Enrol Now <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              to={`/courses/${course.slug}`}
              className="h-9 px-4 rounded-lg border border-border text-foreground font-medium text-[13px] flex items-center justify-center hover:bg-muted transition-colors"
            >
              Details
            </Link>
          </div>
        </div>
      </div>

      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} prefilledExam={examName} />
    </>
  );
};

export default CourseCard;
