import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import { courses, courseCategories } from "@/data/courses";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? courses : courses.filter((c) => c.examCategory === activeCategory);

  return (
    <Layout>
      <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Our Courses</h1>
          <p className="mt-2 text-sm opacity-80 max-w-xl">Explore our specialised programmes for Railway, SSC, Banking, and State exams.</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-navy"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course, i) => (
              <ScrollReveal key={course.id} delay={i * 0.08}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
