import { useState, useMemo, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Phone, ChevronRight, Clock, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/data/courses";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/adlac-foundation-course", label: "Foundation Course" },
  // { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.examCategory.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  useEffect(() => {
    setShowDropdown(searchQuery.trim().length > 0);
  }, [searchQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
      setOpen(false);
      setShowDropdown(false);
    }
  };

  const handleCourseClick = (slug: string) => {
    setSearchQuery("");
    setSearchOpen(false);
    setOpen(false);
    setShowDropdown(false);
    navigate(`/courses/${slug}`);
  };

  const SearchDropdown = () => {
    if (!showDropdown || filteredCourses.length === 0) return null;
    return (
      <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-[60] max-h-72 overflow-y-auto">
        {filteredCourses.map((course) => (
          <button
            key={course.id}
            type="button"
            onClick={() => handleCourseClick(course.slug)}
            className="w-full flex items-start gap-3 px-4 py-3 hover:bg-muted/60 transition-colors text-left border-b border-border last:border-b-0"
          >
            <span className="text-xl shrink-0 mt-0.5">{course.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{course.name}</p>
              <p className="text-xs text-muted-foreground truncate">{course.examCategory} · {course.duration}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)}
          className="w-full px-4 py-2.5 text-xs font-semibold text-accent hover:bg-muted/40 transition-colors text-center"
        >
          See all results for "{searchQuery}"
        </button>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="The Advanced Learning Academy" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-accent-foreground bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative" ref={dropdownRef}>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search courses…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                className="w-44 lg:w-56 h-9 pl-9 pr-3 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </form>
            <SearchDropdown />
          </div>
          <Link
            to="/contact?form=demo"
            className="h-9 px-4 rounded-lg bg-gradient-gold text-accent-foreground text-sm font-semibold flex items-center hover:opacity-90 transition-opacity"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile buttons */}
        <div className="flex md:hidden items-center gap-1">
          <a href="tel:+916002346625" className="p-2 rounded-md hover:bg-muted/50" aria-label="Call us">
            <Phone className="w-[18px] h-[18px] text-accent" />
          </a>
          <button onClick={() => { setSearchOpen(!searchOpen); setOpen(false); }} className="p-2 rounded-md hover:bg-muted/50">
            <Search className="w-[18px] h-[18px] text-foreground" />
          </button>
          <button onClick={() => { setOpen(!open); setSearchOpen(false); }} className="p-2 rounded-md hover:bg-muted/50">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-visible"
          >
            <div className="container py-2.5 relative" ref={!showDropdown ? undefined : dropdownRef}>
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search courses…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 h-10 px-4 text-sm rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
                <button type="submit" className="h-10 px-4 rounded-lg bg-gradient-gold text-accent-foreground text-sm font-semibold">
                  Go
                </button>
              </form>
              {/* Mobile search dropdown */}
              {showDropdown && filteredCourses.length > 0 && (
                <div className="absolute left-0 right-0 mx-4 mt-1 bg-card border border-border rounded-lg shadow-lg z-[60] max-h-60 overflow-y-auto">
                  {filteredCourses.map((course) => (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleCourseClick(course.slug)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/60 active:bg-muted transition-colors text-left border-b border-border last:border-b-0"
                    >
                      <span className="text-lg shrink-0">{course.icon}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground truncate">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.examCategory} · {course.duration}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-card"
          >
            <div className="container py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    location.pathname === link.to
                      ? "bg-accent/10 text-accent-foreground"
                      : "text-muted-foreground active:bg-muted/50"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-border">
                <Link
                  to="/contact?form=demo"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-lg bg-gradient-gold text-accent-foreground text-sm font-semibold flex items-center justify-center active:scale-[0.98] transition-transform"
                >
                  Book Free Demo Class
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
