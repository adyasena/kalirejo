import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCalendarDays, FaMapLocationDot, FaTicket, FaTents, FaBars } from "react-icons/fa6";
import { Bg, BukitGG, Logo } from "../assets";


export default function Homepage() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  const toHome = () => {
    navigate('/');
  };
  const toWisata = () => {
    navigate('/');
  };
  const toUMKM = () => {
    navigate('/');
  };
  const toGaleri = () => {
    navigate('/');
  };
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
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          onClick={() => {scrollToTop(); toHome()}}>
          <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">Kalirejo Lestari</p> 
        </button>
        <button className="p-1 rounded lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}>
            <FaBars />
        </button>
        <div className="lg:flex flex-row hidden gap-12">
          <button className="hover:underline"
            onClick={() => {scrollToTop(); toHome()}}>
            Beranda
          </button>
          <button className="hover:underline"
            onClick={handleClickScroll}>
            Wisata
          </button>
          <a className="hover:underline"
            href="#wisata">
            UMKM
          </a>
          <button className="hover:underline"
            onClick={toGaleri}>
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
          onClick={() => {setIsOpen((prev) => !prev); scrollToTop(); toHome()}}>
            Beranda
        </button>
        <button className="hover:bg-grey py-2"
          onClick={() => {setIsOpen((prev) => !prev); toWisata()}}>
            Wisata
        </button>
        <button className="hover:bg-grey py-2"
          onClick={() => {setIsOpen((prev) => !prev); toUMKM()}}>
            UMKM
        </button>
        <button className="hover:bg-grey py-2"
          onClick={() => {setIsOpen((prev) => !prev); toGaleri()}}>
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
                  Telusuri<br/>Desa Kalirejo
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Temukan destinasi wisata terbaik dan produk UMKM unggulan di Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa Tengah
                </p>
                <button className="bg-green-dark text-white font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                  onClick={handleClickScroll}>
                    Telusuri Sekarang
                </button>
                <div className="lg:h-2"></div>
                
              </div>
              <div id="section-1" className="pb-10 lg:pb-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="wisata" className="bg-white">
      <div className="flex flex-col container mx-auto font-poppins items-center lg:text-center">
        <div className="flex flex-col gap-16 mt-10 lg:mt-0 lg:mx-10">
          <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6">
            Bukit GG
            <div className="flex flex-row w-full justify-between gap-6">
              <div className="grid grid-cols-2 grid-rows-6 w-3/4 max-h-[30rem] gap-2">
                <img src={BukitGG} className="row-span-3 object-cover w-full h-full"/>
                <img src={BukitGG} className="row-span-2 object-cover w-full h-full"/>
                <img src={BukitGG} className="row-span-2 object-cover w-full h-full"/>
                <img src={BukitGG} className="row-span-3 object-cover w-full h-full"/>
                <img src={BukitGG} className="row-span-2 object-cover w-full h-full"/>
              </div>
              <div className="flex flex-col text-lg font-normal text-start w-1/4 gap-4">
                <a className="font-bold text-2xl">Grhadika Garden</a>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 items-center">
                    <FaMapLocationDot/> Lokasi
                  </div>
                  <a>Dusun Kobar, Desa Kalirejo</a>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 items-center">
                    <FaTicket/> Harga Tiket Masuk
                  </div>
                  <a>Rp2.000,00</a>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 items-center">
                    <FaCalendarDays/> Jam Buka
                  </div>
                  <a>Senin - Jumat: 08:00 - 18:00<br/>
                    Sabtu - Minggu: 06:00 - 20:00<br/>
                  </a>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 items-center">
                    <FaTents/> Fasilitas
                  </div>
                  <a>Spot Foto<br/>
                    Agro Learning<br/>
                    Tempat Makan<br/>
                    Toilet<br/>
                  </a>
                </div>
              </div>
            </div>
            
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15818.456683504251!2d110.1320134!3d-7.6168929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a93f9e33f44e5%3A0xf886fa8199c6a60!2sBukit%20%22GG%22%20(Grhadika%20Garden)!5e0!3m2!1sen!2sid!4v1689642859651!5m2!1sen!2sid" 
            width={screen}
            height="300" 
            style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          
          <div className="flex flex-col text-4xl font-bold gap-4 lg:gap-6">
            nanti lagi
            <div className="flex flex-col gap-4"> 

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};