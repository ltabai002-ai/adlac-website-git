import rrbNtpcImg from "@/assets/courses/rrb-ntpc.webp";
import sscCglImg from "@/assets/courses/ssc-cgl.webp";
import sscChslImg from "@/assets/courses/ssc-chsl.webp";

import bankClerkImg from "@/assets/courses/bank-clerk.webp";
import adreImg from "@/assets/courses/adre.webp";

export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  examCategory: string;
  duration: string;
  batchSize: number;
  learningMode: string;
  highlights: string[];
  syllabusSections: { title: string; topics: string[] }[];
  examPattern: { section: string; questions: number; marks: number; duration: string }[];
  curriculumRoadmap: { phase: string; weeks: string; description: string }[];
  batchTimings: { batch: string; days: string; time: string }[];
  tags: string[];
  popular?: boolean;
  icon: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: "rrb-ntpc",
    name: "RRB NTPC",
    slug: "rrb-ntpc",
    description: "Comprehensive preparation for Railway Recruitment Board Non-Technical Popular Categories exam covering all stages — CBT 1, CBT 2, and Typing/CBAT.",
    examCategory: "RRB",
    duration: "6 Months",
    batchSize: 20,
    learningMode: "Hybrid (Online + Offline)",
    highlights: [
      "Complete syllabus coverage for CBT 1 & CBT 2",
      "Weekly mock tests with detailed analysis",
      "Previous year paper solving sessions",
      "Current affairs daily capsule",
      "Doubt clearing sessions twice a week",
      "Interview preparation module",
    ],
    syllabusSections: [
      { title: "Mathematics", topics: ["Number System", "Percentage", "Profit & Loss", "Time & Work", "Algebra", "Geometry", "Trigonometry", "Data Interpretation"] },
      { title: "General Intelligence & Reasoning", topics: ["Analogies", "Coding-Decoding", "Syllogism", "Blood Relations", "Series", "Non-Verbal Reasoning"] },
      { title: "General Awareness", topics: ["Current Affairs", "History", "Geography", "Polity", "Economics", "General Science"] },
    ],
    examPattern: [
      { section: "Mathematics", questions: 30, marks: 30, duration: "90 min (shared)" },
      { section: "General Intelligence", questions: 30, marks: 30, duration: "90 min (shared)" },
      { section: "General Awareness", questions: 40, marks: 40, duration: "90 min (shared)" },
    ],
    curriculumRoadmap: [
      { phase: "Foundation", weeks: "Weeks 1–8", description: "Core concepts and fundamentals across all subjects" },
      { phase: "Practice", weeks: "Weeks 9–16", description: "Topic-wise tests, previous year papers, and problem solving" },
      { phase: "Mock & Review", weeks: "Weeks 17–24", description: "Full-length mocks, revision, and performance analysis" },
    ],
    batchTimings: [
      { batch: "Morning Batch", days: "", time: "6:30 AM – 9:30 AM" },
      { batch: "Evening Batch", days: "", time: "5:00 PM – 8:00 PM" },
    ],
    tags: ["Expert Lectures", "Online Support", "Railway Jobs"],
    popular: true,
    icon: "🚂",
    image: rrbNtpcImg,
  },
  {
    id: "ssc-cgl",
    name: "SSC CGL",
    slug: "ssc-cgl",
    description: "Master the Staff Selection Commission Combined Graduate Level exam with our structured programme covering Tier I to Tier IV preparation.",
    examCategory: "SSC",
    duration: "6 Months",
    batchSize: 20,
    learningMode: "Hybrid (Online + Offline)",
    highlights: [
      "Tier I to Tier IV comprehensive coverage",
      "Daily practice sets with solutions",
      "Speed building techniques for Quant & English",
      "Descriptive paper writing practice",
      "Computer proficiency training",
      "Monthly performance ranking",
    ],
    syllabusSections: [
      { title: "Quantitative Aptitude", topics: ["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Statistics", "Data Interpretation"] },
      { title: "English Language", topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Sentence Correction", "Cloze Test", "Para Jumbles"] },
      { title: "General Intelligence", topics: ["Analogies", "Classification", "Coding-Decoding", "Matrix", "Paper Folding", "Mirror Image"] },
      { title: "General Awareness", topics: ["History", "Geography", "Polity", "Economics", "Science", "Current Affairs"] },
    ],
    examPattern: [
      { section: "General Intelligence", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "General Awareness", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "Quantitative Aptitude", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "English Comprehension", questions: 25, marks: 50, duration: "60 min (shared)" },
    ],
    curriculumRoadmap: [
      { phase: "Foundation", weeks: "Weeks 1–10", description: "Strong base building in all four subjects" },
      { phase: "Advanced", weeks: "Weeks 11–20", description: "Advanced topics, shortcuts, and techniques" },
      { phase: "Testing", weeks: "Weeks 21–28", description: "Sectional and full-length mock tests" },
      { phase: "Revision", weeks: "Weeks 29–32", description: "Final revision and exam strategy" },
    ],
    batchTimings: [
      { batch: "Morning Batch", days: "", time: "6:30 AM – 9:30 AM" },
      { batch: "Evening Batch", days: "", time: "5:00 PM – 8:00 PM" },
    ],
    tags: ["Expert Lectures", "Online Support", "Central Govt Jobs"],
    popular: true,
    icon: "📋",
    image: sscCglImg,
  },
  {
    id: "ssc-chsl",
    name: "SSC CHSL",
    slug: "ssc-chsl",
    description: "Focused coaching for SSC Combined Higher Secondary Level exam — ideal for 12th pass candidates aiming for LDC, DEO, and PA/SA posts.",
    examCategory: "SSC",
    duration: "6 Months",
    batchSize: 20,
    learningMode: "Hybrid (Online + Offline)",
    highlights: [
      "Complete Tier I & Tier II preparation",
      "Typing test practice sessions",
      "Shortcut methods for quick solving",
      "Daily current affairs updates",
      "Weekly performance analysis",
      "Doubt resolution support",
    ],
    syllabusSections: [
      { title: "Quantitative Aptitude", topics: ["Number System", "Percentage", "Ratio", "Average", "SI/CI", "Geometry"] },
      { title: "English Language", topics: ["Spot the Error", "Fill in the Blanks", "Synonyms/Antonyms", "Spellings", "Idioms", "One Word Substitution"] },
      { title: "General Intelligence", topics: ["Series", "Analogies", "Coding-Decoding", "Puzzle", "Venn Diagram", "Statement & Conclusion"] },
      { title: "General Awareness", topics: ["Current Events", "History", "Culture", "Geography", "Economics", "Polity", "Science"] },
    ],
    examPattern: [
      { section: "English Language", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "General Intelligence", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "Quantitative Aptitude", questions: 25, marks: 50, duration: "60 min (shared)" },
      { section: "General Awareness", questions: 25, marks: 50, duration: "60 min (shared)" },
    ],
    curriculumRoadmap: [
      { phase: "Basics", weeks: "Weeks 1–6", description: "Fundamental concepts across all subjects" },
      { phase: "Practice", weeks: "Weeks 7–14", description: "Intensive practice and problem solving" },
      { phase: "Mocks", weeks: "Weeks 15–20", description: "Full mock tests and final revision" },
    ],
    batchTimings: [
      { batch: "Morning Batch", days: "", time: "6:30 AM – 9:30 AM" },
      { batch: "Evening Batch", days: "", time: "5:00 PM – 8:00 PM" },
    ],
    tags: ["12th Pass", "Online Support", "Typing Practice"],
    icon: "📝",
    image: sscChslImg,
  },
  {
    id: "bank-clerk",
    name: "Bank Clerk",
    slug: "bank-clerk",
    description: "Structured coaching for SBI Clerk and IBPS Clerk exams with focus on speed, accuracy, and comprehensive coverage of Prelims and Mains.",
    examCategory: "Banking",
    duration: "6 Months",
    batchSize: 20,
    learningMode: "Hybrid (Online + Offline)",
    highlights: [
      "SBI Clerk + IBPS Clerk combined prep",
      "Speed improvement techniques",
      "Accuracy-based practice sessions",
      "Banking terminology workshops",
      "Weekly sectional tests",
      "Performance tracking dashboard",
    ],
    syllabusSections: [
      { title: "Numerical Ability", topics: ["Simplification", "Number Series", "Data Interpretation", "Arithmetic Problems"] },
      { title: "Reasoning Ability", topics: ["Puzzles", "Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding"] },
      { title: "English Language", topics: ["Reading Comprehension", "Cloze Test", "Error Spotting", "Phrase Replacement"] },
      { title: "General Awareness", topics: ["Current Affairs", "Banking Awareness", "Financial Terms", "Static GK"] },
    ],
    examPattern: [
      { section: "English Language", questions: 30, marks: 30, duration: "20 min" },
      { section: "Numerical Ability", questions: 35, marks: 35, duration: "20 min" },
      { section: "Reasoning Ability", questions: 35, marks: 35, duration: "20 min" },
    ],
    curriculumRoadmap: [
      { phase: "Foundation", weeks: "Weeks 1–6", description: "Core subject fundamentals" },
      { phase: "Speed Building", weeks: "Weeks 7–12", description: "Time management and speed techniques" },
      { phase: "Full Mocks", weeks: "Weeks 13–20", description: "Extensive mock tests and analysis" },
    ],
    batchTimings: [
      { batch: "Morning Batch", days: "", time: "6:30 AM – 9:30 AM" },
      { batch: "Evening Batch", days: "", time: "5:00 PM – 8:00 PM" },
    ],
    tags: ["Speed Building", "Online Support", "Banking Jobs"],
    icon: "💼",
    image: bankClerkImg,
  },
  {
    id: "adre",
    name: "ADRE",
    slug: "adre",
    description: "Targeted preparation for Assam Direct Recruitment Examination — the gateway to state government jobs in Assam.",
    examCategory: "State Exams",
    duration: "6 Months",
    batchSize: 20,
    learningMode: "Hybrid (Online + Offline)",
    highlights: [
      "Assam-specific syllabus coverage",
      
      "Assam history and geography focus",
      "Weekly mock tests in exam pattern",
      "Current affairs — Assam and India",
      "Bilingual study materials",
    ],
    syllabusSections: [
      { title: "General Knowledge", topics: ["Assam History", "Indian History", "Geography", "Polity", "Economics", "Science"] },
      { title: "Quantitative Aptitude", topics: ["Arithmetic", "Number System", "Algebra", "Geometry", "Data Interpretation"] },
      { title: "Reasoning", topics: ["Analogies", "Series", "Coding-Decoding", "Blood Relations", "Direction Sense"] },
      { title: "English/Assamese", topics: ["Grammar", "Comprehension", "Vocabulary", "Sentence Correction"] },
    ],
    examPattern: [
      { section: "General Knowledge", questions: 50, marks: 50, duration: "120 min (shared)" },
      { section: "Quantitative Aptitude", questions: 30, marks: 30, duration: "120 min (shared)" },
      { section: "Reasoning", questions: 20, marks: 20, duration: "120 min (shared)" },
    ],
    curriculumRoadmap: [
      { phase: "Core Concepts", weeks: "Weeks 1–6", description: "Subject-wise concept building" },
      { phase: "Assam Focus", weeks: "Weeks 7–10", description: "Assam-specific topics deep dive" },
      { phase: "Revision & Mocks", weeks: "Weeks 11–16", description: "Full-length tests and revision" },
    ],
    batchTimings: [
      { batch: "Morning Batch", days: "", time: "6:30 AM – 9:30 AM" },
      { batch: "Evening Batch", days: "", time: "5:00 PM – 8:00 PM" },
    ],
    tags: ["Assam Govt Jobs", "Bilingual", "Online Support"],
    popular: true,
    icon: "🏛️",
    image: adreImg,
  },
];

export const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "RRB", label: "RRB" },
  { id: "SSC", label: "SSC" },
  { id: "Banking", label: "Banking" },
  { id: "State Exams", label: "State Exams" },
];
