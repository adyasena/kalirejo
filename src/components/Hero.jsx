import { useNavigate } from 'react-router-dom';
import { BgHome, Bg, Kering, Logo, Pattern } from "../assets";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Hero = () => {
  const navigate = useNavigate();

  const toPromo = () => {
    navigate('/promo');
  };
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${Bg})`}}>
        <div className="w-full h-full bg-gradient-to-t from-white bg-opacity-100">
          <div className="flex flex-col h-full container mx-auto items-center font-poppins text-green">
            <div className="flex flex-col justify-center items-center mt-36 font-semibold lg:text-4xl text-2xl text-center leading-normal gap-8">
              <img src={Logo} className="lg:w-1/12 w-1/4"/>
              Desa Kalirejo
              <div className="lg:text-xl text-lg font-normal">
                Temukan produk UMKM unggulan<br/>
                dan destinasi wisata terbaik!
              </div>
              <button className="bg-green text-white mt-12 font-normal text-xl py-2 px-6 rounded-md transform duration-300 ease hover:bg-green-dark"
                onClick={handleClickScroll}>
                Telusuri Desa
              </button>
            </div>
          </div>
        </div>
        <div id="section-1"></div>
      </div>
    </>
  );
};

export default Hero;
