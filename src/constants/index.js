const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 500, suffix: "+", label: "Hours of Coding" },
  { value: 250, suffix: "+", label: "DSA Problems Solved" },
  { value: 7, suffix: "+", label: "Technologies Learned" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Data Handling",
    imgPath: "/images/logos/pngwing.com.png",
  },
  {
    name: "Postman",
    imgPath: "/images/logos/postman.png",
  },
  {
    name: "Language",
    imgPath: "/images/logos/c++.png",
  },
  {
    name: "Next.Js Developer",
    imgPath: "/images/logos/nextdotjs.svg",
    className: "w-12 h-12 filter invert brightness-200"
  },
  {
    name: "Vercel",
    imgPath: "/images/logos/vercel.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Github",
    modelPath: "/models/github.glb",
    scale: 0.05,
    rotation: [0, -0.8, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "AI Integration",
    modelPath: "/models/chatgpt.glb",
    scale: 130,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    // review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/InTouch.png",
    logoPath: "/images/InTouchLogo.png",
    title: "InTouch",
    date: "June 2025 - Present",
    responsibilities: [
  "Building a real-time International Sign Language (ISL) to Text conversion system using TensorFlow and Mediapipe for hand gesture recognition.",
  "Developing a responsive frontend using Next.js and TailwindCSS, integrated with a FastAPI backend to serve the trained ML model.",
  "Will deploy the project with a split-stack approach: Vercel for frontend and Render for backend, ensuring smooth and scalable performance.",
],

  },
  {
    // review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/Picc.jpeg",
    logoPath: "/images/HacPrix.png",
    title: "HackPrix 2.0",
    date: "14 June 2025 - 15 June 2025",
    responsibilities: [
    "Developed a real-time ISL to Text converter and vice-versa, in a 36-hour hackathon using a stack including TensorFlow, Mediapipe, FastAPI, and Next.js.",
    "Collaborated with a 4-member team to ideate, build, and present an AI-powered accessibility solution within the deadline.",
    "Handled the backend model integration and frontend deployment, contributing to both accuracy and usability of the final product.",
  ],
  },
  {
    // review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/Leetcode2.png",
    logoPath: "/images/LeetCode1.png",
    title: "Data Structures & Algorithms – Problem Solving Journey",
    date: "December 2023 - May 2025",
    responsibilities: [
    "Solved 250+ problems across platforms like LeetCode, Codeforces, and CodeChef to improve problem-solving skills.",
    "Practiced key topics such as Arrays, Trees, Graphs, Dynamic Programming, and Greedy algorithms.",
    "Improved time complexity understanding and applied optimized solutions during contests and practice sessions.",
  ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// const testimonials = [
//   {
//     name: "Esther Howard",
//     mentions: "@estherhoward",
//     review:
//       "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//     imgPath: "/images/client1.png",
//   },
//   {
//     name: "Wade Warren",
//     mentions: "@wadewarren",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "Guy Hawkins",
//     mentions: "@guyhawkins",
//     review:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Marvin McKinney",
//     mentions: "@marvinmckinney",
//     review:
//       "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
//     imgPath: "/images/client5.png",
//   },
//   {
//     name: "Floyd Miles",
//     mentions: "@floydmiles",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
//     imgPath: "/images/client4.png",
//   },
//   {
//     name: "Albert Flores",
//     mentions: "@albertflores",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//     imgPath: "/images/client6.png",
//   },
// ];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  {
    name: "github",
    imgPath: "/images/git.png",
    url: "https://github.com/xivam-007",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://linkedin.com/in/shivam-singh-27xivam007"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/ShivamS69933270",
  },
  {
    name: "leetcode",
    imgPath: "/images/lc.png",
    url: "https://leetcode.com/u/xivam007/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  // testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};