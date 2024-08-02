"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function SvgPathLoader() {
  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
        onComplete: () => {
          document.querySelector(".loading-page")?.remove(); 
        },
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center loading-page backdrop-blur-sm bg-black/50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-36 h-36 stroke-white"
      >
        <path
          d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
          fill="none"
          strokeWidth="3"
          strokeDasharray="4500"
        />
      </svg>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");

        @keyframes draw {
          0% {
            stroke-dashoffset: 4500;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        svg {
          stroke-dasharray: 4500;
          animation: draw 2s ease forwards; /* Faster animation */
          animation-iteration-count: infinite; /* Repeat indefinitely */
        }
      `}</style>
    </div>
  );
}
