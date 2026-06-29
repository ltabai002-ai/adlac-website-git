import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { courses } from "@/data/courses";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.examCategory.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <Layout>
      <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-2xl md:text-3xl font-bold">Search Results</h1>
          <p className="mt-2 text-sm opacity-80">
            {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container">
          {results.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">No courses found for "{query}"</p>
              <Link to="/courses" className="text-accent font-medium hover:underline">Browse all courses →</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="group block bg-card rounded-xl border border-border p-5 hover:shadow-navy hover:border-accent/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{course.icon}</span>
                    <div>
                      <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors">{course.name}</h3>
                      <span className="text-xs text-muted-foreground">{course.examCategory}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">{course.duration}</span>
                    <span className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">{course.learningMode}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    View Details <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchResults;
