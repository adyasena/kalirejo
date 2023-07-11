import { useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  return (
    <div className="navbar">
      <div className={"navbar bg-green-primary "
        + (scroll ? "opacity-100" : "h-24 opacity-0")}>
      </div>
      <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-black " +
        "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "h-24")}>
        <a href="/" className="flex flex-row justify-start items-center h-full text-white">
          <img className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
          <p className="transform">Kalirejo</p> 
        </a>
      </div>
    </div>
  );
};

export default Navbar;
