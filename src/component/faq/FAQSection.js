import React from "react";

const faqs = [
  {
    question: "Apa keuntungan membeli apartemen di Pakuwon City Bekasi dibandingkan perumahan biasa?",
    answer: "Apartemen terintegrasi dengan pusat perbelanjaan, keamanan 24 jam, serta fasilitas premium seperti kolam renang, gym, dan sauna yang mendukung gaya hidup modern tanpa repot.",
    icon: "🏢",
  },
  {
    question: "Mengapa Bekasi menjadi lokasi ideal untuk hunian dan investasi?",
    answer: "Bekasi memiliki infrastruktur lengkap, biaya hidup yang terjangkau, dekat dengan kawasan industri, dan akses mudah ke transportasi seperti LRT, KRL, KCIC, dan jalan tol yang meningkatkan nilai investasi.",
    icon: "🏙️",
  },
  {
    question: "Apa saja fasilitas unggulan yang tersedia di Pakuwon Residences Bekasi?",
    answer: "Fasilitas unggulan meliputi kolam renang tematik (±9 jenis), jogging track, gym, sauna, lounge mewah, dan bahkan masjid indoor besar yang mendukung kenyamanan penghuni.",
    icon: "🏊‍♂️",
  },
  {
    question: "Apa itu konsep 'One Stop Living' yang ditawarkan Pakuwon?",
    answer: "Konsep ini mengintegrasikan hunian, belanja, makan, hiburan, ibadah, dan akses transportasi dalam satu kawasan superblok terintegrasi, sehingga memenuhi semua kebutuhan penghuni dalam satu lokasi.",
    icon: "🔄",
  },
  {
    question: "Bagaimana sistem keamanan apartemen Pakuwon?",
    answer: "Apartemen dilengkapi dengan sistem pintu pintar (Smart Lock Door) yang mencakup fitur fingerprint, smart card, pin code, dan akses jarak jauh melalui ponsel, memberikan rasa aman bagi penghuni.",
    icon: "🔒",
  },
  {
    question: "Apa yang membuat desain arsitektur Pakuwon City Bekasi istimewa?",
    answer: "Didesain oleh firma arsitektur internasional ternama seperti Benoy, yang memiliki portofolio global termasuk proyek-proyek besar seperti ION Orchard dan Alibaba HQ, memberikan nilai estetika dan fungsionalitas yang tinggi.",
    icon: "🏛️",
  },
  {
    question: "Berapa kisaran harga unit apartemen di Pakuwon Residences Bekasi?",
    answer: "Harga unit mulai dari sekitar ±850 juta untuk tipe 1BR, dan dapat mencapai hingga 6,7 miliar untuk tipe 3BR Private Lift, menyesuaikan dengan desain, ukuran, dan fasilitas yang ditawarkan.",
    icon: "💰",
  },
  {
    question: "Apa saja keunggulan investasi properti di kawasan superblok seperti Pakuwon?",
    answer: "Kawasan superblok memiliki nilai investasi tinggi karena lokasinya yang strategis, cepat disewakan atau dijual berkat kehadiran pusat perbelanjaan, hotel, dan fasilitas publik lainnya yang menarik penghuni dan investor.",
    icon: "📈",
  },
  {
    question: "Apa itu Bay Window dan Balcony, dan mengapa penting?",
    answer: "Bay Window dan Balcony memberikan pencahayaan alami yang optimal, pemandangan yang menarik, serta ruang tambahan untuk relaksasi dan aktivitas outdoor, sehingga menambah nilai estetika dan fungsionalitas ruangan.",
    icon: "🌄",
  }
];


const FAQCard = ({ question, answer, icon, animation }) => {
  return (
    <div
      className="bg-[#F9F8EB] shadow-lg rounded-xl p-5 border-2 border-[#7F7E72] flex flex-col items-start gap-5 text-black"
      data-aos={animation}
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="text-gray-600 text-sm">{answer}</p>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="pt-[80px] pb-[50px] px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <h2 className="text-[28px] sm:text-[32px] md:text-[35px] font-bold text-black">Butuh Bantuan?</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Punya pertanyaan? Berikut beberapa pertanyaan yang paling sering ditanyakan
        </p>
      </div>

      {/* Responsive line */}
      <div className="h-[3px] bg-[#7F7E72] w-full max-w-4xl mx-auto mt-10"></div>

      {/* FAQ Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {faqs.map((faq, index) => {
          const animations = ["fade-right", "fade-up", "fade-left"];
          const animation = animations[index % 3];
          return <FAQCard key={index} {...faq} animation={animation} />;
        })}
      </div>
    </section>
  );
}
