"use client";

import { useState } from "react";
import Image from "next/image";

const menuItems = ["GYM", "Ruang Serbaguna", "Kolam Renang", "Taman", "Lobi & Lounge", "Plaza"];

const contentMap = {
  GYM: {
    images: ["/Gym/4.svg", "/Gym/2.svg", "/Gym/1.svg", "/Gym/3.svg", "/Gym/5.svg"],
    description:
      "Fasilitas GYM kami dilengkapi dengan alat-alat modern untuk mendukung gaya hidup sehat Anda.",
    floor: "Lantai 13",
  },
  "Ruang Serbaguna": {
    images: ["/function/Function Room Amor B.jpg", "/function/Function Room Amor B.jpg", "/function/Meeting Room.jpg", "/function/Function Room Amor_A.jpg", "/function/Function Room Amor B.jpg"],
    description: "Ruang serbaguna untuk berbagai acara dengan fasilitas lengkap.",
    floor: "Lantai 5",
  },
  "Kolam Renang": {
    images: ["/pool/2.svg", "/pool/1.svg", "/pool/3.svg", "/pool/4.svg", "/pool/5.svg"],
    description: "Kolam renang indoor dan outdoor untuk kenyamanan Anda.",
    floor: "Lantai 1",
  },
  Taman: {
    images: ["/Garden/2.svg", "/Garden/1.svg", "/Garden/3.svg", "/Garden/4.svg", "/Garden/5.svg"],
    description: "Taman hijau yang asri untuk relaksasi dan jalan-jalan.",
    floor: "Lantai 2",
  },
  "Lobi & Lounge": {
    images: ["/lobby/Guest Lobby B.jpg", "/lobby/Guest Lobby.jpg", "/lobby/IMG_6061.jpg", "/lobby/Lobby Lantai 1 Amor_B.jpg", "/lobby/Lounge Lobby.jpg"],
    description: "Tempat bersantai dengan desain elegan di area lobi.",
    floor: "Ground Floor",
  },
  "Plaza": {
    images: ["/pakuwonmall/Pakuwon Bekasi Mall 4.jpg", "/pakuwonmall/Pakuwon Mall Bekasi_2.jpg", "/pakuwonmall/Pakuwon Mall Bekasi_5.jpg", "/pakuwonmall/Pakuwon Mall Bekasi_3.jpg", "/pakuwonmall/Pakuwon Bekasi Mall 4.jpg"],
    description: "Area plaza yang luas untuk event dan aktivitas luar ruangan.",
    floor: "Outdoor",
  },
};

export default function FacilityGallery() {
  const [activeMenu, setActiveMenu] = useState("GYM");
  const content = contentMap[activeMenu];

  return (
    <section className="p-6 max-w-6xl mx-auto px-4">
      {/* Menu Navigasi */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
          {menuItems.map((item, index) => (
        <button
          key={item}
          onClick={() => setActiveMenu(item)}
          data-aos="fade-left"
          data-aos-delay={`${index * 100}`} // delay bertahap 0ms, 100ms, 200ms, dst
          className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
            activeMenu === item
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:border-black"
          }`}
        >
          {item}
        </button>
      ))}
      </div>

      {/* Grid Gambar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4">
        <div className="lg:row-span-2" data-aos="fade-right">
          <Image
            src={content.images[0]}
            alt="Image 1"
            width={512}
            height={700}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div data-aos="fade-down">
          <Image
            src={content.images[1]}
            alt="Image 2"
            width={512}
            height={340}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div data-aos="fade-left">
          <Image
            src={content.images[2]}
            alt="Image 3"
            width={512}
            height={340}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div data-aos="fade-up">
          <Image
            src={content.images[3]}
            alt="Image 4"
            width={512}
            height={340}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div data-aos="fade-left">
          <Image
            src={content.images[4]}
            alt="Image 5"
            width={512}
            height={340}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Deskripsi */}
      <div className="bg-[#aab6b6]/30 mt-6 p-6 rounded">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{activeMenu}</h2>
        <p className="text-gray-700 mb-2">{content.description}</p>
        <p className="text-right text-gray-600 mt-4">{content.floor}</p>
      </div>
    </section>
  );
}
