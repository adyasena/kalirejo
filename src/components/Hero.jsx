import { useNavigate } from 'react-router-dom';
import { BgHome, BgHome2, Kering, Logo, Pattern } from "../assets";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Hero = () => {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Kering})`}}>
      <div className="w-full h-screen bg-black bg-opacity-50">
        <div className="flex flex-col h-full container mx-auto items-center font-poppins text-white">
          <div className="flex flex-col justify-center items-center mt-36 font-semibold lg:text-4xl text-2xl text-center leading-normal gap-8">
            <img src={Logo} className="w-1/12"/>
            Desa Kalirejo
            <div className="lg:text-xl text-lg font-normal">
              Temukan produk UMKM unggulan<br/>
              dan destinasi wisata terbaik!
            </div>
            <button className="bg-green text-white mt-12 font-normal text-xl py-2 px-6 rounded-md transform duration-300 ease hover:bg-green-dark">
              Lihat Agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
