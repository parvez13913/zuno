"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".horizontal-cards",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.set([".fr-2", ".fr-3", ".fr-4", ".fr-5"], {
      x: "100vw",
      opacity: 0,
    });

    gsap.set(".h-cards-content", {
      x: "50vw",
      opacity: 0,
    });

    tl.to(".fr-2", { x: "0vw", opacity: 1, duration: 1 })
      .to(".fr-3", { x: "20px", opacity: 1, duration: 1 }, "-=0.5")
      .to(".fr-4", { x: "10px", opacity: 1, duration: 1 }, "-=0.5")
      .to(".fr-5", { x: "15px", opacity: 1, duration: 1 }, "-=0.5")
      .to(".h-cards-content", { x: "50vw", opacity: 1, duration: 1 }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="h-[40vh] flex items-center justify-center" />

      <div className="horizontal-cards h-[90vh] relative overflow-hidden pl-10">
        <div className="relative w-full h-full">
          <div className="fr-1 absolute top-1/2 left-8 transform -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/horizontal-image.avif"
              alt="Mental wellness meditation"
              className="cover-image w-full h-full object-cover"
            />
          </div>

          <div className="fr-2 absolute top-1/2 transform -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/horizontal-image-1.avif"
              alt="Couple wellness"
              className="cover-image w-full h-full object-cover"
            />
          </div>

          <div className="fr-3 absolute top-1/2 transform -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/horizontal-image-2.avif"
              alt="Woman with plant"
              className="cover-image w-full h-full object-cover"
            />
          </div>

          <div className="fr-4 absolute top-1/2 transform -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/horizontal-image-3.avif"
              alt="Outdoor wellness"
              className="cover-image w-full h-full object-cover"
            />
          </div>

          <div className="fr-5 absolute top-1/2 transform -translate-y-1/2 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/horizontal-image-4.avif"
              alt="Healthy lifestyle"
              className="cover-image w-full h-full object-cover"
            />
          </div>

          <div className="h-cards-content absolute top-1/2 transform -translate-y-1/2 ">
            <div className="h-xl text-7xl font-bold text-gray-800 leading[1.2]">
              Your mental
              <br />
              wellness
              <br />
              journey starts
              <br />
              now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
