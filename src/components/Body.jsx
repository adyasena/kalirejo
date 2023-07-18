import React from "react";
import { Bg, BukitGG, Logo } from "../assets";
import { FaCalendarDays, FaMapLocationDot, FaTicket, FaTents } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Body = () => {
  // const navigate = useNavigate();

  // const toPromo = () => {
  //   navigate('/promo');
  // };
  
  return (
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
  );
};

export default Body;