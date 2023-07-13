import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaBars
} from "react-icons/fa"
import { Logo } from "../assets";

const Navbar = () => {
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
  

  return (
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
            onClick={toWisata}>
            Wisata
          </button>
          <button className="hover:underline"
            onClick={toUMKM}>
            UMKM
          </button>
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
  );
};

export default Navbar;
