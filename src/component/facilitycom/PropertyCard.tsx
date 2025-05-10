"use client";
import Image from "next/image";

interface PropertyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  amenities: { icon: string; label: string }[];
}

export default function PropertyCard({
  title,
  description,
  imageUrl,
  amenities,
}: PropertyCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#F9F8EB] p-8 rounded-lg max-w-4xl mx-auto shadow-lg">
      {/* Left Section */}
      <div className="bg-gray-900 text-white p-8 flex-1 rounded-lg md:rounded-l-lg md:rounded-r-none">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-300 mt-4">{description}</p>

        {/* Amenities */}
        <div className="mt-6 space-y-3">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <span>{item.icon}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 px-5 py-2 bg-transparent border border-white rounded-lg text-white hover:bg-white hover:text-gray-900 transition">
          Learn more
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="rounded-lg md:rounded-r-lg md:rounded-l-none object-cover"
        />
      </div>
    </div>
  );
}
