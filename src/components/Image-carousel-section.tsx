"use client";

import Carousel from "./Carousel";

const ImageCarouselSection = () => {
  const images = [
    {
      src: "/scroll-1.avif",
      alt: "image-1-thumbnail",
    },
    {
      src: "/scroll-2.avif",
      alt: "image-2-thumbnail",
    },
    {
      src: "/scroll-3.avif",
      alt: "image-3-thumbnail",
    },
    {
      src: "/scroll-4.avif",
      alt: "image-4-thumbnail",
    },
    {
      src: "/scroll-5.avif",
      alt: "image-5-thumbnail",
    },
    {
      src: "/scroll-6.avif",
      alt: "image-6-thumbnail",
    },
    {
      src: "/scroll-7.jpg",
      alt: "image-7-thumbnail",
    },
    {
      src: "/scroll-8.avif",
      alt: "image-8-thumbnail",
    },
    {
      src: "/scroll-9.avif",
      alt: "image-9-thumbnail",
    },
    {
      src: "/scroll-10.avif",
      alt: "image-10-thumbnail",
    },
  ];

  return (
    <div className="p-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <img
            src="/image-carousel.avif"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-8 rounded-3xl h-[400px]">
            <div className="inline-block mb-6">
              <span className="bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                Ready to automate?
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-[1]">
              Stay on top of your recurring <br />
              payments with ease
            </h2>
          </div>

          <div className="flex items-center justify-center w-full h-48">
            <Carousel images={images.map((image) => image.src)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselSection;
