/**
 * Portfolio Data Source of Truth
 * Professional, recruiter-friendly profile for Muhammad Bilal Yousaf.
 * Focused exclusively on real academic work, skills, and the flagship project HemoScan.
 */

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Bilal Yousaf",
    role: "BS Cybersecurity Student & Software Developer",
    institution: "Capital University of Science and Technology (CUST)",
    degree: "Bachelor of Science in Cybersecurity",
    expectedGraduation: "Currently Enrolled",
    availability: "Available for Cybersecurity Internships & Junior SOC Roles",
    locationNote: "Based in Islamabad / Azad Kashmir, Pakistan",
    intro: "I study cybersecurity at Capital University of Science and Technology (CUST) with an emphasis on defensive security, network fundamentals, and applied software development. Currently seeking an internship or junior SOC analyst opportunity to apply hands-on problem solving to real-world security challenges."
  },

  links: {
    github: "https://github.com/srbilal12-cyber",
    linkedin: "https://www.linkedin.com/in/muhammad-bilal-yousaf-a2a93140b",
    email: "srbilal12@gmail.com",
    resumeUrl: "./Muhammad_Bilal_Yousaf_Resume.html",
    hemoscanLive: "https://hemo-scan--srbilal12.replit.app/",
    tryhackme: "https://tryhackme.com/p/BilalYousaf"
  },

  about: {
    bio: "I am an undergraduate student in Bachelor of Science in Cybersecurity at Capital University of Science and Technology (CUST). My academic path focuses on understanding how operating systems, protocols, and networks work under the hood, and how to defend them against common vulnerabilities. Alongside cybersecurity coursework, I develop software applications in Python and modern web technologies, valuing clean architecture, honest testing, and transparent documentation.",
    education: {
      university: "Capital University of Science and Technology (CUST)",
      campus: "Islamabad, Pakistan",
      degree: "Bachelor of Science in Cybersecurity",
      status: "Currently Enrolled (Undergraduate)",
      graduationYear: "Currently Enrolled",
      coursework: [
        "Network Security",
        "Operating Systems",
        "Data Structures & Algorithms",
        "Computer Networks",
        "Cryptography Fundamentals",
        "Object-Oriented Programming",
        "Database Systems",
        "Information Assurance & Defense"
      ]
    }
  },

  projects: [{
    title: "Java Voting System",
    subtitle: "Java Swing Desktop Application",
    description: "Built an educational voting-system prototype with a desktop ballot form, CNIC-format validation, duplicate-entry checks, local vote storage, admin-gated results, vote totals, percentages, and a bar-chart dashboard.",
    techTags: ["Java", "Swing GUI", "File Handling", "Collections", "Input Validation"],
    githubUrl: "https://github.com/srbilal12-cyber/M.BilalYousaf",
    disclaimer: "Academic demo only; not an official election platform and not connected to ECP or biometric verification."
  }],

  featuredProject: {
    title: "HemoScan",
    subtitle: "AI-Assisted Non-Invasive Hemoglobin Estimation Prototype",
    disclaimer: "Research prototype, not a medical device. This software is developed solely for academic exploration and optical signal experimentation. It is not approved by regulatory bodies and must never be used as a substitute for professional clinical medical advice, certified laboratory blood testing, or clinical diagnosis.",
    liveUrl: "https://hemo-scan--srbilal12.replit.app/",
    githubUrl: "https://github.com/srbilal12-cyber",
    techTags: ["Python", "Computer Vision", "Photoplethysmography (PPG)", "React", "Replit"],
    caseStudy: {
      problem: "Traditional hemoglobin testing requires an invasive blood draw via needles, trained phlebotomists, sterile consumables, and physical visits to clinical pathology laboratories. For patients requiring frequent hemoglobin monitoring, as well as populations in rural or low-resource settings, this creates substantial barriers in cost, accessibility, and physical discomfort.",
      approach: "Explored whether smartphone camera sensors can capture microvascular color variations in fingertip capillary beds using photoplethysmography (PPG). When illuminated by the camera LED flash, blood volume oscillations alter light absorption across red, green, and blue optical channels. The prototype extracts RGB intensity ratios, normalizes baseline signal noise, and applies regression modeling to estimate hemoglobin concentration ranges.",
      result: "Built a functional web application prototype deployed on Replit that processes live camera feeds or frame captures, isolates the region of interest, computes colorimetric intensity shifts, and presents estimated hemoglobin figures alongside standard reference categories.",
      limitations: "The system remains a research prototype with significant constraints: high sensitivity to ambient light inconsistency, hardware variability across different smartphone camera sensors (auto-exposure and white-balance adjustments), skin tone variations, inconsistent finger contact pressure, and a lack of clinical trial validation against gold-standard laboratory hematology analyzers.",
      learned: "Learned practical computer vision preprocessing, digital signal filtering, techniques for isolating optical noise from biological signals, and the critical ethical responsibility of communicating system limitations through explicit disclaimers in biomedical applications."
    }
  },

  skills: {
    note: "Academic and practical competencies developed through university coursework and hands-on development.",
    categories: [
      {
        title: "Proficient",
        description: "Technologies and tools used regularly in coursework and projects:",
        skills: [
          "Python",
          "Linux Basics",
          "Networking Fundamentals (TCP/IP, DNS, Subnetting)",
          "Git & GitHub Version Control",
          "Microsoft Excel (Data Modeling, Formulas)",
          "Microsoft Word & PowerPoint (Technical Documentation)"
        ]
      },
      {
        title: "Familiar",
        description: "Concepts and tools practiced in university labs and software prototypes:",
        skills: [
          "C++",
          "React.js",
          "Tailwind CSS",
          "Wireshark Packet Analysis",
          "Cryptography Basics (Symmetric, Asymmetric, Hashing)",
          "Web Security Fundamentals (OWASP Top 10)"
        ]
      },
      {
        title: "Currently Learning",
        description: "Topics actively studying through ongoing coursework and independent labs:",
        skills: [
          "SOC Operations & Incident Response",
          "SIEM Tooling (Splunk / Elastic Basics)",
          "Memory Safety & Binary Exploitation Fundamentals",
          "Cloud Security Fundamentals"
        ]
      }
    ]
  },

  practice: {
    note: "Ongoing practical labs, hands-on environments, and certification preparation:",
    items: [
      {
        title: "TryHackMe / Hands-on Labs",
        status: "Active Learner",
        description: "Regularly practicing hands-on security rooms covering Linux fundamentals, network reconnaissance, and web application security.",
        linkText: "TryHackMe Profile",
        url: "https://tryhackme.com/p/BilalYousaf"
      },
      {
        title: "CUST Academic Security Labs",
        status: "Coursework",
        description: "Completed university practical labs in packet capture inspection, cryptographic cipher implementation, and basic defensive system hardening.",
        linkText: "CUST University Portal",
        url: "https://cust.pk"
      },
      {
        title: "CompTIA Security+ & eJPT",
        status: "In Preparation",
        description: "Actively studying core security concepts, network defense architectures, and hands-on penetration testing methodologies for upcoming certifications.",
        linkText: "CompTIA Security+ Details",
        url: "https://www.comptia.org/certifications/security"
      }
    ]
  }
};
