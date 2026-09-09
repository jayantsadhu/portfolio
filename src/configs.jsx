import food_curves from "./assets/food_curves.jpg";
import news_app from "./assets/news_app.jpg";
import conduit_app from "./assets/conduit_app.jpg";
import java from "./assets/java_logo.png";
import android from "./assets/android.png";
import kotlin from "./assets/kotlin_logo.png";
import python from "./assets/python_logo.png";
import django from "./assets/django_badge.png";
import reactjs from "./assets/react_js_logo.png";
import mongodb from "./assets/mongo_db_logo.png";
import springboot from "./assets/spring_boot_logo.png";
import juniv from "./assets/jadavpur_uni_logo.png";
import pkroy from "./assets/pk_roy_logo.jpeg";
import jac from "./assets/jac_logo.jpeg";
import goldman_sachs from "./assets/goldman_sachs_logo.jfif";
import samsung from "./assets/samsung_research.jpeg";
import zemoso from "./assets/zemoso.jpeg";

export const COLORS = {
  PUPLE_HIGHLIGHT: "#9E77ED",
  CARD_SHADE: "#131d2e",
  TEXT_SHADE: "#A0AEC0",
  TEXT: "#FFFFFF",
  HEADING_SHADE: "#7E8FA6",
};

export const EMAILJS = {
  SERVICE_ID: "service_pes2r8m",
  TEMPLATE_ID: "template_jkyhvnk",
  USER_ID: "8Dk8tFuB_gzmAK5O9",
};

export const LINKS = {
  RESUME:
    "https://drive.google.com/file/d/1wKueygrJjsRVoKnrfMlY2oiR7z5Kz6I6/view?usp=sharing",
  GITHUB: "https://github.com/jayantsadhu",
  LINKEDIN: "https://www.linkedin.com/in/jayantsadhu/",
};

export const PAGES = [
  "HOME",
  "ABOUT ME",
  "EXPERIENCE",
  "PROJECTS",
  "SKILLS",
  "EDUCATION",
  "CONTACT ME",
];

export const ABOUTME =
  "Backend Developer and LLM enthusiast with 4+ years of professional experience building resilient, highly scalable distributed systems. My passion for problem-solving drives my expertise across a diverse tech stack, including Java, Spring Boot, Kafka, Kubernetes, Django, and MongoDB. I specialize in owning the full SDLC from architecting complex decisioning workflows from scratch to enforcing stringent security compliance and real-time production observability. An award-winning collaborator (ex-Samsung) and published researcher, I thrive in cross-functional environments where I can tackle core latency bottlenecks and deliver exceptional web applications.";
export const EXPERIENCES = [
  {
    title: "Goldman Sachs",
    designation: "Associate (SDE-II)",
    dates: "Oct 2025 - Present",
    description:
      "I'm currently building a highly scalable recertification engine from the ground up, focusing on complex coverage-based decisioning and solving in-memory latency bottlenecks. Alongside the architecture, I own the full lifecycle and production health of the system, keeping things running smoothly with rigorous testing and real-time observability through Grafana and PagerDuty. I also lead our security initiatives, migrating legacy frameworks and setting up multi-service account provisioning to keep our infrastructure compliant and secure.",
    link: "https://www.goldmansachs.com/worldwide/india",
    image: goldman_sachs,
  },
  {
    title: "Samsung R&D Institute India Bangalore",
    designation: "Senior Engineer",
    dates: "Apr 2024 - Oct 2025",
    description:
      "Have worked as one of the key members in the development and maintenance of the core backend modules for the Loyalty & Transaction Management system in Samsung Wallet using Java, enabling seamless integration of digital membership cards and real-time transaction syncing. Built Spring Boot microservices for user enrollment, point redemption, and event handling with 2M+ daily API requests.",
    link: "https://research.samsung.com/sri-b",
    image: samsung,
  },
  {
    title: "Samsung R&D Institute India Bangalore",
    designation: "Engineer",
    dates: "Jul 2022 - Mar 2024",
    description:
      "Developed an end-to-end Samsung QC collaboration dashboard using Django and React.js frameworks, facilitating smoother and faster production fixes for flagship SMRs. Also, Implemented Qualcomm modem code integration logic for Samsung production, carefully handling severe conflicts and build failures using Python.",
    link: "https://research.samsung.com/sri-b",
    image: samsung,
  },
  {
    title: "Zemoso Technologies",
    designation: "Software Engineer Intern",
    dates: "Mar 2022 - Jun 2022",
    description:
      "Developed robust, production-ready RESTful APIs using Java and Spring Boot, improving backend performance. Applied SOLID principles to refactor legacy codebase, enhancing code maintainability and reducing technical debt.",
    link: "https://www.zemosolabs.com/",
    image: zemoso,
  },
];

export const PROJECTS = [
  {
    projectName: "Food Curves",
    projectDescription:
      "Developed this food delivery Android application, facilitating orders from diverse restaurants, featuring an extensive list of food selections, using Java in Android Studio.",
    image: food_curves,
    link: "https://github.com/jayantsadhu/Food-Curves-app",
  },
  {
    projectName: "NewsX",
    projectDescription:
      "Developed this news android app that integrates REST APIs to fetch and display real-time news updates. Implemented seamless UI components for an engaging user experience and efficient data handling",
    image: news_app,
    link: "https://github.com/jayantsadhu",
  },
  {
    projectName: "Conduit",
    projectDescription:
      "An application for content writers to share their knowledge on specific topics, along with comments and follow options for users to save and comeback later. It is similar to Medium blog writing application",
    image: conduit_app,
    link: "https://github.com/jayantsadhu/medium-clone",
  },
];

export const SKILLS = [
  {
    skill: "Java",
    image: java,
  },
  {
    skill: "Spring Boot",
    image: springboot,
  },
  {
    skill: "React.js",
    image: reactjs,
  },
  {
    skill: "Android",
    image: android,
  },
  {
    skill: "Python",
    image: python,
  },
  {
    skill: "Django",
    image: django,
  },
  {
    skill: "Mongo DB",
    image: mongodb,
  },
  {
    skill: "Kotlin",
    image: kotlin,
  },
];

export const EDUCATION = [
  {
    school: "Jadavpur University (Tier-1)",
    degree: "Bachelor of Engineering",
    dept: "Electronics and Telecommunication",
    location: "Kolkata, India",
    dates: "2018-2022",
    grade: "CGPA: 9.2",
    image: juniv,
    link: "https://jadavpuruniversity.in/",
  },
  {
    school: "P K Roy Memorial College",
    degree: "ISC",
    dept: "Science",
    location: "Dhanbad, India",
    dates: "2015-2017",
    grade: "First class",
    image: pkroy,
    link: "https://dhanbad.nic.in/public-utility/p-k-roy-memorial-college-dhanbad/",
  },
  {
    school: "S Y High School",
    degree: "Matric",
    dept: "General",
    location: "Dalahi",
    dates: "2013-2015",
    grade: "First class",
    image: jac,
    link: "https://jac.jharkhand.gov.in/jac/",
  },
];
