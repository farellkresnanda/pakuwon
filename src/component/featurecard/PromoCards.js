export default function PromoCardLandscape() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between rounded-4xl text-[#F3E392] shadow-2xl overflow-hidden border border-gray-300 max-w-[700px] mx-auto p-8 md:p-10 gap-6 relative bg-cover bg-center font-playfair"
      style={{
        backgroundImage: "url('/Shiny Overlay.svg')",
      }}
    >
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left space-y-4 flex-1">
        <span className="inline-block bg-[#F5C45E] text-black font-semibold text-xs md:text-sm px-4 py-1 rounded-full shadow-md">
          Gratis BPHTB
        </span>

        <p className="text-md md:text-lg font-medium text-white">Sampai Dengan</p>

        <h2 className="text-[42px] md:text-[56px] font-extrabold leading-none text-white">
          220 <span className="font-light">JUTA</span>
        </h2>

        <p className="text-sm md:text-base text-white">
          Cicilan mulai dari <span className="font-extrabold text-[18px] md:text-[22px]">3 Juta-an</span>
        </p>
      </div>

      {/* Right Side: CTA Button */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <a
          href="https://wa.me/628111168127"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#F5C45E] text-black font-bold px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg">
            Cek Promonya
          </button>
        </a>
      </div>
    </div>
  );
}
