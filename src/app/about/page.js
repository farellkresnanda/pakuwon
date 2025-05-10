import FAQSection from "@/component/faq/FAQSection"; // Pastikan path sesuai dengan struktur proyekmu
import Navbar from '@/component/navbar/Navbar';
import Image from "next/image";
import AwardsSection from "../../component/about/AwardSection";
import Footer from "@/component/footer/Footer";


export default function Home() {
  return (
    <div className="bg-[#F9F8EB] font-poppins">
      <Navbar/>
      <section className="px-[120px] pt-[20px]" data-aos="fade-right" id="pakuwon_bekasi">
        <p className="text-[#918D8C] font-medium" >About Us</p>
      </section>
      <div className="px-[120px] pt-[20px]" data-aos="fade-right">
        <p className="text-[#000000] font-medium text-[50px]">About <span className="text-[#B68383]">Pakuwon</span></p>
      </div>
      <div className="px-[120px] pt-[20px] max-w-[1200px]" data-aos="fade-right">
        <p className="text-[#918D8C] font-medium text-[16px]">Perhatikan lokasi, harga, legalitas, fasilitas, dan reputasi developer. Pastikan apartemen berada di lokasi strategis dan dekat dengan fasilitas umum seperti transportasi. Perhatikan lokasi, harga, legalitas, fasilitas, dan reputasi developer. Pastikan apartemen berada di lokasi strategis dan dekat dengan fasilitas umum seperti transportasi.</p>
      </div>
      <div className="px-[120px] pt-[50px]" data-aos="fade-up">
        <Image
            src="test/Team meeting at office.svg"
            alt="tes"
            width={1400}
            height={500}
            className="rounded-lg md:rounded-r-lg md:rounded-l-none w-[1800px]"
        />
      </div>
      <div className="px-[120px] pt-[50px]" data-aos="fade-right">
        <AwardsSection/>
      </div>

      <div className="relative w-full flex flex-col items-center">
      {/* Section atas */}
      <div className="h-[700px] w-full bg-[#780C28] flex items-center justify-center px-[100px] rounded-t-[30px] rounded-b-[300px] mt-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-[200px] -mt-[400px]">
          {/* Bagian Heading */}
          <div className="text-left md:text-left">
            <h1 className="text-[40px] font-medium text-white" data-aos="fade-right">
            Jejak <span className="text-black">Prestasi</span> Kami di <br /> Seluruh Indonesia
            </h1>
          </div>

          {/* Bagian Deskripsi */}
          <section className="text-sm text-right max-w-[550px] text-white" data-aos="fade-left" id="pakuwon">
            <p className="mb-4">
              Sebagai pengembang properti terkemuka, Pakuwon Group telah membuktikan komitmennya melalui berbagai proyek prestisius di beberapa kota besar di Indonesia.
              Dengan pengalaman lebih dari tiga dekade
            </p>
            <p>
            kami membangun kawasan superblock terpadu yang menggabungkan shopping mall, hunian, hotel, dan perkantoran — menghadirkan pusat gaya hidup modern yang menjadi ikon di setiap kota.
            </p>
          </section>
        </div>
      </div>

      {/* Section bawah */}
      <div className="w-full -mt-[550px] pb-20 px-10 flex flex-col items-center">
        <h2 className="text-lg font-bold mt-40 mb-10" data-aos="fade-up">OUR PROPERTY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {/* Property 1 */}
          <div className="max-w-[350px]  text-center" data-aos="fade-right">
            <img src="/tower_bella.jpg" alt="Tunjungan Plaza" className="rounded-2xl shadow-lg h-[600px] object-cover" />
            <h3 className="mt-4 font-semibold text-black text-[18px]">Tunjungan Plaza, Surabaya</h3>
            <p className="text-[15px] text-gray-600">Shopping mall | Hotel | Apartment</p>
          </div>

          {/* Property 2 */}
          <div className="max-w-[350px] text-center" data-aos="fade-up">
            <img src="/tower_amor.jpg" alt="Pakuwon Mall" className="rounded-2xl shadow-lg h-[600px] object-cover" />
            <h3 className="mt-4 font-semibold text-black text-[18px]">Pakuwon Mall, Surabaya</h3>
            <p className="text-[15px] text-gray-600">Shopping mall | Hotel | Apartment</p>
          </div>

          {/* Property 3 */}
          <div className="max-w-[350px] text-center" data-aos="fade-left">
            <img src="/tower_dolce.jpg" alt="Kota Kasablanka" className="rounded-2xl shadow-lg h-[600px] object-cover" />
            <h3 className="mt-4 font-semibold text-black text-[18px]">Kota Kasablanka</h3>
            <p className="text-[15px] text-gray-600">hopping mall | Kantor</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
