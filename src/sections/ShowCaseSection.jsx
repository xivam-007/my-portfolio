import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const resonixRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://resonix-i0qilx8do-xivam-007s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/ResonixEdited.png"
                  alt="Resonix App Interface"
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>
                AI-Powered Resume Ranking Platform for Recruiters and Students
              </h2>
              <p className="text-white-50 md:text-xl">
                Resonix helps recruiters find the best candidates by ranking uploaded resumes
                based on keyword relevance using AI. Built with Next.js, FastAPI, MongoDB, and TailwindCSS.
              </p>
            </div>
          </div>


          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                  <a
                  href="https://github.com/xivam-007/Lumina--LMS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/LMS.png"
                    alt="Library Management Platform"
                  />
                </a>
              </div>
              <h2>The Library Management System</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a
                  href="https://github.com/xivam-007/CodeSnippet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src="/images/CodeSnippet.png" alt="YC Directory App" />
                </a>
              </div>
              <h2>CodeSnippet - Place where you share and get code snippets</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;