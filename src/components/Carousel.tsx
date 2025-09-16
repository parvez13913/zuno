"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";

interface CarouselProps {
  images: string[];
  options?: EmblaOptionsType;
}

const Carousel = ({ images, options = {} }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_30%] pl-4" key={index}>
              <div className="bg-transparent">
                <Image
                  src={src || "/horizontal-image-1.avif"}
                  alt={`Slide ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover h-40 w-40 rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
