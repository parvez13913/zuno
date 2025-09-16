"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ImageScrollSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".track-lm",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.set(".center-image", {
      width: "45vw",
      height: "60vh",
      scale: 1,
    });

    gsap.set(".inner-heading-s", {
      opacity: 0,
      y: 50,
    });

    gsap.set(".overlayer-image", {
      opacity: 0,
    });

    gsap.set(".s-wrapper", {
      opacity: 1,
    });

    tl.to(".center-image", {
      width: "100vw",
      height: "100vh",
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        ".s-wrapper",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        ".overlayer-image",
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.3
      )
      .to(
        ".inner-heading-s",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.5
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="track-lm relative h-screen z-20">
      <div className="sticky-lm sticky top-0 h-screen overflow-hidden">
        <div className="center-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl">
          <img
            src="/image-scrolling.avif"
            className="w-full h-full object-cover"
          />

          <div className="inner-heading-s absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <div className="inner-heading-s w">
              <div className="w-40 mx-auto">
                <h1 className="font-medium bg-gray-200/20 text-white mx-auto py-1 px-4 rounded-full">
                  Personal Growth
                </h1>
              </div>
              <h1 className="text-7xl font-bold text-white leading-[1.2]">
                AI that understands <br /> your emotions
              </h1>
            </div>
          </div>
        </div>

        <div className="s-wrapper absolute inset-0 grid grid-cols-12 grid-rows-8 gap-4 p-8">
          <div className="s-col left col-span-3 row-span-8 flex flex-col gap-4">
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-8.avif"
                alt="Green texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-9.avif"
                alt="Person in meditation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-10.avif"
                alt="Orange texture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="s-col-center col-span-6 row-span-8"></div>

          <div className="s-col right col-span-3 row-span-8 flex flex-col gap-4">
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-5.avif"
                alt="Person with sunglasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-6.avif"
                alt="Wooden texture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-l flex-1 rounded-2xl overflow-hidden">
              <img
                src="/scroll-4.avif"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScrollSection;
