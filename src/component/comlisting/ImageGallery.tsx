'use client';

import { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 py-8 justify-center items-center md:items-start">
      
      {/* Sidebar Thumbnail - Desktop */}
      <div className="hidden md:block">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          scrollbar={{ draggable: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="h-[300px] md:h-[400px] w-[80px] md:w-[100px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumb ${index}`}
                className="w-[100px] h-[100px] object-cover rounded cursor-pointer border-2 hover:border-black transition"
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Image */}
      <div className="w-full flex justify-center items-center">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Image
            src={selectedImage}
            alt="Selected"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>



      {/* Thumbnail - Mobile (Horizontal) */}
      {/* Horizontal Thumbnails - Mobile */}
      <div className="block md:hidden w-full mt-4">
        <Swiper
          direction="horizontal"
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          scrollbar={{ draggable: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Thumb ${index}`}
                className="w-[80px] h-[80px] object-cover rounded cursor-pointer border-2 hover:border-black transition"
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
