import { useParams, Link } from "react-router-dom";
import { Clock, ChevronRight, Share2, Facebook, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blog";

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Article Not Found</h1>
          <Link to="/blog" className="text-accent mt-4 inline-block">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <Layout>
      <article>
        <section className="bg-gradient-navy py-12 md:py-16 text-primary-foreground">
          <div className="container max-w-3xl">
            <div className="flex items-center gap-2 text-sm opacity-70 mb-4">
              <Link to="/blog" className="hover:opacity-100">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="truncate">{post.title}</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">{post.category}</span>
            <h1 className="font-display text-2xl md:text-4xl font-bold mt-2 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm opacity-80">
              <span>By {post.author}</span>
              <span>{post.publishDate}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container max-w-3xl">
            {/* Share */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <span className="text-sm text-muted-foreground flex items-center gap-1"><Share2 className="w-4 h-4" /> Share:</span>
              {["FB", "TW", "LI"].map((s) => (
                <button key={s} className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {s}
                </button>
              ))}
            </div>

            {/* Content */}
            <ScrollReveal>
              <div className="prose prose-sm max-w-none text-foreground">
                {post.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("**") && para.endsWith("**")) {
                    return <h3 key={i} className="font-display font-bold text-lg mt-6 mb-2">{para.replace(/\*\*/g, "")}</h3>;
                  }
                  if (para.startsWith("**")) {
                    const parts = para.split("**");
                    return (
                      <div key={i} className="mb-4">
                        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : <span key={j}>{p}</span>)}
                      </div>
                    );
                  }
                  if (para.startsWith("- ")) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-1 mb-4">
                        {para.split("\n").map((li, j) => <li key={j} className="text-sm text-muted-foreground">{li.replace("- ", "")}</li>)}
                      </ul>
                    );
                  }
                  return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">{para}</p>;
                })}
              </div>
            </ScrollReveal>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">{tag}</span>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-navy text-primary-foreground text-center">
              <h3 className="font-display font-bold text-lg mb-2">Ready to Start Preparing?</h3>
              <p className="text-sm opacity-80 mb-4">Join our expert-led coaching programs and crack your dream government exam.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/courses" className="h-10 px-5 rounded-lg bg-gradient-gold text-accent-foreground font-semibold text-sm flex items-center hover:opacity-90">Explore Courses</Link>
                <Link to="/contact" className="h-10 px-5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm flex items-center hover:bg-primary-foreground/10">Contact Us</Link>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xl font-bold mb-4">Related Articles</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.slug}`} className="group p-4 bg-card rounded-xl border border-border hover:shadow-navy transition-shadow">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{r.category}</span>
                      <h4 className="font-display font-bold text-sm text-foreground mt-1 line-clamp-2 group-hover:text-accent transition-colors">{r.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><Clock className="w-3 h-3" /> {r.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogArticle;
