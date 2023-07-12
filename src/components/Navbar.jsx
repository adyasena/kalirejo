import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

  return (
    <div className="navbar">
      <div className={"navbar bg-white "
        + (scroll ? "opacity-100 shadow-md" : "lg:h-24 opacity-0")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "lg:h-24 h-16")}>
        <button className="flex flex-row justify-start items-center h-full"
          onClick={toHome}>
          <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">Kalirejo Lestari</p> 
        </button>
        <div className="flex flex-row gap-12">
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
    </div>
  );
};

export default Navbar;
