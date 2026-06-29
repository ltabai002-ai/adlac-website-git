export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  featured?: boolean;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-crack-ssc-cgl-first-attempt",
    title: "How to Crack SSC CGL in Your First Attempt: A Complete Strategy",
    excerpt: "A proven step-by-step strategy that has helped hundreds of our students clear SSC CGL in their very first attempt.",
    content: `Cracking SSC CGL in the first attempt requires a well-structured plan, consistent effort, and the right guidance. Here's a comprehensive strategy that our top-performing students have followed.

**1. Understand the Exam Pattern**
Before diving into preparation, thoroughly understand the exam structure — Tier I (Prelims), Tier II (Mains), and Tier III (Descriptive). Each tier requires a different approach.

**2. Create a Realistic Study Plan**
Divide your preparation into phases — Foundation (2 months), Practice (2 months), and Revision (1 month). Allocate time daily for each subject.

**3. Focus on Weak Areas**
Identify your weak subjects early. Spend extra time on them while maintaining your strengths. Regular self-assessment tests help pinpoint gaps.

**4. Practice with Timer**
Speed is crucial in SSC CGL. Practice every topic with a timer. Gradually reduce time to build speed without sacrificing accuracy.

**5. Take Mock Tests Regularly**
Start taking full-length mock tests at least 2 months before the exam. Analyze every test to understand your mistakes and improve.

**6. Stay Updated with Current Affairs**
Read newspapers daily and follow our current affairs capsule. General Awareness can be a game-changer in the final score.`,
    author: "Rajiv Sharma",
    publishDate: "2025-12-15",
    readTime: "8 min read",
    category: "Exam Strategy",
    featured: true,
    tags: ["SSC CGL", "Strategy", "First Attempt"],
  },
  {
    id: "2",
    slug: "banking-exam-preparation-guide-2026",
    title: "The Ultimate Banking Exam Preparation Guide for 2026",
    excerpt: "Everything you need to know about preparing for SBI PO, IBPS PO, and Clerk exams in 2026.",
    content: `Banking exams remain one of the most sought-after competitive exams in India. Here's your complete guide to preparing for 2026 banking exams.

**Understanding Banking Exams**
Banking exams like SBI PO, IBPS PO, SBI Clerk, and IBPS Clerk follow a three-stage process — Prelims, Mains, and Interview (for PO).

**Key Sections to Master**
- Quantitative Aptitude: Focus on Data Interpretation and Number Series
- Reasoning: Master Puzzles and Seating Arrangements
- English: Build strong grammar and vocabulary foundation
- General Awareness: Follow banking news and financial updates

**Time Management Tips**
Each section in Prelims has a strict time limit. Practice with sectional timers to build speed and accuracy simultaneously.`,
    author: "Priya Das",
    publishDate: "2025-11-28",
    readTime: "10 min read",
    category: "Preparation Guide",
    featured: true,
    tags: ["Banking", "SBI PO", "IBPS", "Guide"],
  },
  {
    id: "3",
    slug: "adre-exam-complete-overview",
    title: "ADRE Exam 2026: Complete Overview and Preparation Tips",
    excerpt: "A detailed guide to the Assam Direct Recruitment Examination including syllabus, pattern, and preparation strategy.",
    content: `The ADRE exam is the gateway to Assam state government jobs. Here's everything you need to know.

**What is ADRE?**
Assam Direct Recruitment Examination is conducted for various government department posts across Assam.

**Exam Pattern**
The exam covers General Knowledge, Quantitative Aptitude, Reasoning, and Language (English/Assamese).

**Preparation Strategy**
- Focus heavily on Assam-specific topics — history, geography, culture
- Practice arithmetic and reasoning daily
- Read Assamese and English newspapers for current affairs
- Take weekly mock tests in the exact exam pattern`,
    author: "Amit Borah",
    publishDate: "2025-11-10",
    readTime: "6 min read",
    category: "Exam Overview",
    tags: ["ADRE", "Assam", "State Exams"],
  },
  {
    id: "4",
    slug: "reasoning-shortcuts-competitive-exams",
    title: "Top 10 Reasoning Shortcuts Every Competitive Exam Aspirant Must Know",
    excerpt: "Master these reasoning shortcuts to solve complex puzzles and seating arrangements in under 2 minutes.",
    content: `Reasoning can be a scoring section if you know the right approach. Here are proven shortcuts our students use.

**1. Linear Seating Arrangement**
Always start with definite clues. Mark directions first, then place people based on fixed positions.

**2. Circular Seating**
Draw the circle, mark one fixed position, and build around it. Never assume — only use given information.

**3. Syllogism**
Use Venn diagrams for quick visualization. The 'No' and 'Some' rules are your best friends here.

**4. Coding-Decoding**
Look for patterns in letter positions. Most codes follow alphabetical order shifts.

**5. Blood Relations**
Draw family trees. Always work from the known person outward.`,
    author: "Sneha Kalita",
    publishDate: "2025-10-22",
    readTime: "7 min read",
    category: "Study Tips",
    tags: ["Reasoning", "Shortcuts", "Tips"],
  },
  {
    id: "5",
    slug: "rrb-ntpc-preparation-timeline",
    title: "RRB NTPC Preparation: The Perfect 6-Month Timeline",
    excerpt: "A month-by-month preparation plan for RRB NTPC that ensures comprehensive coverage and revision.",
    content: `Here's a battle-tested 6-month timeline for RRB NTPC preparation.

**Month 1-2: Foundation Phase**
Focus on building strong basics in Mathematics, Reasoning, and General Awareness.

**Month 3-4: Practice Phase**
Solve topic-wise questions, previous year papers, and take sectional tests.

**Month 5: Mock Test Phase**
Take full-length mock tests every alternate day. Analyze mistakes and improve.

**Month 6: Revision Phase**
Revise notes, formulas, and current affairs. Take 2-3 mocks per week. Focus on weak areas.`,
    author: "Rajiv Sharma",
    publishDate: "2025-10-05",
    readTime: "5 min read",
    category: "Preparation Guide",
    featured: true,
    tags: ["RRB NTPC", "Timeline", "Preparation"],
  },
];

export const blogCategories = ["All", "Exam Strategy", "Preparation Guide", "Study Tips", "Exam Overview"];
