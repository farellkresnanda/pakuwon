"use client";
import { useState, useEffect } from "react";

const FeatureCard = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint dari Tailwind
    };

    handleResize(); // cek saat mount
    window.addEventListener("resize", handleResize); // update jika ukuran berubah

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHovered(true); // langsung aktifkan hover di mobile
    }
  }, [isMobile]);

  return (
    <div
      className={`relative h-[535px] sm:w-[224px] transition-all duration-500 ease-in-out overflow-hidden rounded-2xl shadow-lg cursor-pointer p-4 will-change-transform
        ${isHovered ? "sm:w-[550px]" : "sm:w-[224px]"} w-full`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Efek Background Gelap Muncul Saat Hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isHovered
            ? "rgba(0, 0, 0, 0.5)"
            : "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 40%)",
        }}
      ></div>

      {/* Container untuk teks */}
      <div className="absolute bottom-4 left-4 right-4 text-white overflow-hidden">
        {/* Title Sebelum Hover */}
        <h2
          className={`text-[24px] font-bold absolute bottom-4 transition-transform duration-500 ${
            isHovered
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {title}
        </h2>

        {/* Title & Description Saat Hover */}
        <div
          className={`transition-transform duration-500 delay-100 ${
            isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <h3 className="text-[24px] font-bold">{title}</h3>
          <p className="mt-2 text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
};


const FeatureCards = () => {
  const features = [
    {
      image: "/drone/DJI_0509.JPG",
      title: "SuperBlock",
      description:
        "Kawasan modern terintegrasi yang menggabungkan pusat perbelanjaan, apartemen, dan hotel dalam satu area. Lokasinya sangat strategis, dekat dengan akses tol serta stasiun LRT, KRL, dan KCIC, menjadikan semuanya lebih praktis dan efisien.",
    },
    {
      image: "/MRT_jkt.jpg",
      title: "Mobilitas Tinggi",
      description:
        "Memiliki konektivitas luar biasa ke berbagai moda transportasi, mulai dari LRT, KRL, KCIC, hingga jalan tol utama. Mobilitas penghuni dan pengunjung menjadi lebih cepat, nyaman, dan fleksibel setiap harinya.",
    },
    {
      image: "/city_night.svg",
      title: "Pusat Pertumbuhan Ekonomi",
      description:
        "Berlokasi di pusat pertumbuhan ekonomi Bekasi Timur yang dikelilingi oleh kawasan industri dan bisnis besar. Potensi investasi tinggi dengan prospek perkembangan yang terus meningkat.",
    },
    {
      image: "/Guest_lo.jpg",
      title: "Premium",
      description:
        "Didesain dengan fasilitas eksklusif untuk menunjang gaya hidup modern — dari lobby megah, area komunal elegan, hingga fasilitas kebugaran dan rekreasi lengkap.",
    },
  ];

  return (
    <div className="w-full py-8 px-4 sm:px-0 sm:h-[670px] bg-cream flex flex-col sm:flex-row sm:justify-center sm:gap-x-[20px] gap-y-6 items-center transition-all duration-500">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureCards;
