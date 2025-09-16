"use client";

import FaqSection from "@/components/Faq-section";
import FooterSection from "@/components/footer-section";
import Header from "@/components/Header";
import HorizontalScrollSection from "@/components/Horizontal-scroll-section";
import ImageCarouselSection from "@/components/Image-carousel-section";
import ImageScrollSection from "@/components/Image-scroll-section";
import OverlayScrollSection from "@/components/Overlay-scroll-section";
import PersonalGrowthSection from "@/components/Personal-growth-section";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const faqElement = faqRef.current;
    const footerElement = footerRef.current;
    const containerElement = containerRef.current;

    if (!faqElement || !footerElement || !containerElement) return;

    gsap.set(faqElement, {
      position: "relative",
      zIndex: 1,
    });

    gsap.set(footerElement, {
      position: "relative",
      zIndex: 10,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(footerElement, {
      y: -window.innerHeight,
      ease: "none",
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Header />
      <PersonalGrowthSection />
      <HorizontalScrollSection />
      <OverlayScrollSection />
      <ImageScrollSection />
      <ImageCarouselSection />
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        <div ref={faqRef}>
          <FaqSection />
        </div>

        <div ref={footerRef}>
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
