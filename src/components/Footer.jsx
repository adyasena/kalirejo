import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto w-full flex flex-col items-center bottom-0">
        <div className=" w-full h-32 text-white flex flex-col px-10 pt-5 gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col font-semibold">
              Kelompok Kecil 11<br/>
              IAI 2022/2023
            </div>
            <div className="flex flex-row h-10 gap-2">
              <a className="p-1 rounded-md bg-[#4267B2] hover:bg-[#35538f] ease transition-all duration-300" href="https://www.facebook.com/">
                <img src="https://img.icons8.com/ios-filled/32/ffffff/facebook--v1.png" alt="facebook" className="scale-75"/>
              </a>
              <a className="p-1 rounded-md bg-[#d6295a] hover:bg-[#ba234e] ease transition-all duration-300" href="https://www.instagram.com/">
                <img src="https://img.icons8.com/ios-glyphs/32/ffffff/instagram-new.png" alt="instagram" className="scale-75"/>
              </a>
              <a className="p-1 rounded-md bg-[#00acee] hover:bg-[#0296cf] ease transition-all duration-300" href="https://twitter.com/">
                <img src="https://img.icons8.com/ios-filled/32/ffffff/twitter-squared.png" alt="twitter" className="scale-75"/>
              </a>
            </div>
          </div>
          <div className="text-sm text-center">
            Departemen Teknik Elektro dan Teknologi Informasi<br/>
            Fakultas Teknik Universitas Gadjah Mada 
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;