import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Facility() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F8EB] font-poppins">
        <div className="px-6 sm:px-16 md:px-32 lg:px-[150px] xl:px-[250px] 2xl:px-[380px] text-center mb-[100px] py-[27px]" >
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-black" data-aos= "fade-left">
            Temui Menara Kami
          </h1>
          <p className="text-black font-normal text-[13px] sm:text-[14px] mt-4" data-aos= "fade-right">
          Amor, Bella, dan Dolce Vita adalah tiga tower eksklusif yang membentuk inti dari kawasan superblock Pakuwon City Bekasi.
Masing-masing menawarkan pengalaman tinggal modern dengan akses langsung ke pusat perbelanjaan, hotel internasional, dan berbagai fasilitas premium.
Tower Amor dirancang untuk efisiensi dan kenyamanan, Tower Bella menghadirkan hunian modern terintegrasi, sementara Tower Dolce Vita menawarkan suasana lebih privat dengan unit terbatas.
Berlokasi strategis di pusat Bekasi dengan koneksi tol, LRT, dan KCIC, ketiga tower ini menawarkan kemudahan, gaya hidup premium, serta nilai investasi masa depan yang menjanjikan.
          </p>
        </div>

        <div className="w-full bg-[#373737] flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-[50px] lg:px-[100px] gap-y-10 lg:gap-x-[191px] py-10 lg:h-[700px]">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[500px] text-center lg:text-left"data-aos= "fade-right">
            <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-white" >
              Tower Amor
            </h1>
            <p className="text-[#FFFFFF] font-normal text-[13px] mt-5 mb-10 lg:mb-[90px]" >
              Tower Amor hadir sebagai pilihan hunian modern yang menggabungkan kenyamanan, gaya hidup dinamis, dan kemudahan akses di lokasi strategis. Dengan desain arsitektur yang elegan dan fasilitas premium, Amor Tower menawarkan apartemen ideal bagi Anda yang menginginkan kualitas hidup terbaik. Nikmati lingkungan yang aman, fasilitas lengkap, serta akses mudah ke pusat bisnis, pendidikan, dan hiburan. Jadikan Amor Tower rumah impian Anda yang merepresentasikan kehidupan urban yang nyaman dan bergengsi.
            </p>

            {/* Fasilitas */}
            <div className="flex flex-col items-center lg:items-start space-y-2" >
              <div className="flex items-center space-x-2">
                <Image src="/logo/Gym.svg" width={30} height={30} alt="Gym" />
                <p className="font-semibold text-[#999999]">GYM</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/pool.svg" width={30} height={30} alt="Swimming Pool" />
                <p className="font-semibold text-[#999999]">Kolam Renang</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/lounge.svg" width={30} height={30} alt="Lobby Lounge" />
                <p className="font-semibold text-[#999999]">Lobby</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 lg:mt-[50px]" >
              <button className="border-2 border-gray-300 text-white text-[13px] px-4 py-2 rounded-[15px] transition duration-300 hover:bg-white hover:text-black">
                <Link href="/listing/amor/1bedroom">Lihat Detail</Link>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[550px]"data-aos= "fade-left">
            <Image
              src="/amor.jpeg"
              width={1500}
              height={500}
              alt="City Night"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover border-[4px] border-[#F9F8EB] rounded-[20px]"
            />
          </div>
        </div>


        <div className="w-full bg-[#3D542F] flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-[50px] lg:px-[100px] gap-y-10 lg:gap-x-[191px] py-10 lg:h-[700px] mt-[100px] mb-[100px]">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[500px] text-center lg:text-left" data-aos= "fade-right">
            <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-white">
              Tower Bella
            </h1>
            <p className="text-[#FFFFFF] font-normal text-[13px] mt-5 mb-10 lg:mb-[90px]">
            Tower Bella menghadirkan hunian mewah berkonsep superblock pertama di Bekasi, terintegrasi dengan pusat perbelanjaan, kuliner, hiburan, dan dua hotel internasional bergengsi. Dengan fasilitas eksklusif seperti infinity pool, luxurious lounge, sky garden, dan smart living system, Tower Bella menawarkan kenyamanan dan prestise dalam satu kawasan strategis. Hanya 300 meter dari tol JAPEK dan 400 meter dari stasiun LRT, Tower Bella adalah pilihan sempurna untuk tempat tinggal modern sekaligus investasi masa depan.
            </p>

            {/* Fasilitas */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Image src="/logo/Gym.svg" width={30} height={30} alt="Gym" />
                <p className="font-semibold text-[#999999]">GYM</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/pool.svg" width={30} height={30} alt="Swimming Pool" />
                <p className="font-semibold text-[#999999]">Kolam Renang</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/lounge.svg" width={30} height={30} alt="Lobby Lounge" />
                <p className="font-semibold text-[#999999]">Lobby</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 lg:mt-[50px]">
              <button className="border-2 border-gray-300 text-white text-[13px] px-4 py-2 rounded-[15px] transition duration-300 hover:bg-white hover:text-black">
                <Link href="/listing/bella/1bedroom">Lihat Detail</Link>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[550px]" data-aos= "fade-left">
            <Image
              src="/tower_bella.svg"
              width={1500}
              height={800}
              alt="City Night"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover border-[4px] border-[#F9F8EB] rounded-[20px]"
            />
          </div>
        </div>

        <div className="w-full bg-[#48265F] flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-[50px] lg:px-[100px] gap-y-10 lg:gap-x-[191px] py-10 lg:h-[700px] mt-[100px] mb-[100px]">
          {/* Text Content */}
          <div className="max-w-full lg:max-w-[500px] text-center lg:text-left" data-aos= "fade-right">
            <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-white">
              Tower Dolce Vita
            </h1>
            <p className="text-[#FFFFFF] font-normal text-[13px] mt-5 mb-10 lg:mb-[90px]">
              Tower Dolce Vita adalah hunian eksklusif di Pakuwon City Bekasi, menawarkan 316 unit apartemen dengan efisiensi tata ruang tinggi — hanya 13 unit per lantai. Dirancang dalam kawasan superblock premium pertama di pusat Kota Bekasi, Dolce Vita terintegrasi langsung dengan Pakuwon Mall, dua hotel internasional, serta fasilitas gaya hidup modern. Tower Dolce Vita menghadirkan kenyamanan, aksesibilitas, dan kualitas hidup yang lebih tinggi, dikembangkan oleh Pakuwon Jati, pengembang superblock terkemuka di Indonesia.
            </p>

            {/* Fasilitas */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center space-x-2">
                <Image src="/logo/Gym.svg" width={30} height={30} alt="Gym" />
                <p className="font-semibold text-[#999999]">GYM</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/pool.svg" width={30} height={30} alt="Swimming Pool" />
                <p className="font-semibold text-[#999999]">Kolam Renang</p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src="/logo/lounge.svg" width={30} height={30} alt="Lobby Lounge" />
                <p className="font-semibold text-[#999999]">Lobby</p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 lg:mt-[50px]">
              <button className="border-2 border-gray-300 text-white text-[13px] px-4 py-2 rounded-[15px] transition duration-300 hover:bg-white hover:text-black">
                <Link href="/listing/dolce/1bedroom">Lihat Detail</Link>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[550px]" data-aos= "fade-left">
            <Image
              src="/tower_dolce.svg"
              width={1500}
              height={800}
              alt="City Night"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover border-[4px] border-[#F9F8EB] rounded-[20px]"
            />
          </div>
        </div>
        <Footer/>

      </div>
    </div>
  );
}
