import FAQSection from "@/component/faq/FAQSection"; // Pastikan path sesuai dengan struktur proyekmu
import Navbar from '@/component/navbar/Navbar';
import Image from "next/image";
import AwardsSection from "../../component/about/AwardSection";
import Footer from "@/component/footer/Footer";
import FacilityGallery from "../../component/facilitycom/FacilityGallery";

export default function Home() {
  return (
    <div className="bg-[#F9F8EB] font-poppins">
      <Navbar />

      {/* Hero Image */}
      <div className="pt-[10px] overflow-hidden rounded-lg md:rounded-r-lg md:rounded-l-none px-4 md:px-8 lg:px-[120px]" data-aos="fade-right">
        <div className="w-full h-[250px] md:h-[350px] lg:h-[450px] border-[5px] border-[#F9F8EB] rounded-lg md:rounded-r-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUTUBE_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Title */}
      <div className="flex justify-center pt-[35px] px-4 md:px-0" data-aos="fade-left">
        <h1 className="text-black text-[clamp(28px,5vw,55px)] font-medium text-center">
          Fasilitas
        </h1>
      </div>

      {/* Paragraph */}
      <div className="flex justify-center pt-[25px] px-4 md:px-8 lg:px-[230px]" data-aos="fade-up">
        <p className="text-black text-[14px] md:text-[16px] font-normal text-center leading-relaxed">
        Nikmati beragam fasilitas eksklusif yang telah kami sediakan untuk menunjang kenyamanan dan kebutuhan Anda. Mulai dari pusat kebugaran modern, kolam renang, hingga ruang serbaguna yang elegan—setiap fasilitas dirancang untuk memberikan pengalaman terbaik bagi penghuni dan pengunjung.
        </p>
      </div>

      {/* Gallery */}
      <div className="py-[50px] md:py-[80px] lg:py-[100px] px-4 md:px-8 lg:px-[120px]">
        <FacilityGallery />
      </div>

      {/* Optional: Footer & FAQ Section */}
      {/* <FAQSection /> */}
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
}
