import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, className = "", align = "center" }: SectionHeadingProps) =>
<ScrollReveal className={`mb-8 md:mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
    {label &&
  <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
        {label}
      </span>
  }
    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
      {title}
    </h2>
    {description &&
  <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
        {description}
      </p>
  }
  </ScrollReveal>;


export default SectionHeading;