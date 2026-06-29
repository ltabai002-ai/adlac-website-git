import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import DirectorProfile from "./pages/DirectorProfile";
import DeanProfile from "./pages/DeanProfile";
import Advisors from "./pages/Advisors";
import AdlacFoundationCourse from "./pages/AdlacFoundationCourse";
// import Blog from "./pages/Blog";
// import BlogArticle from "./pages/BlogArticle";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import AdminTestimonials from "./pages/AdminTestimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/director" element={<DirectorProfile />} />
          <Route path="/about/dean" element={<DeanProfile />} />
          <Route path="/about/advisors" element={<Advisors />} />
          <Route path="/adlac-foundation-course" element={<AdlacFoundationCourse />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/:slug" element={<BlogArticle />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
