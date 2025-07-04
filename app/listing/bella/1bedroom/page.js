"use client";
import ImageGallery from "@/component/comlisting/ImageGallery";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Image from "next/image";
import PropertyDropdownBella from "../../../../component/comlisting/PropertyDropdownBella";

export default function Home() {
  return (
    <div className="bg-[#F9F8EB]">
      <Navbar />

      {/* Section Header */}
      <div className="h-auto md:h-[630px]" data-aos="fade-down">
        <div className="px-4 md:px-[100px]">
          <h1 className="font-semibold text-black text-[28px] md:text-[35px] pt-[40px] md:pt-[70px]">
            Tower Bella
          </h1>
          <PropertyDropdownBella />
        </div>

        <div className="flex flex-row flex-wrap items-start justify-center px-4 md:px-[100px] pt-[20px] gap-6" data-aos="fade-up">
          <div>
            <ImageGallery
              images={["/dolce_room/1br/lr.png", "/dolce_room/1br/br.png"]}
            />
          </div>

          <div className="pt-5 md:pl-9 w-full md:w-[570px]" data-aos="fade-left">
            <h1 className="text-black text-[23px] font-semibold pb-[20px]">
              Bella 1 Bedroom
            </h1>
            <h1 className="text-black text-[23px] font-semibold pb-[20px]">
              Rp 830 - 920 Juta
            </h1>
            <table className="w-full text-left text-gray-700">
              <tbody>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2 font-medium">Type</td>
                  <td className="py-2 text-right font-medium">1 BR</td>
                </tr>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2">Net area</td>
                  <td className="py-2 text-right">20 - 21,5 M2</td>
                </tr>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2">Semi gross area</td>
                  <td className="py-2 text-right">25,5 - 27 M2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section Deskripsi dan Material */}
      <div className="mt-[100px] py-12 w-full bg-[#3D542F] z-20" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-white text-[25px] font-semibold">Description</h1>
          <div className="h-[2px] bg-[#8A8989] my-[4px] w-full"></div>
          <p className="text-white text-[14px] font-normal">
            Perhatikan lokasi, harga, legalitas, fasilitas, dan reputasi developer. 
            Perhatikan lokasi, harga, legalitas, fasilitas, dan reputasi developer. 
            Pastikan apartemen berada di lokasi strategis dan dekat dengan fasilitas umum seperti transportasi.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center px-6 md:px-[250px] gap-[30px] md:gap-[70px] mt-[40px] md:mt-[63px]">
          {/* Gambar */}
          <div>
            <Image
              src="/amor_room/1br/1br.png"
              alt="wtegdg"
              width={500}
              height={300}
              className="w-full max-w-[500px] h-auto rounded-3xl object-cover aspect-[3/6]"
            />
          </div>

          {/* Detail */}
          <div className="w-full md:w-[534px]" data-aos="fade-left">
            <div className="pb-4">
              <h1 className="text-white text-[25px] font-semibold">Material Utama</h1>
              <div className="w-full h-[2px] bg-[#8A8989] my-[4px]"></div>
              <p className="text-white text-[14px] font-normal">
                • Lantai: Homogeneous Tile di ruang utama & kamar tidur, Ceramic Tile di kamar mandi & balkon.<br />
                • Dinding: Precast diplester dicat, partisi gypsum atau bata ringan sesuai ruang, kamar mandi dilapisi keramik.<br />
                • Plafon: Concrete expose + skimcoat untuk ruang utama & balkon, gypsum board dicat untuk dapur & kamar mandi.
              </p>
            </div>

            <div className="pb-4">
              <h1 className="text-white text-[25px] font-semibold">Pintu & Jendela</h1>
              <div className="w-full h-[2px] bg-[#8A8989] my-[4px]"></div>
              <p className="text-white text-[14px] font-normal">
                • Pintu utama & kamar: Kayu + architrave finish cat.<br />
                • Pintu balkon: Kusen aluminium.<br />
                • Jendela: Kaca tinted + kusen aluminium.
              </p>
            </div>

            <div className="pb-4">
              <h1 className="text-white text-[25px] font-semibold">Kamar Mandi</h1>
              <div className="w-full h-[2px] bg-[#8A8989] my-[4px]"></div>
              <p className="text-white text-[14px] font-normal">
                • Kloset duduk, washtafel, dan shower (ex TOTO/setara).
              </p>
            </div>

            <div className="pb-4">
              <h1 className="text-white text-[25px] font-semibold">Jaringan Instalasi</h1>
              <div className="w-full h-[2px] bg-[#8A8989] my-[4px]"></div>
              <p className="text-white text-[14px] font-normal">
                • Listrik: 1300 VA (1BR), 2200 VA (2BR), 3500 VA (3BR).<br />
                • Air bersih & air kotor.<br />
                • Jaringan TV 1 Outline, pipa AC.<br />
                • Fire alarm, hydrant system, sprinkler & heat detector.
              </p>
            </div>

            <div className="pb-4">
              <h1 className="text-white text-[25px] font-semibold">Lain-lain</h1>
              <div className="w-full h-[2px] bg-[#8A8989] my-[4px]"></div>
              <p className="text-white text-[14px] font-normal">
                • Digital smart lock door, kamera CCTV, access card lift.<br />
                • Emergency Evacuation Paging System (EVAC Speaker).
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
