// =====================================================================
// ADLAC Foundation Course — Video Placeholders
// ---------------------------------------------------------------------
// To add/replace a video: paste a YouTube URL into `youtubeUrl`.
// Supported formats:
//   https://youtu.be/<ID>
//   https://www.youtube.com/watch?v=<ID>
//   https://www.youtube.com/embed/<ID>
// Leave `youtubeUrl` as an empty string ("") to show the
// "▶ Video Coming Soon" placeholder.
// =====================================================================

export interface FoundationVideo {
  id: string;
  youtubeUrl: string;
  title: string;
  description: string;
}

export const foundationVideos: Record<string, FoundationVideo> = {
  governmentCareer: {
    id: "governmentCareer",
    youtubeUrl: "https://www.youtube.com/watch?v=w8sW0ldJ5ZA",
    title: "Why a Government Career Changes Lives",
    description: "Hear our mentors explain the long-term advantages of building a career in government service.",
  },
  jobOpportunities: {
    id: "jobOpportunities",
    youtubeUrl: "",
    title: "Top Government Job Opportunities in 2026",
    description: "A guided tour of the most sought-after recruitment exams across Banking, Railways, SSC, State Government and Defence.",
  },
  coreSubjects: {
    id: "coreSubjects",
    youtubeUrl: "https://www.youtube.com/watch?v=em08RRMT48c",
    title: "Mastering the Four Core Subjects",
    description: "How Quantitative Aptitude, Reasoning, English and General Studies work together for exam success.",
  },
  strategy: {
    id: "strategy",
    youtubeUrl: "https://www.youtube.com/watch?v=gFC_7Fnztro",
    title: "ADLAC's Proven Preparation Strategy",
    description: "From foundation building to exam-day readiness — see the roadmap that delivers results.",
  },
  mistakes: {
    id: "mistakes",
    youtubeUrl: "https://www.youtube.com/watch?v=X-09s7e0oXw",
    title: "Common Mistakes Aspirants Must Avoid",
    description: "Save months of effort by learning what holds most candidates back from selection.",
  },
  foundationCourse: {
    id: "foundationCourse",
    youtubeUrl: "https://www.youtube.com/watch?v=wXifTryljM4",
    title: "Inside the ADLAC Foundation Course",
    description: "A complete walkthrough of the classroom experience, study material and mentorship.",
  },
  learningCenter: {
    id: "learningCenter",
    youtubeUrl: "https://www.youtube.com/watch?v=BGRvPhT6ia4",
    title: "Learn Directly From Our Experts",
    description: "Sample lecture from our faculty — more videos will be added to this learning centre soon.",
  },
  whatWeOffer: {
    id: "whatWeOffer",
    youtubeUrl: "https://www.youtube.com/watch?v=G0ifsduy3yk",
    title: "What We Offer at ADLAC",
    description: "A complete preparation ecosystem — classroom training, tests, mentorship and study material.",
  },
};
