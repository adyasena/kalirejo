import { useNavigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
import { FaCalendarDays, FaMapLocationDot, FaTicket, FaTents, FaBars } from "react-icons/fa6";
import { Bg, GG1, GG2, GG3, GG4, GG5, Logo } from "../assets";
import { useFetch } from "../helpers/useFetch";
import ModalUmkm from "../components/ModalUmkm";
import Body from "../components/Body";

export default function Homepage() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showModalUmkm, setShowModalUmkm] = useState(false);
  const [id, setId] = useState();

  const {data: wisataData} = useFetch("/wisata");
  const {data: umkmData} = useFetch("/umkm");

  const [wisata, setWisata] = useState([]);
  useMemo(() => {
    if (!wisataData?.data?.data) return;
    setWisata(wisataData.data.data.wisata);
  }, [wisataData]);

  const [umkm, setUmkm] = useState([]);
  useMemo(() => {
    if (!umkmData?.data?.data) return;
    setUmkm(umkmData.data.data.umkm);
  }, [umkmData]);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  const handleOnClose = () => {
    setShowModalUmkm(false);
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
  
  const scrollWisata = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollUMKM = () => {
    const element = document.getElementById('section-2');
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
              onClick={scrollWisata}>
              Wisata
            </button>
            <button className="hover:underline"
              onClick={scrollUMKM}>
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
            onClick={() => {setIsOpen((prev) => !prev); scrollToTop()}}>
              Beranda
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollWisata()}}>
              Wisata
          </button>
          <button className="hover:bg-grey py-2"
            onClick={() => {setIsOpen((prev) => !prev); scrollUMKM()}}>
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
                  Telusuri<br/>Desa Inspirasi Kalirejo
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Temukan destinasi wisata terbaik dan produk UMKM unggulan di Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa Tengah
                </p>
                <button className="bg-green-dark text-white font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                  onClick={scrollWisata}>
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
            <Body/>
            
            <div className="flex flex-col text-4xl font-bold gap-4 pt-4 pb-24">
              Produk Unggulan
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                  {umkm.map((item) => (
                    <div key={item._id} className="flex flex-col items-center gap-2 h-52">
                      <button className="h-4/5 w-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md" 
                        onClick={() => {setId(item); setShowModalUmkm(true)}}>
                        <img src={item.gambar} className="rounded-lg h-full w-full object-cover"
                          />
                      </button>
                      <div className="flex flex-col items-center text-2xl">
                        {item.produk}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative bg-green-dark pt-8 pb-6 text-white">
        <div class="container mx-auto px-10">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col gap-2 w-1/2 lg:w-6/12 px-4">
              <h4 class="text-xl font-bold">Desa Inspirasi Kalirejo</h4>
              <h5 class="text-lg mb-2">
                Alamat : Jl. Kyai Sampir No. 5 Kalirejo Salaman Magelang<br/>
                Kode Pos : 56162<br/>
                Telp : 081391021310<br/>
                Email : kalirejo03salaman@gmail.com<br/>
              </h5>
            </div>
            <div class="w-1/2 flex flex-row justify-end px-4 gap-4">
              <button className="h-10 w-10 bg-white rounded-full" onClick={() => openInNewTab("https://www.facebook.com/desainspirasixrejo")}>
                fb
              </button>
              <button className="h-10 w-10 bg-white rounded-full" onClick={() => openInNewTab("https://www.youtube.com/channel/UCFkrk-5iIpSFVQ8tDXz97zA")}>
                yt
              </button>
              <button className="h-10 w-10 bg-white rounded-full" onClick={() => openInNewTab("https://www.kalirejo-magelang.desa.id/First/")}>
                sid
              </button>
            </div>
          </div>
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Desa Inspirasi Kalirejo
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ModalUmkm
        onClose={handleOnClose}
        visible={showModalUmkm}
        umkm={id}
      />
    </>
  );
};