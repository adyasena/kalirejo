import { useNavigate } from 'react-router-dom';
import { Bg, Logo } from "../assets";
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
        <div className="w-full h-full bg-gradient-to-t from-white">
          <div className="flex flex-col h-full container mx-auto items-center font-poppins text-green-dark">
            <div className="flex flex-col justify-center items-center mt-36 font-semibold lg:text-4xl text-2xl text-center leading-normal gap-8">
              <img src={Logo} className="lg:w-1/12 w-1/4"/>
              <p className="lg:text-4xl text-lg font-bold">
                Temukan destinasi wisata terbaik<br/>
                dan produk UMKM unggulan
              </p>
              <p className="lg:text-xl font-normal">
                Desa Kalirejo<br/>Salaman, Magelang, Jawa Tengah
              </p>
              <button className="bg-green-dark text-white mt-12 font-normal text-xl py-2 px-6 rounded-md transform duration-300 ease lg:hover:bg-black"
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
