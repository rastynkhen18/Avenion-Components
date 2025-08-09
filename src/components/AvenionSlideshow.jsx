import React from "react";
import AvenionLogo from "../assets/avenion-whitelogo.svg";

const techStack = [
  { 
    icon: <img src={AvenionLogo} alt="Avenion-Logo" />
  }
];

const AvenionSlideshow = () => {
  // Repeat multiple times
  const repeatedTechStack = Array(10).fill(techStack).flat();

  return (
    <div className="overflow-hidden relative w-full flex flex-col items-center text-center bg-[var(--black-color)] p-5">
      <style>{`
        .slideshow-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .slideshow-track {
          display: flex;
          gap: 20px; /* Add gap between images */
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }
        .slideshow-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="slideshow-viewport">
        <div className="slideshow-track">
          {repeatedTechStack.map((item, index) => (
            <div key={index} className="p-2">
              {item.icon}
            </div>
          ))}
          {/* Duplicate the content for seamless scrolling */}
          {repeatedTechStack.map((item, index) => (
            <div key={`duplicate-${index}`} className="p-2">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvenionSlideshow;