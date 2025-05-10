import PropertyDropdownDolce from "@/component/comlisting/PropertyDropdownDolce";
import ImageGallery from "@/component/comlisting/ImageGallery";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F9F8EB]">
      <Navbar />

      {/* Section Header */}
      <div className="px-4 md:px-[100px] py-[40px] md:py-[70px]">
        <h1 className="font-semibold text-black text-[28px] md:text-[35px]">Tower Dolce Vita</h1>
        <PropertyDropdownDolce />

        <div className="flex flex-col md:flex-row items-start justify-center pt-5 gap-6">
          <div className="w-full md:w-1/2">
            <ImageGallery
              images={[
                "/dolce_room/2br/mbr.png",
                "/dolce_room/2br/dr.png",
                "/dolce_room/2br/lr.png",
              ]}
            />
          </div>

          <div className="w-full md:w-1/2 pt-5 md:pt-0">
            <h2 className="text-black text-[23px] font-semibold pb-4">Dolce Vita 2 Bedroom</h2>
            <h2 className="text-black text-[23px] font-semibold pb-6">Rp 1,8 - 2,4 Miliar</h2>

            <table className="w-full text-left text-gray-700">
              <tbody>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2 font-medium">Type</td>
                  <td className="py-2 text-right font-medium">2 BR</td>
                </tr>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2">Net area</td>
                  <td className="py-2 text-right">44,5 - 58 M2</td>
                </tr>
                <tr className="border-b-[2px] border-gray-400">
                  <td className="py-2">Semi gross area</td>
                  <td className="py-2 text-right">55 - 72 M2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section Deskripsi dan Material */}
      <div className="bg-[#48265F] py-12 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto">
          {/* Judul dan garis ditengah */}
          <div className="w-full max-w-[800px] mx-auto text-left">
            <h2 className="text-white text-[22px] md:text-[25px] font-semibold">Description</h2>
            <div className="h-[2px] bg-[#8A8989] my-[4px] w-full"></div>
          </div>

          {/* Deskripsi paragraf juga ditengah */}
          <div className="w-full max-w-[800px] mx-auto text-left">
            <p className="text-white text-[14px]">
              Perhatikan lokasi, harga, legalitas, fasilitas, dan reputasi developer.
              Pastikan apartemen berada di lokasi strategis dan dekat dengan fasilitas umum seperti transportasi.
            </p>
          </div>

          {/* Gambar di atas, tulisan di bawah */}
          <div className="flex flex-col items-center gap-10 mt-10">
            <Image
              src="/dolce_room/2br/2br.png"
              alt="Dolce 2BR"
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto rounded-3xl object-cover"
            />

            <div className="w-full max-w-[800px]">
              {[
                {
                  title: "Material Utama",
                  content: `• Lantai: Homogeneous Tile
• Dinding: Precast diplester dan dicat, bata ringan berlapis gypsum/keramik sesuai ruangan.
• Plafon: Concrete expose + skimcoat (ruang keluarga & balkon), gypsum board dicat (dapur & kamar mandi).`,
                },
                {
                  title: "Pintu & Jendela",
                  content: `• Pintu Utama & Kamar: Kayu dengan architrave finish cat.
• Pintu Balkon: Aluminium.
• Jendela: Kaca tinted dengan kusen aluminium.`,
                },
                {
                  title: "Kamar Mandi",
                  content: "• Kloset duduk, washtafel, dan shower ex TOTO/setara.",
                },
                {
                  title: "Jaringan Instalasi",
                  content: `• Listrik: 1300 VA (Studio), 2200 VA (2BR).
• Air: Air bersih & air kotor.
• TV & AC: Instalasi jaringan TV & pipa AC.
• Keamanan: Fire alarm, hydrant, sprinkler, heat detector.
• Akses Pintu: Digital smart lock door.`,
                },
              ].map((section, index) => (
                <div key={index} className="pb-6">
                  <h3 className="text-white text-[22px] md:text-[25px] font-semibold">
                    {section.title}
                  </h3>
                  <div className="h-[2px] bg-[#8A8989] my-2 w-full"></div>
                  <p className="text-white text-[14px] whitespace-pre-line">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
