/* Final Portfolio Content for Sathwik Nemani */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = { animated: true };

const greeting = {
  username: "Sathwik Nemani",
  title: "Hi, I'm Sathwik Nemani",
  subTitle: emoji(
    "Computer Science student at Georgia Tech specializing in Systems Architecture & Intelligence. Passionate about building impactful software products across research, startups, and industry."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GQ3YkZOIrSARFFiry3zFm3a3r98lAq93/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sathwik-nemani/",
  gmail: "enemani3@gatech.edu",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Full-stack developer & systems engineer exploring software, AI, and data",
  skills: [
    emoji("⚡ Build scalable full-stack applications with React, AngularJS, and Spring Boot"),
    emoji("⚡ Design ML models and pipelines with PyTorch, TensorFlow, and Scikit-learn"),
    emoji("⚡ Work across systems: databases (SQL, Snowflake), networking, and low-level C/Assembly"),
    emoji("⚡ Develop interactive web/mobile apps with React Native and REST APIs"),
    emoji("⚡ Deploy and analyze using AWS, CI/CD pipelines, and observability tools like Splunk")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "AngularJS", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 2023 – Dec 2026",
      desc: "Threads: Systems Architecture & Intelligence. GPA 3.9/4.0.",
      descBullets: [
        "Relevant Coursework: Data Structures & Algorithms, Computer Organization, Computer Vision, Machine Learning, Systems & Networks, Robotics, Linear Algebra",
        "Activities: Big Data Big Impact, Data Science GT, Robojackets, GT WebDev, Google Developer Student Club"
      ]
    }
  ]
};

// const techStack = {
//   viewSkillBars: true,
//   experience: [
//     { Stack: "Frontend/Design", progressPercentage: "85%" },
//     { Stack: "Backend", progressPercentage: "80%" },
//     { Stack: "Systems/Programming", progressPercentage: "90%" }
//   ],
//   displayCodersrank: false
// };
const techStack = {
  viewSkillBars: false, // turn off bars
  experienceBuckets: [
    { name: "Frontend", value: 25 },
    { name: "Backend", value: 35 },
    { name: "AI/ML", value: 45 }
  ]
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Capital One (Auto Finance Tech)",
      date: "May 2025 – Aug 2025",
      descBullets: [
        "Built full-stack address verification feature (AngularJS + Spring Boot) for Title Release Payoff flow",
        "Developed 4 REST APIs with 98% test coverage; deployed on EASE microservices with CI/CD and Splunk",
        "Analyzed 592K+ payoff records in Snowflake SQL, reducing 39K agent calls (6.6%), boosting resolution by 35%, and +7 NPS",
        "Projected $800K+ annual cost savings; recognized internally for impact"
      ]
    },
    {
      role: "Undergraduate Teaching Assistant — CS 2200 Systems & Networks",
      company: "Georgia Tech",
      date: "May 2025 – Present",
      descBullets: [
        "Mentored 150+ students in processor architecture, memory, multithreading, and networking",
        "Built automated grading harnesses improving consistency across 300+ student projects"
      ]
    },
    // {
    //   role: "Undergraduate Research Assistant",
    //   company: "Autonomous & Connected Transportation Lab (Georgia Tech)",
    //   date: "Aug 2023 – Present",
    //   descBullets: [
    //     "Integrated behavioral economics into ML models with PyTorch/TensorFlow for sustainable transport (+27% improvement)",
    //     "Developed React web app for real-time transportation data collection"
    //   ]
    // },
    {
      role: "Co-Founder",
      company: "Whiteboard",
      date: "Jan 2024 – Jun 2025",
      descBullets: [
        "Launched Slack-integrated semantic context engine for B2B support teams",
        "Built full-stack system (Node.js, TypeScript, MongoDB) with LLaMA-based model reducing inbox clutter by 67%"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Wispr AI",
      date: "Aug 2022 – Nov 2022",
      descBullets: [
        "Processed 2000+ frames of speech/facial data with DeepLabCut",
        "Trained 4 predictive models with 87.8% avg accuracy for silent speech tracking"
      ]
    },
    {
      role: "Extern",
      company: "Cisco",
      date: "Jul 2022 – Aug 2022",
      descBullets: [
        "Presented IoT capstone project to execs shaping Cisco mass-transit strategy",
        "Shadowed execs to learn networking protocols and SDN/software dev practices"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Myntor.io",
      date: "Jul 2021 – Aug 2023",
      descBullets: [
        "Created automated data collection engaging 500+ customers",
        "Redesigned discussion board UX, boosting customer base 25%",
        "Presented Figma designs to leadership and BOD"
      ]
    },
    {
      role: "Product Intern",
      company: "Inspirit VR",
      date: "Jun 2021 – Jul 2021",
      descBullets: [
        "Led 8-person team expanding 300+ customers including 4 school districts",
        "Revamped chatbot in Figma, increasing engagement by 35%"
      ]
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "A selection of impactful work",
  projects: [
    {
      projectName: "Weave",
      projectDesc:
        "React Native iOS app with 1000+ users. Autodetects screenshots, analyzes context with AI, and makes them actionable with relevant links. Built with Redux + AWS.",
      footerLink: [{ name: "Website", url: "https://www.weave.team" }]
    },
    {
      projectName: "Naive College Basketball Win Probability Model",
      projectDesc:
        "Python + SQL + React app integrating an 80% accuracy prediction model for NCAA games, providing stats and win probabilities.",
      footerLink: []
    },
    {
      projectName: "Pocketable Water Filtration System (Patent Pending)",
      projectDesc:
        "Low-cost filter removing arsenic/nitrates with 99.5% efficacy. Distributed 1000+ units to underprivileged communities. Raised $3K+ via crowdfunding & partnerships.",
      footerLink: []
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to opportunities and collaborations. Reach out via email or LinkedIn.",
  number: "408-429-4502",
  email_address: "enemani3@gatech.edu"
};

const isHireable = true;

/* Dummy sections to prevent build errors */
const openSource = { showGithubProfile: "false", display: false };
const achievementSection = { title: "", subtitle: "", achievementsCards: [], display: false };
const blogSection = { title: "", subtitle: "", blogs: [], display: false };
const talkSection = { title: "", subtitle: "", talks: [], display: false };
const resumeSection = { title: "Resume", subtitle: "Download my resume", display: true };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };
const twitterDetails = { userName: "", display: false };

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  resumeSection,
  podcastSection,
  twitterDetails
};
