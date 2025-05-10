"use client";
import Image from "next/image";

const slide = {
  title: "Hidup Nyaman & Elegan\n di Jantung Kota Bekasi",
  subtitle: "Pakuwon Residence Bekasi",
  description:
    "Apartemen modern dalam superblok premium—terintegrasi langsung dengan mall, hotel internasional, dan akses LRT. Solusi ideal untuk gaya hidup aktif dan investasi jangka panjang.",
  image: "/drone/DJI_0330.JPG",
  stats: [
    { value: "5", label: "Superblock" },
    { value: "#1", label: "Biggest Superblock" },
    { value: "23", label: "Apartemen" },
  ],
};

export default function Carousel() {
  return (
    <div className="w-full bg-[#F9F8EB] flex justify-center items-center pt-0">
      {/* Background Image */}
      <div className="relative overflow-hidden rounded-2xl border-[8px] border-[#F9F8EB]">
        <Image
          src={slide.image}
          alt={slide.subtitle}
          width={1500}
          height={300}
          className="h-[782px] rounded-3xl object-cover"
        />
        <div
          className="absolute -inset-2 bg-black border-[8px] border-[#F9F8EB] rounded-[35px]"
          style={{ opacity: 0.6 }}
        ></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold whitespace-pre-line">
            {slide.title}
          </h1>
          <h2 className="text-[40px] md:text-[30px] font-semibold text-[#BDB395]">{slide.subtitle}</h2>
          <p className="text-lg mt-2 max-w-2xl">{slide.description}</p>

          {/* Additional Info */}
          <div className="mt-6 flex gap-8">
            {slide.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
