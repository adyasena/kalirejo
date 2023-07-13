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
            <div className="flex flex-col h-full items-center justify-between lg:justify-center mt-36 lg:mt-0 font-semibold lg:text-center leading-normal gap-8">
              <img src={Logo} className="lg:w-1/12 w-1/3 lg:my-0 my-auto"/>
              <div className="flex flex-col gap-8 lg:items-center">
                <p className="lg:text-4xl text-5xl font-bold">
                  Telusuri<br/>Desa Kalirejo
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Temukan destinasi wisata terbaik dan produk UMKM unggulan di Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa Tengah
                </p>
                <button className="bg-green-dark text-white mb-32 lg:mb-0 font-normal lg:text-xl text-lg py-2 px-6 rounded-lg transform duration-300 ease lg:hover:bg-black"
                  onClick={handleClickScroll}>
                    Telusuri Sekarang
                </button>
              </div>              
            </div>
          </div>
        </div>
        <div id="section-1"></div>
      </div>
    </>
  );
};

export default Hero;
