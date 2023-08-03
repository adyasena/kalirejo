import React, { useState } from "react";
import { FaBars, FaFacebookF, FaYoutube, FaHouse } from "react-icons/fa6";
import { Bg, Logo } from "../assets";
import Wisata from "../components/Wisata";
import Umkm from "../components/Umkm";
import Galeri from "../components/Galeri";

export default function Homepage() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <>
      <div className="navbar">
        <div className={"navbar bg-white transform duration-300 ease "
          + (scroll ? "opacity-100 " : "lg:h-24 opacity-0 ") + (!isOpen ? "shadow-md" : "opacity-100")}>
        </div>
        <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
          "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "lg:h-24 h-16")}>
          <button className="flex flex-row justify-start items-center h-full"
            onClick={() => {scrollToTop()}}>
            <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
            <p className="transform">Inspirasi Kalirejo</p> 
          </button>
          <button className="p-1 rounded lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}>
              <FaBars />
          </button>
          <div className="lg:flex flex-row hidden gap-12">
            <button className="hover:underline"
              onClick={() => {scrollToTop()}}>
              Beranda
            </button>
            <button className="hover:underline"
              onClick={() => {scrollToSection("wisata")}}>
              Wisata
            </button>
            <button className="hover:underline"
              onClick={() => {scrollToSection("umkm")}}>
              UMKM
            </button>
            <button className="hover:underline"
              onClick={() => {scrollToSection("galeri")}}>
              Galeri
            </button>
            <button className="hover:underline"
              onClick={scrollToBottom}>
              Kontak
            </button>
          </div>
        </div>
        <div className={"w-screen bg-white pb-2 text-green-dark transform duration-300 ease flex flex-col lg:hidden absolute shadow-md "
          + (!isOpen ? "opacity-0 pointer-events-none" : "visible opacity-100")}>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollToTop()}}>
              Beranda
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollToSection("wisata")}}>
              Wisata
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollToSection("umkm")}}>
              UMKM
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollToSection("galeri")}}>
              Galeri
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollToBottom()}}>
              Kontak
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Bg})`}}>
        <div className="w-full h-full bg-gradient-to-t from-white">
          <div className="flex flex-col h-full container mx-auto items-center font-poppins text-green-dark">
            <div className="flex flex-col h-full items-center justify-between lg:justify-center pt-36 lg:pt-0 font-semibold lg:text-center leading-normal gap-8">
              <div className="hidden lg:flex h-20"></div>
              <img src={Logo} className="lg:w-1/12 w-1/3 lg:my-0 my-auto"/>
              <div className="flex flex-col gap-8 lg:items-center">
                <p className="lg:text-4xl text-5xl font-bold">
                  Telusuri<br/>Desa Inspirasi Kalirejo
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Temukan destinasi wisata terbaik dan produk UMKM unggulan di Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa Tengah
                </p>
                <button className="bg-green-dark text-white font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                  onClick={() => {scrollToSection("wisata")}}>
                    Telusuri Sekarang
                </button>
                <div className="lg:h-2"></div>
              </div>
              <div id="wisata" className="pb-10 lg:pb-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col container mx-auto font-poppins items-center text-center">
        <div className="flex flex-col mt-10 lg:mt-0 lg:mx-10">
          <Wisata/>
          <Umkm/>
          <Galeri/>
        </div>
      </div>
      <footer className="relative bg-green-dark pt-8 pb-6 text-white">
        <div className="container mx-auto lg:px-10">
          <div className="flex lg:flex-row flex-col justify-between gap-4 lg:gap-0">
            <div className="flex flex-col gap-2 lg:w-6/12 px-4 text-center lg:text-start">
              <h4 className="text-xl font-bold">Desa Inspirasi Kalirejo</h4>
              <h5 className="text-lg mb-2">
                Alamat : Jl. Kyai Sampir No. 5 Kalirejo Salaman Magelang<br/>
                Kode Pos : 56162<br/>
                Telp : 081391021310<br/>
                Email : kalirejo03salaman@gmail.com<br/>
              </h5>
            </div>
            <div className="lg:w-1/2 flex flex-row justify-center lg:justify-end px-4 gap-4">
              <button className="h-10 w-10 bg-blue rounded-full text-white" onClick={() => openInNewTab("https://www.facebook.com/desainspirasixrejo")}>
                <FaFacebookF className="w-full h-1/2"/>
              </button>
              <button className="h-10 w-10 bg-red rounded-full text-white" onClick={() => openInNewTab("https://www.youtube.com/channel/UCFkrk-5iIpSFVQ8tDXz97zA")}>
                <FaYoutube className="w-full h-1/2"/>
              </button>
              <button className="h-10 w-10 bg-green rounded-full text-white" onClick={() => openInNewTab("https://www.kalirejo-magelang.desa.id/First/")}>
                <FaHouse className="w-full h-1/2"/>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold pt-6 lg:py-1">
                KKN-PPM UGM Periode II 2023
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};