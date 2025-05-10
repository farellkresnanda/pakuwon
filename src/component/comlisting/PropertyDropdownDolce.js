"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const PropertyDropdownDolce = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);
  
  const propertyTypes = ["1 Bedroom", "2 Bedroom", "3 Bedroom"];

  // Ambil type dari URL saat halaman berubah
  const getTypeFromPath = () => {
    const foundType = propertyTypes.find(type => pathname.includes(type.toLowerCase().replace(/\s+/g, "")));
    return foundType || "Type 1 BR";
  };

  const [selectedType, setSelectedType] = useState(getTypeFromPath());

  useEffect(() => {
    setSelectedType(getTypeFromPath());
  }, [pathname]); // Update saat URL berubah

  const handleSelect = (type) => {
    setOpenDropdown(false);
    const formattedType = type.toLowerCase().replace(/\s+/g, "");
    router.push(`/listing/dolce/${formattedType}`);
  };

  return (
    <div className="relative flex flex-col gap-4 mt-2 z-20">
      <div className="w-[168px] h-[38px]">
        <button
          onClick={() => setOpenDropdown((prev) => !prev)}
          className="w-full flex justify-between items-center bg-[#D9D9D9] px-4 py-1 rounded-lg text-[14px] text-[#696868]"
        >
          {selectedType}
          <span className="text-[#696868] text-[16px]">{openDropdown ? "▲" : "▼"}</span>
        </button>

        {openDropdown && (
          <div className="mt-2 bg-[#D9D9D9] rounded-lg overflow-hidden shadow-lg absolute w-[168px]">
            {propertyTypes.map((type, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-1 text-[14px] text-[#696868] hover:bg-gray-300 ${
                  selectedType === type ? "font-bold" : ""
                }`}
                onClick={() => handleSelect(type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDropdownDolce;