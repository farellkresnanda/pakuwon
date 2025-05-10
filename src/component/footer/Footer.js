const Footer = () => {
    return (
      <footer className="bg-[#2D2C2C] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="w-full h-[170px] bg-gray-700 mt-4 mb-2">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0596352167354!2d106.98482098250854!3d-6.25587437757268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ddb5eabe029%3A0xc61ce0e879f4e86b!2sPakuwon%20Mall%20Bekasi!5e0!3m2!1sen!2sus!4v1743291280031!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm">
              Jl. Raya Pekayon, RT.001/RW.002, Pekayon Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17148
            </p>
          </div>
  
          {/* Links Section */}
          <div className="flex space-x-[90px] pl-[50px]">
            <div>
              <h3 className="text-lg font-semibold w-[70px]">Home</h3>
              <ul className="text-gray-400 text-sm space-y-2 mt-2">
                <li>
                  <a href="http://localhost:3000/home#offers" className="hover:text-white">
                    Offers
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/home#why" className="hover:text-white">
                    why
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold w-[90px]">Listing</h3>
              <ul className="text-gray-400 text-sm space-y-2 mt-2">
                <li>
                  <a href="http://localhost:3000/listing/amor/1bedroom" className="hover:text-white">
                    Amor
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/listing/bella/1bedroom" className="hover:text-white">
                    Bella
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/listing/dolce/1bedroom" className="hover:text-white">
                    Dolce Vita
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold w-[90px]">About Us</h3>
              <ul className="text-gray-400 text-sm space-y-2 mt-2">
                <li>
                  <a href="http://localhost:3000/about#pakuwon" className="hover:text-white">
                    Pakuwon
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/about#pakuwon_bekasi" className="hover:text-white">
                    Pakuwon Bekasi
                  </a>
                </li>
              </ul>
            </div>
          </div>

  
          {/* Contact Section */}
          <div className="text-gray-400 text-sm space-y-2 pl-[150px]">
            <p><span className="font-semibold text-white">Mobile:</span> 0213456781</p>
            <p><span className="font-semibold text-white">Phone:</span> 08123456781</p>
            <p><span className="font-semibold text-white">Email:</span> fastdf@gmail.com</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  