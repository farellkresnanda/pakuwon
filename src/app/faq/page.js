import FAQSection from "@/component/faq/FAQSection";
import Navbar from '@/component/navbar/Navbar';
import Footer from "@/component/footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9F8EB] font-poppins">
      <Navbar />
      <div>
        <FAQSection />
      </div>

      <div className="bg-[#D9D9D9] w-full min-h-[250px] flex flex-col md:flex-row justify-center items-center px-6 py-10 space-y-6 md:space-y-0 md:space-x-20">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-black font-semibold text-[24px] md:text-[30px]">Masih Punya Pertanyaan?</h1>
          <p className="text-black font-light text-[16px] md:text-[18px]">
            Tidak menemukan jawaban yang Anda cari? Hubungi kami
          </p>
        </div>
        <button className="bg-[#F9F8F1] text-black text-[15px] font-medium px-6 py-2 rounded-full shadow-md hover:bg-[#F0EDE5] transition">
          Hubungi Kami
        </button>
      </div>

      <Footer />
    </div>
  );
}
