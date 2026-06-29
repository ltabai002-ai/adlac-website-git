export interface Faculty {
  id: string;
  name: string;
  designation: string;
  primarySubject: string;
  highestDegree: string;
  totalExperience: string;
  coachingExperience?: string;
  previousWork?: string;
  subjects: string[];
  examsSpecialised: string[];
  teachingStyle: string;
  philosophy?: string;
  studentsTrained?: string;
  languages: string[];
  contactAvailability: string;
  image: string;
}

export const faculty: Faculty[] = [
  {
    id: "raman-bora",
    name: "Dr. Raman Bora",
    designation: "Head of Department",
    primarySubject: "GK / GA / CA",
    highestDegree: "Ph.D.",
    totalExperience: "15+ Years",
    subjects: ["General Awareness / Current Affairs"],
    examsSpecialised: [
      "SSC CGL",
      "SSC CHSL",
      "Banking (PO / Clerk)",
      "Railway Exams (RRB NTPC / Group D)",
      "UPSC / State PSC",
      "Defence Exams",
    ],
    teachingStyle: "Concept-based learning, pattern recognition, objective testing",
    philosophy: "No student should feel left out. Learning should be accessible to all.",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Medium Availability (Scheduled Doubt Sessions)",
    image: "raman-bora",
  },
  {
    id: "dr-sir",
    name: "D R. Sir",
    designation: "HOD English",
    primarySubject: "English",
    highestDegree: "Post Graduate",
    totalExperience: "15+ Years",
    coachingExperience: "15+ Years",
    previousWork: "Teaching for professional examinations",
    subjects: ["English Language"],
    examsSpecialised: [
      "SSC CGL",
      "SSC CHSL",
      "Banking (PO / Clerk)",
      "Railway Exams (RRB NTPC / Group D)",
      "Other Government Exams",
    ],
    teachingStyle: "Application based",
    studentsTrained: "2000+",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Medium Availability (Scheduled Doubt Sessions)",
    image: "dr-sir",
  },
  {
    id: "n-bhuyan",
    name: "N. Bhuyan",
    designation: "HOD",
    primarySubject: "Quantitative Aptitude",
    highestDegree: "Post Graduate",
    totalExperience: "15+ Years",
    coachingExperience: "15+ Years",
    previousWork: "Teaching for top level competitive examinations",
    subjects: ["Quantitative Aptitude"],
    examsSpecialised: [
      "Banking (PO / Clerk)",
      "Railway Exams (RRB NTPC / Group D)",
      "Other Government Exams",
    ],
    teachingStyle: "Concept + Shortcut",
    studentsTrained: "1500+",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Medium Availability (Scheduled Doubt Sessions)",
    image: "n-bhuyan",
  },
];
