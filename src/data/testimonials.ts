export interface Testimonial {
  id: string;
  studentName: string;
  examCleared: string;
  rankOrScore: string;
  story: string;
  imageUrl?: string;
  featured: boolean;
  displayOrder: number;
}

export const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    studentName: "Anurag Deka",
    examCleared: "SSC CGL 2024",
    rankOrScore: "AIR 342",
    story: "The structured approach and daily practice tests at The Advanced Learning Academy completely transformed my preparation. The faculty's shortcuts for Quant helped me save precious minutes in the actual exam.",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "2",
    studentName: "Mitali Sarma",
    examCleared: "SBI PO 2024",
    rankOrScore: "Selected",
    story: "I joined the Bank PO batch with zero confidence in reasoning. Within 3 months, puzzles became my strongest section. The mock test analysis sessions were game-changers for my preparation.",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "3",
    studentName: "Ranjan Kalita",
    examCleared: "RRB NTPC 2023",
    rankOrScore: "Zone Topper",
    story: "Being from a rural background, I needed extra attention. The small batch size meant faculty could focus on my weak areas. The doubt clearing sessions gave me the confidence I needed.",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "4",
    studentName: "Priyanka Hazarika",
    examCleared: "ADRE Grade III 2024",
    rankOrScore: "Top 50",
    story: "The Assam-focused study material was exceptional. No other institute in Guwahati covers Assam history and geography as thoroughly. I cleared ADRE in my first attempt thanks to this academy.",
    featured: true,
    displayOrder: 4,
  },
  {
    id: "5",
    studentName: "Deepjyoti Borah",
    examCleared: "SSC CHSL 2024",
    rankOrScore: "AIR 890",
    story: "The typing practice sessions were incredibly helpful. Combined with the conceptual clarity in English and Quant, I felt fully prepared for every tier of the exam.",
    featured: false,
    displayOrder: 5,
  },
  {
    id: "6",
    studentName: "Kabita Nath",
    examCleared: "IBPS Clerk 2024",
    rankOrScore: "Selected",
    story: "I was working a part-time job while preparing. The flexible batch timings and online classes helped me balance both. The academy truly cares about every student's success.",
    featured: false,
    displayOrder: 6,
  },
];
