export interface Project {
  id: string;
  name: string;
  description: string;
  role?: string;
  technologies?: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "p1",
    name: "BitcoinTAF",
    description: "Crypto analytics platform featuring real-time charts, portfolio management, and push alerts. Built with React Native and Firebase.",
    role: "Mobile App Developer",
    technologies: ["React Native", "Firebase", "Android", "iOS"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bitcointaf",
    appStoreUrl: "https://apps.apple.com/us/app/bitcointaf/id1597552314",
    featured: true,
  },
  {
    id: "p2",
    name: "Sparissimo",
    description: "Full MLM ecosystem including wallet systems, commission calculators, and reporting tools. Built with React Native and Node.js.",
    role: "Mobile App Developer",
    technologies: ["React Native", "Node.js", "iOS"],
    appStoreUrl: "https://apps.apple.com/us/app/sparissimo/id6452722686",
    featured: true,
  },
  {
    id: "p3",
    name: "CloudMLM",
    description: "Cloud-based Multi-Level Marketing solution and dashboard featuring real-time data synchronization.",
    role: "Android Developer",
    technologies: ["Android", "Java", "Kotlin"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bpract.cloudmlm",
    featured: true,
  },
  {
    id: "p4",
    name: "Sparissimo API",
    description: "Backend API services and client dashboard application powering the full Sparissimo MLM ecosystem.",
    role: "Backend API Developer",
    technologies: ["Node.js", "REST APIs", "Android", "iOS"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sparissimo.api",
    appStoreUrl: "https://apps.apple.com/us/app/sparissimo-api/id6458001440",
    featured: false,
  }
];

export const experiences: Experience[] = [
  {
    id: "e1",
    company: "Insemi Technology Services (Client: Infosys)",
    role: "Senior Staff Engineer (React Native/JS)",
    period: "JUN 2026 - PRESENT",
    description: [
      "Leading front-end delivery for enterprise platform 'MyWorkplace'",
      "Responsible for application architecture and production bug resolution",
      "Collaborating with cross-functional teams"
    ]
  },
  {
    id: "e2",
    company: "Walking Tree Resources (Client: Infosys)",
    role: "Front End Developer (React Native/JS)",
    period: "JAN 2025 - JUN 2026",
    description: [
      "Developed responsive front-end components",
      "Maintained the 'MyWorkplace' application for Infosys"
    ]
  },
  {
    id: "e3",
    company: "Bpract Software Solutions",
    role: "Mobile App Developer",
    period: "2020 - 2024",
    description: [
      "Developed and shipped multiple live apps including BitcoinTAF, Sparissimo MLM, CloudMLM, and Fabfit",
      "Used React Native, Android, and iOS"
    ]
  },
  {
    id: "e4",
    company: "Ezoro Technologies",
    role: "Android Application Developer",
    period: "2019 - 2020",
    description: [
      "Engineered Ellokart, a complete online shopping app",
      "Featured location-based hot deals and fast delivery tracking"
    ]
  },
  {
    id: "e5",
    company: "Fast Programming, Saudi Arabia",
    role: "Mobile Application Developer",
    period: "2016 - 2019",
    description: [
      "Full lifecycle development of mobile apps",
      "Built Swaptime, Wakalate, Dynate, and Mabieat"
    ]
  },
  {
    id: "e6",
    company: "Infinite Open Source Solutions & Sesame Tech",
    role: "Software & Support Engineer",
    period: "2010 - 2016",
    description: [
      "Started career in software training and onsite support",
      "Progressed to PHP backend API development"
    ]
  }
];

export const skills = {
  mobile: ["React Native", "Android", "iOS", "Kotlin", "Java", "Swift", "SwiftUI", "UIKit"],
  frontend: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  backend: ["Node.js", "PHP", "CodeIgniter", "GraphQL", "REST APIs"],
  cloud: ["AWS", "Firebase", "GCP"],
  tools: ["Git", "GitHub", "CI/CD", "Android Studio", "Xcode"]
};
