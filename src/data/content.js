import mc from "../assets/icons/mc.png";
import preloader from "../assets/icons/preloader.svg";
import profileImg from "../assets/images/profileImg.png";
import projImg01 from "../assets/images/projects/projImg01.jpg";
import projImg02 from "../assets/images/projects/projImg02.jpg";
import projImg03 from "../assets/images/projects/projImg03.jpg";
import projImg04 from "../assets/images/projects/projImg04.jpg";
import projImg05 from "../assets/images/projects/projImg05.jpg";
import icon01 from "../assets/icons/jmm.png";
import icon02 from "../assets/icons/vertere.png";
import icon03 from "../assets/icons/aaisi.png";
import { skills } from "./skills";

export const preloaderData = {
  greetings: "Welcome To My Website.",
  logo: mc,
  loader: preloader,
};

export const navData = {
  links: [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "EXPERIENCE", href: "/experience" },
    { name: "CONTACT", href: "/contact" },
  ],
  logo: mc,
};

export const homeData = {
  name: "Mel.",
  greetings: "Hi, I'm ",
  typewriter: {
    words: ["A website developer", "A software tester"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  },
  profileImg: profileImg,
};

export const aboutData = {
  title: "About Me",
  subtitle: "Who Am I?",
  name: "Hello, I am Melchor Callos",
  profileImg: profileImg,
  roles: "Website Developer / Software Tester",
  description:
    "I am passionate about becoming a professional website developer, and I am determined to excel in this field by continuously improving my skills, adopting innovative practices, and expanding my expertise in the area of website development. Additionally, I bring valuable expertise as a skilled software tester, having gained significant experience in various testing domains such as functional testing, automation testing, unit testing, and white box testing. By combining my skills in software testing with my ambition to become a proficient website developer, I am confident that I can deliver high-quality solutions that meet the ever-evolving demands of the digital landscape.",
  skills: skills,
};

export const portfolioData = {
  title: "My Portfolio",
  subtitle: "What Projects Have I Developed?",
  projects: [
    {
      title: "EatWell",
      github: "https://github.com/melchie04/food-recipe-website",
      demo: "https://melchie04-eatwell.netlify.app/",
      tech: "React JS | Material UI",
      description:
        "This is a food recipe website that helps users find a variety of delicious meals and learn how to create them. Each recipe includes a list of ingredients, step-by-step instructions, and videos to help the user make the dish they want.",
      image: projImg01,
    },
    {
      title: "GifShare",
      github: "https://github.com/melchie04/gif-sharing-website",
      demo: "https://melchie04-gifshare.netlify.app/",
      tech: "React JS | Material UI",
      description:
        "This is a GIF sharing website that allows users to share animated images, also known as GIFs, with their friends and family by posting them on social media sites like Facebook and Twitter.",
      image: projImg02,
    },
    {
      title: "Online Palaba",
      github: "https://github.com/melchie04/online-palaba-website",
      demo: "https://melchie04-online-palaba.netlify.app/",
      tech: "React JS | Tailwind CSS",
      description:
        "Online Palaba is a landing page website for a laundry services and logistics business that offers a mobile app for its customers. It showcases what the brand is all about and provides a glimpse into the type of experience customers can expect when they visit us.",
      image: projImg03,
    },
    {
      title: "ChowVi",
      github: "https://github.com/melchie04/chowvi-website",
      demo: "https://melchie04-chowvi.netlify.app/",
      tech: "React JS | Tailwind CSS",
      description:
        "ChowVi is a landing page website for a food delivery and fast food business, providing customers with a convenient and delightful dining experience right at their fingertips. It showcases what the brand is all about and gives a glimpse into the type of experience customers can expect when they visit us.",
      image: projImg04,
    },
    {
      title: "ChatMe App",
      github: "https://github.com/melchie04/chat-app-website",
      demo: "https://melchie04-chat-app-website.netlify.app/",
      tech: "MERN | Tailwind CSS",
      description:
        "This is a MERN full-stack chat app that harnesses the power of Socket.io, enabling real-time messaging while ensuring user privacy through encrypted storage of their information in a MongoDB database. Stay connected and engage in meaningful conversations with ease.",
      image: projImg05,
    },
  ],
};

export const experienceData = {
  title: "My Experiences",
  subtitle: "What Roles Have I Held?",
  experiences: [
    {
      title: "Research & Development Programmer",
      company_name: "JIO MHW Global Channel Manufacturing Corp.",
      icon: icon01,
      date: "December 2017 - November 2018",
      description:
        "From December 2017 to November 2018, I worked as an intern, and later I was absorbed as an R&D programmer. During my time there, I was responsible for developing and designing a desktop application using the C# programming language in MS Visual Studio to control a smart microscope machine. The machine was programmed using the C++ programming language in Arduino. Additionally, I was responsible for maintaining its functionality and conducting research to improve its performance.",
    },
    {
      title: "Programmer Analyst",
      company_name: "Vertere Global Solutions, Inc.",
      icon: icon02,
      date: "Jan 2021 - Feb 2022",
      description:
        "From January 2019 to May 2019, I participated in a bootcamp where I learned how to use programming languages such as COBOL, JCL, and DB2 to create efficient and effective programs for mainframe systems.",
    },
    {
      title: "Software Quality Assurance Engineer",
      company_name: "Alsons/Aws Information Systems Inc.",
      icon: icon03,
      date: "August 2019 - August 2021",
      description:
        "From August 2019 to October 2019, I participated in a bootcamp where I developed skills in functional and automated testing. I learned how to use Java programming languages and tools like Selenium, UFT, and ALM. Then, from November 2019 to August 2021, I worked as a unit tester, where I performed white-box testing using C++, winAMS, and MS Excel. I created and executed test cases, produced test results, and reported any issues or bugs found during testing.",
    },
  ],
};

export const contactData = {
  title: "Get In Touch With Me.",
};
