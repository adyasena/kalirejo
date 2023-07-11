import { useNavigate } from 'react-router-dom';
import { BgHome } from "../assets";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Hero = () => {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${BgHome})`}}>
      <div className="w-full h-screen bg-black bg-opacity-60">
        <div className="flex flex-col h-full container mx-auto items-center font-poppins text-white">
          <div className="flex flex-col justify-center items-center mt-32 font-semibold lg:text-4xl text-2xl text-center leading-normal gap-6">
            <img className="w-1/4" />
            Desa Kalirejo
            <div className="text-xl font-normal">
              Temukan produk UMKM unggulan<br/>
              dan destinasi wisata terbaik!
            </div>
            <Button colorScheme='green' onClick={toPromo}>
              Telusuri Desa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
