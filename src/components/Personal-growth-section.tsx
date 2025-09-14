"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  "/scroll-1.avif",
  "/scroll-2.avif",
  "/scroll-3.avif",
  "/scroll-4.avif",
  "/scroll-5.avif",
  "/scroll-6.avif",
  "/scroll-7.jpg",
  "/scroll-8.avif",
  "/scroll-9.avif",
  "/scroll-10.avif",
  "/scroll-11.avif",
  "/scroll-12.avif",
  "/scroll-13.avif",
];

const PersonalGrowthSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const imageElements = imagesRef.current;
    const textElement = textRef.current;

    const spacing = 220 - images.length * 5;
    gsap.set(imageElements, {
      x: (i) => i * spacing - (images.length * spacing) / 2,
      y: 0,
      rotation: 0,
      scale: 0.8,
    });

    gsap.set(textElement, {
      opacity: 0,
      scale: 0.8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "left center",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    imageElements.forEach((img, i) => {
      const angle = (i / images.length) * Math.PI * 2;
      const radius = 380;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const rotation = (angle * 180) / Math.PI + 90;
      const scale = images.length > 10 ? 0.7 : 0.8;
      tl.to(
        img,
        {
          x,
          y,
          rotation,
          scale,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );
    });

    tl.to(
      textElement,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      },
      0.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
  return (
    <div>
      <div className="w-40 mx-auto text-center">
        <h1 className="font-medium bg-gray-200 mx-auto py-1 px-4 mt-4 rounded-full">
          Personal Growth
        </h1>
      </div>
      <div className="max-w-4xl text-center mx-auto text-[#303a46]">
        <h1 className="tracking-[-0.03em] mt-0 mb-0 font-sans text-[6.8em] font-bold leading-[1]">
          Feel more <br /> human every day
        </h1>
      </div>
      <div className="text-center mx-auto my-4">
        <button className="bg-[#d2f0a3] hover:bg-[#b6db7d] text-black px-8 py-4 rounded-full cursor-pointer font-semibold font-sans">
          Request demo
        </button>
      </div>

      <div>
        <div className="flex items-center justify-center" />
        <div
          ref={containerRef}
          className="relative h-[50vh] flex items-center justify-center bg-white "
        >
          {/* Images */}
          {images.map((src, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="absolute w-48 h-48 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Center text */}
          <div className="absolute z-10 text-center" ref={textRef}>
            <div className="w-40 mx-auto text-center">
              <h1 className="font-medium bg-gray-200 mx-auto py-1 px-4 mt-4 rounded-full">
                Personal Growth
              </h1>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              A gentle space to
              <br />
              understand yourself
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGrowthSection;
