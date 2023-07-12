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

  return (
    <div className="navbar">
      <div className={"navbar bg-white "
        + (scroll ? "opacity-100 shadow-md" : "h-24 opacity-0")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "h-24")}>
        <button className="flex flex-row justify-start items-center h-full"
          onClick={toHome}>
          <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">Kalirejo Lestari</p> 
        </button>
      </div>
    </div>
  );
};

export default Navbar;
