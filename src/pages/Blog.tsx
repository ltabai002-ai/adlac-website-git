import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts, blogCategories } from "@/data/blog";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <Layout>
      <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold">Blog & Resources</h1>
          <p className="mt-2 text-sm opacity-80">Expert tips, strategies, and guides for competitive exam preparation.</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container">
          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-9 pr-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                    category === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {!search && category === "All" && (
            <div className="mb-10">
              <h2 className="font-display text-lg font-bold mb-4">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {featured.map((post, i) => (
                  <ScrollReveal key={post.id} delay={i * 0.08}>
                    <Link to={`/blog/${post.slug}`} className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-navy transition-shadow">
                      <div className="h-32 bg-gradient-navy flex items-center justify-center">
                        <span className="text-2xl">📝</span>
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{post.category}</span>
                        <h3 className="font-display font-bold text-sm text-foreground mt-1 line-clamp-2 group-hover:text-accent transition-colors">{post.title}</h3>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span>{post.author}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div className="space-y-4">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <Link to={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-navy transition-shadow">
                  <div className="sm:w-32 h-24 sm:h-auto rounded-lg bg-gradient-navy flex items-center justify-center shrink-0">
                    <span className="text-xl">📝</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{post.category}</span>
                    <h3 className="font-display font-bold text-foreground mt-1 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.publishDate}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground self-center hidden sm:block" />
                </Link>
              </ScrollReveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-10">No articles found.</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
