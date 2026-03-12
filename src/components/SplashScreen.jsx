import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useAssetLoader } from "../hooks/useAssetLoader";

import logo from "/images/logo2.png";

export default function Intro({ title, onFinish }) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const logoRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const [hasStartedExit, setHasStartedExit] = useState(false);

  // Use our real actual loader logic
  const actualProgress = useAssetLoader();

  useEffect(() => {
    // 1. Initial Setup: Split text, set hidden states
    const letters = titleRef.current.innerText.split("");
    titleRef.current.innerHTML = letters
      .map((letter) => `<span class="letter">${letter}</span>`)
      .join("");

    gsap.set(titleRef.current, { opacity: 1 });
    gsap.set(titleRef.current.querySelectorAll(".letter"), { opacity: 0, y: 80 });

    gsap.set(logoWrapperRef.current, { visibility: "visible", clipPath: "inset(0 100% 0 0)" });
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8, rotateY: -45 });
    gsap.set(progressRef.current, { width: "0%", visibility: "visible" });

    // 2. Entrance Animation
    const entranceTl = gsap.timeline({ delay: 0.2 });

    entranceTl
      .to(logoWrapperRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          onComplete: () => {
             // Subtle float after entrance
             gsap.to(logoRef.current, {
              y: "-=8",
              rotateY: "+=2",
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        },
        "<"
      )
      .to(titleRef.current.querySelectorAll(".letter"), {
        y: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.8");

  }, []);

  useEffect(() => {
    // 3. React to actual progress updates dynamically
    if (progressRef.current && counterRef.current) {
        
      // Ensure smooth visual transition of the loading bar based on actual progress jumps
      gsap.to(progressRef.current, {
        width: `${actualProgress}%`,
        duration: 0.5, 
        ease: "power2.out",
      });

      // Animate the text counter smoothly to the new progress value
      const currentValObj = { val: parseInt(counterRef.current.innerText) || 0 };
      gsap.to(currentValObj, {
        val: actualProgress,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => {
           if(counterRef.current) {
             counterRef.current.innerText = Math.floor(currentValObj.val);
           }
        },
      });
    }

    // 4. Exit sequence if we hit 100%
    if (actualProgress === 100 && !hasStartedExit) {
      setHasStartedExit(true);

      const exitTl = gsap.timeline({
         delay: 0.6, // Brief pause at 100% so the user sees it finish
         onComplete: () => setTimeout(onFinish, 100),
      });

      exitTl.to(container.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1.2,
        ease: "power4.inOut",
      });
    }
  }, [actualProgress, hasStartedExit, onFinish]);

  return (
    <>
      <style>{`
        .letter { display: inline-block; }

        /* Animated intro grid with big green + small blue */
        .intro-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;

          background-image:
            linear-gradient(to right, rgba(22, 163, 74, 0.20) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(22, 163, 74, 0.20) 1px, transparent 1px),
            linear-gradient(to right, rgba(37, 99, 235, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.06) 1px, transparent 1px);

          background-size:
            160px 160px,
            160px 160px,
            20px 20px,
            20px 20px;

          background-repeat: repeat;

          animation: gridMove 8s linear infinite;
        }

        @keyframes gridMove {
          from { background-position: 0 0, 0 0, 0 0, 0 0; }
          to { background-position: 0 160px, 160px 0, 0 20px, 20px 0; }
        }
      `}</style>

      <div
        ref={container}
        className="intro-container fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f4faf7] perspective-1000"
      >
        <div className="intro-grid" />

        {/* visibility:hidden preserves layout space before GSAP runs */}
        <div
          ref={logoWrapperRef}
          className="overflow-hidden mb-6 relative z-10"
          style={{ visibility: "hidden" }}
        >
          <img
            ref={logoRef}
            src={logo}
            alt="Logo"
            className="w-24 md:w-32"
          />
        </div>

        {/* opacity:0 hides text before split, layout space preserved via line-height */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-semibold tracking-wide relative z-10 text-[#0b2545]"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>

        {/* Loading bar */}
        <div className="w-40 h-[2px] bg-gray-300 mt-6 overflow-hidden relative z-10">
          {/* visibility:hidden preserves layout space, no full-width flash */}
          <div
            ref={progressRef}
            className="h-full bg-[#0b2545]"
            style={{ visibility: "hidden" }}
          />
        </div>

        {/* Loading counter */}
        <div
          ref={counterRef}
          className="mt-4 text-sm tracking-widest text-gray-500 relative z-10"
        >
          0
        </div>
      </div>
    </>
  );
}