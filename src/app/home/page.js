import Navbar from '@/component/navbar/Navbar';
import Image from 'next/image';
import Carousel from '../../component/carousel/Carousel';
import FeatureCards from '@/component/featurecard/FeatureCards';
import Facility from '@/component/featurecard/Facility';
import PromoCards from '@/component/featurecard/PromoCards';
import Footer from '@/component/footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='bg-[#F9F8EB] font-poppins'>
        <div data-aos="fade-up" >        
          <Carousel/>
        </div>
        <div className='flex items-center justify-center pt-[100px] pb-[100px] px-4'>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1230px] w-full -mb-[50px]' id="why">
            
            <div data-aos="fade-right">
              <h1 className="text-[28px] sm:text-[36px] md:text-[43px] font-bold text-black max-w-full md:max-w-[450px] text-center md:text-left">
                Kenapa Pilih <span className="text-[#B97E7D]">Pakuwon Bekasi</span>?
              </h1>
            </div>

            <div data-aos="fade-left">
              <p className="text-black text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-full md:max-w-[528px] text-center md:text-right">
                Pakuwon Bekasi menawarkan hunian modern dengan lokasi strategis, akses mudah, dan fasilitas lengkap. Dikelilingi pusat perbelanjaan, sekolah, serta transportasi LRT dan tol, menjadikannya pilihan ideal untuk kenyamanan dan investasi.
              </p>
            </div>

          </section>
        </div>


        <div data-aos="fade-left">
        <FeatureCards/>
        </div>

        <div>
          <Facility/>
        </div>

        <section id="offers">
          <div className='flex items-center justify-center pt-[120px] text-center'>
            <h1 className="text-[43px] font-semibold text-black max-w-[450px]">
              PROMO<span className="text-[#B97E7D]"> SPESIAL</span>
            </h1>
          </div>
          <div className='flex items-center justify-center pt-[10px] text-center'>
            <span className="text-[16px] font-light text-black max-w-[750px]">
            Nikmati berbagai penawaran spesial mulai dari diskon hingga promo eksklusif untuk momen istimewa Anda. Temukan kenyamanan, kemudahan, dan kemewahan dalam satu tempat!
            </span>
          </div>
        </section>

        <div className='pb-[80px]' >
          <PromoCards/>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
