import React from "react";
import { Bg, BukitGG } from "../assets";

const Body = () => {
  // const navigate = useNavigate();

  // const toPromo = () => {
  //   navigate('/promo');
  // };

  return (
    <div className="w-full h-screen bg-white">
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col text-4xl font-bold gap-4">
            Bukit GG
            <img src={BukitGG} className="rounded-lg"/>
          </div>
          <div className="flex flex-col text-4xl font-bold gap-4">
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