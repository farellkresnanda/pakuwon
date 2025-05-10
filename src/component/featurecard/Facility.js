import Image from 'next/image';
import Link from 'next/link'

const facilities = [
  { name: 'GYM', image: '/Gym/Gym.png' },
  { name: 'Lobi & Lounge', image: '/lobby/Guest Lobby.jpg' },
  { name: 'Ruang Anak', image: '/kids/Kids Room.jpg' },
  { name: 'Kolam Renang', image: '/pool.svg' },
  { name: 'Ruang Serbaguna', image: '/function/Function Room Amor_A.jpg' },
  { name: 'Shopping Mall', image: '/pakuwonmall/Pakuwon Bekasi Mall 4.jpg' }
];

export default function PremiumFacilities() {
  return (
    <div className="bg-[#06202B] py-10 px-5 md:px-10 lg:px-20 border-[8px] border-[#F9F8EB] rounded-3xl max-w-[1440px] mx-auto">
      
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
        <div className='max-w-xl'>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-snug" data-aos="fade-right">
          Nikmati <span className="text-[#BDB395]">Fasilitas <br/> Premium</span> Kami
          </h2>
          <p className="text-white mt-4 text-[15px] md:text-base" data-aos="fade-right">
          Beragam fasilitas eksklusif tersedia untuk mendukung kenyamanan dan gaya hidup Anda.
          Mulai dari sarana hiburan, olahraga, hingga konektivitas yang strategis.
          </p>
          <hr className="my-6 border-t-2 border-white w-3/4 md:w-full" data-aos="fade-right"/>
        </div>

        <Link href="/facility" data-aos="fade-left">
          <button className="border border-white text-white py-2 px-5 text-[15px] rounded-2xl hover:bg-white hover:text-gray-700 transition">
            Lihat Detail
          </button>
        </Link>
      </div>
      
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {facilities.map((facility, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg w-full h-64 sm:h-72 lg:h-80">
            <Image 
              src={facility.image} 
              alt={facility.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center py-4 text-lg font-medium">
              {facility.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
