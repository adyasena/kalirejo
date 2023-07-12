import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaBars
} from "react-icons/fa"
import { Logo } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar">
      <div className={"navbar bg-white transform duration-300 ease "
        + (scroll ? "opacity-100 " : "lg:h-24 lg:opacity-0 ") + (isOpen ? "" : "shadow-md")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "lg:h-24 h-16")}>
        <button className="flex flex-row justify-start items-center h-full"
          onClick={toHome}>
          <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">Kalirejo Lestari</p> 
        </button>
        <button className="p-1 rounded"
          onClick={() => setIsOpen((prev) => !prev)}>
            <FaBars />
        </button>
        <div className="lg:flex flex-row hidden gap-12">
          <button className="hover:underline"
            onClick={toHome}>
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
      {isOpen &&
        <div className="w-screen bg-white pb-2 font-bold text-green-dark transform duration-300 ease flex flex-col absolute shadow-md">
          <button className="hover:underline py-2"
            onClick={toHome}>
              Beranda
          </button>
          <button className="hover:underline py-2"
            onClick={toWisata}>
            Wisata
          </button>
          <button className="hover:underline py-2"
            onClick={toUMKM}>
              UMKM
          </button>
          <button className="hover:underline py-2"
            onClick={toGaleri}>
              Galeri
          </button>
          <button className="hover:underline py-2"
            onClick={scrollToBottom}>
              Kontak
          </button>
        </div>
      }
    </div>
  );
};

export default Navbar;
