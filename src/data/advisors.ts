export interface Advisor {
  id: string;
  name: string;
  designation: string;
  primaryDomain: string;
  highestDegree: string;
  totalExperience: string;
  serviceTenure?: string;
  previousWork?: string;
  expertiseAreas: string[];
  keyPostings: string[];
  notableAchievements: string[];
  teachingStyle: string;
  philosophy?: string;
  languages: string[];
  contactAvailability: string;
  image: string;
}

export const advisors: Advisor[] = [
  {
    id: "rp-kalita",
    name: "Lt Gen Rana Pratap Kalita (Retd.)",
    designation: "Advisor — Strategic Affairs & National Security",
    primaryDomain: "PVSM, UYSM, AVSM, SM, VSM · Former GOC-in-C, Eastern Command",
    highestDegree: "M.Phil. (Defence & Strategic Studies) · D.Litt. (Honoris Causa)",
    totalExperience: "40+ Years (Indian Army, Retd.)",
    serviceTenure: "Commissioned to 9 KUMAON in 1984 · Retired as GOC-in-C, Eastern Command",
    previousWork:
      "General Officer Commanding-in-Chief, Eastern Command (covering nine states bordering five countries); Chairman, 7th Assam State Finance Commission; presently Chairman, AERC.",
    expertiseAreas: [
      "National Security & Strategy",
      "Higher Military Leadership",
      "Defence & Strategic Studies",
      "Disaster Management",
      "Public Administration",
      "Current Affairs",
    ],
    keyPostings: [
      "GOC-in-C, Eastern Command — first officer from Assam & North East to attain this rank",
      "Corps Commander in the strategically important North East",
      "Division Commander along the Line of Control, Kashmir",
      "Commanding Officer, Rashtriya Rifles Battalion, Kashmir",
      "UN Peacekeeping Missions — Sierra Leone & Sudan",
      "Operation Pawan — Sri Lanka (early career)",
    ],
    notableAchievements: [
      "Awarded PVSM, UYSM, AVSM, SM and VSM for distinguished service to the nation",
      "Conferred Assam Vaibhav — the highest civilian award of the Government of Assam",
      "Conferred D.Litt. (Honoris Causa) by Arunachal University of Studies, February 2026",
      "Alumnus of NDA Khadakwasla, IMA Dehradun, DSSC Wellington, Higher Command & National Defence College",
      "M.Phil. — Defence & Strategic Studies (University of Madras, 2014); M.Phil. — Defence & Management Studies (DAVV Indore, 2007)",
    ],
    teachingStyle: "Strategic, leadership-driven mentoring drawn from four decades of operational command",
    philosophy:
      "Discipline, clarity of purpose and resilience under pressure are the foundations of every successful career — in uniform or in civil service.",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Guest Lectures & Mentorship Sessions (By Schedule)",
    image: "rp-kalita",
  },
  {
    id: "sr-baruah",
    name: "Sailaja Ray Baruah",
    designation: "Advisor — Civil Services & Public Administration",
    primaryDomain: "Indian Revenue Service (Customs & Indirect Tax)",
    highestDegree: "M.A. Economics (Delhi School of Economics), L.L.B.",
    totalExperience: "35+ Years (IRS, Retd.)",
    serviceTenure: "Joined IRS in December 1987 · Superannuated 28/02/2023",
    previousWork:
      "Principal Director General (Systems & Data Management), CBIC; Principal Chief Commissioner of Customs, Mumbai Zone-I; Chief Commissioner, Kolkata Custom House; Commissioner of Customs (Airport & Air Cargo), IGI Airport, New Delhi.",
    expertiseAreas: [
      "Indian Economy",
      "Public Administration",
      "Indirect Taxation & GST",
      "Customs & International Trade",
      "Governance & Policy",
      "Current Affairs",
    ],
    keyPostings: [
      "All four major Custom Houses — Delhi, Kolkata, Chennai & Mumbai",
      "Land Customs Stations on Indo-Bangladesh, Indo-Bhutan, Indo-Nepal & Indo-Myanmar borders",
      "Private Secretary to Union Minister of State (Petroleum & Natural Gas, Science & Technology, Heavy Industries, Labour)",
      "Director General, DGCEI Eastern Zonal Unit, Kolkata (Founding DG)",
      "Additional Director General, NACIN — Delhi Zonal Unit",
    ],
    notableAchievements: [
      "Pioneered nationwide e-auction module for confiscated goods, later adopted by CBIC across India",
      "Developed online ATA Carnet monitoring system with FICCI — first in India; featured in CBIC's 'Journey towards Excellence' (launched by PM Narendra Modi, 2016)",
      "Implemented EDI across 15 land customs stations on Indo-Bangladesh, Indo-Bhutan & Indo-Nepal borders",
      "Spearheaded CBIC flagship projects — 'Saksham' IT infrastructure, ACES-GST, ICEGATE online payment portal & ADVAIT analytics",
      "Directorate of Systems & Data Management received the Best Public-Facing IT Application award (ICEGATE) from the Hon'ble President of India, January 2023",
    ],
    teachingStyle: "Experience-led mentoring with real-world case studies from public administration",
    philosophy:
      "Decisions made in the corridors of governance shape the lives of millions — aspirants must understand both the system and its purpose.",
    languages: ["English", "Hindi", "Assamese"],
    contactAvailability: "Guest Lectures & Mentorship Sessions (By Schedule)",
    image: "sr-baruah",
  },
  {
    id: "sugato-lahiri",
    name: "Sugato Lahiri",
    designation: "Advisor — Railway Recruitment & Engineering Services",
    primaryDomain: "Indian Railway Service of Mechanical Engineers (IRSME)",
    highestDegree: "B.Tech (Hons.) Mechanical Engineering, IIT Kharagpur (1989)",
    totalExperience: "35+ Years (IRSME, Voluntarily Retired)",
    serviceTenure: "Joined IRSME in November 1992 (UPSC 1991 batch) · Voluntarily retired August 2024",
    previousWork:
      "Chairman, Railway Recruitment Board, Guwahati; Chief Rolling Stock Engineer, NF Railway; Chief Public Relations Officer, NF Railway; Chief Workshop Manager, Dibrugarh; Sr. Divisional Mechanical Engineer (Diesel), Siliguri Jn.",
    expertiseAreas: [
      "Railway Recruitment Process",
      "Mechanical Engineering",
      "Public Sector Administration",
      "Rolling Stock & Workshop Management",
      "Public Relations & Communication",
      "UPSC Engineering Services",
    ],
    keyPostings: [
      "Chairman, Railway Recruitment Board, Guwahati (May 2021 – Aug 2024)",
      "Chief Rolling Stock Engineer, NF Railway (May 2015 – Sep 2020)",
      "Chief Public Relations Officer, NF Railway (Aug 2013 – May 2015)",
      "Chief Workshop Manager, Dibrugarh (Apr 2006 – Jun 2013)",
      "Sr. Divisional Mechanical Engineer (Diesel), Siliguri Junction (Dec 1998 – Feb 2003)",
      "Graduate Trainee, Tata Iron & Steel Co. Ltd, Jamshedpur (1989 – 1992)",
    ],
    notableAchievements: [
      "Headed Railway Recruitment Board, Guwahati for over three years — direct insight into RRB selection processes",
      "B.Tech (Hons.) from IIT Kharagpur, 1989 batch — Mechanical Engineering",
      "Diploma in Iron & Steel Making from Jamshedpur Technical Institute (TISCO)",
      "Cleared UPSC Engineering Services 1991 — joined IRSME in 1992",
      "Held apex technical and administrative roles in NF Railway across rolling stock, workshops & public relations",
    ],
    teachingStyle: "Insider perspective on RRB exam process with engineering-led analytical mentoring",
    philosophy:
      "Understand the system from the inside — preparation built on clarity of process is what separates a candidate from a selection.",
    languages: ["English", "Hindi", "Bengali"],
    contactAvailability: "Guest Lectures & Mentorship Sessions (By Schedule)",
    image: "sugato-lahiri",
  },
];
