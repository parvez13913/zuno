"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const OverlayScrollSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.set(".framer-overlayer", {
      opacity: 0,
      scale: 0.8,
      borderRadius: "0px",
    });

    gsap.set(".content-card", {
      opacity: 0,
      y: 50,
    });

    tl.to(".framer-overlayer", {
      opacity: 1,
      scale: 1,
      borderRadius: "24px",
      duration: 1,
      ease: "power2.out",
    }).to(
      ".content-card",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="hero-section relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="/background.webp" className="object-cover w-full h-full" />
      </div>

      <div className="framer-overlayer absolute inset-0 bg-transparent border-4 border-white will-change-transform"></div>

      <div className="content-card absolute bottom-20 left-20 bg-white rounded-2xl p-8 max-w-md shadow-lg">
        <div className="w-40">
          <h1 className="font-medium bg-gray-200 mx-auto py-1 px-4 rounded-full">
            Personal Growth
          </h1>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-[1.2]">
          Feel more human <br />
          every day
        </h2>
      </div>
    </div>
  );
};

export default OverlayScrollSection;
