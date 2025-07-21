import {
    web,
    javascript,
    html,
    css,
    reactjs,
    cpp,
    aws,
    postman,
    tailwind,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    newsninja,
    aitrip,
    chainverify,
    mysql,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "M.Tech in CSE(Computer Networks)",
      company_name: "BMS Colege of Engineering",
      loc:"Bengaluru",
      icon: shopify,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "Aug 2024 - April 2026",
      points: [
        "Completed 1st Sem with a 9.3 SGPA.",
        "Actively Participated in VolleyBall And Cricket Tournaments Organized By Dept of Physical Education, BMSCE"
      ],
    },
    {
      title: "B.Tech in CSE",
      company_name: "PES University(RR Campus).",
      loc:"Bengaluru",
      icon: shopify,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "Nov 2020 - July 2024",
      points: [
        "Graduated with a CGPA of 7.",
        "Head of Logistics Domain in Kannada Koota Club,",
        "successfully led multiple cultural events"
      ],
    },
    {
      title: "12th Grade",
      company_name: "Sri Sapthagiri PU College",
      loc:"Tumakuru",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2018 - March 2020",
      points: [
        "State Board, Karnataka.",
        "Percentage : 90%.",
        "Recieved Academic Excellence award and JEE Qualifier.",
        "Event Lead at Namdesi Annual Fest"
      ],
    },
    {
      title: "10th Grade",
      company_name: "Morarji Desai Residential School",
      loc:"Tumakuru",
      icon: starbucks,
      // iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "May 2017 - April 2018",
      points: [
        "State Board, Karnataka.",
        "Percentage : 96%.",
        "School Topper and District Level Volleyball and Kabbadi Player."
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NewsNinja",
      description:
        "Automated journalism platform where users define keywords and preferred sources to receive personalized, AI-powered audio news    summaries. Platform scrapes news from Google News and Reddit using Bright Data, summarizes articles with Gemini AI, and streams natural audio via ElevenLabs..",
      tags: [
        {
          name: "streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "redditmcp",
          color: "pink-text-gradient",
        },
        {
          name: "geminiai",
          color: "grey-text-gradient",
        },
        {
          name: "googlenewsapi",
          color: "green-text-gradient",
        }
      ],
      image: newsninja,
      source_code_link: "https://github.com/Prashanth1607/NewsNinja",
    },
    {
      name: "AI Travel Maestro",
      description:
        "An intelligent trip planning platform where users input their travel preferences via natural language and receive AI-generated itineraries, daily schedules, and budget estimates. The platform features secure authentication and saves personalized trip histories for a seamless travel experience. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "geminiai",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Oauth",
          color: "blue-text-gradient",
        },
        {
          name: "googlemapsapi",
          color: "grey-text-gradient",
        },
      ],
      image: aitrip,
      source_code_link: "https://github.com/Prashanth1607/AI-Travel-Maestro",
    },
    {
      name: "ChainVerify ",
      description:
        "A blockchain-based supply chain platform where products are authenticated using Ethereum smart contracts and QR codes. Users can register product ownership, transfer products securely between manufacturers, sellers, and consumers, and ensure transparent traceability at every stage.",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "ethereum",
          color: "green-text-gradient",
        },
        {
          name: "ganache",
          color: "pink-text-gradient",
        },
        {
          name: "truffle",
          color: "black-text-gradient",
        },
        {
          name: "metamask",
          color: "pink-text-gradient",
        },
      ],
      image: chainverify,
      source_code_link: "https://github.com/Prashanth1607/Fake-Product-Blockchain-Project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
