import React from "react";

const Footer = () => {
  return (
    // <div className="bg-black h-32 w-screen">
    //   <div className="container mx-auto w-full flex flex-col items-center">
    //     <div className=" w-full h-32 text-white flex flex-col px-10 pt-5 gap-3">
    //       <div className="flex lg:flex-row flex-col justify-between items-center">
    //         <div className="lg:text-start text-center font-semibold">
    //           Desa Kalirejo<br/>
    //           Kecamatan Salaman, Kabupaten Magelang
    //         </div>
    //         <div className="flex flex-row h-10 gap-2">
    //           <a className="p-1 rounded-md bg-[#4267B2] hover:bg-[#35538f] ease transition-all duration-300" href="https://www.facebook.com/">
    //             <img src="https://img.icons8.com/ios-filled/32/ffffff/facebook--v1.png" alt="facebook" className="scale-75"/>
    //           </a>
    //           <a className="p-1 rounded-md bg-[#d6295a] hover:bg-[#ba234e] ease transition-all duration-300" href="https://www.instagram.com/">
    //             <img src="https://img.icons8.com/ios-glyphs/32/ffffff/instagram-new.png" alt="instagram" className="scale-75"/>
    //           </a>
    //           <a className="p-1 rounded-md bg-[#00acee] hover:bg-[#0296cf] ease transition-all duration-300" href="https://twitter.com/">
    //             <img src="https://img.icons8.com/ios-filled/32/ffffff/twitter-squared.png" alt="twitter" className="scale-75"/>
    //           </a>
    //         </div>
    //       </div>
    //       <div className="text-sm text-center">
    //         Departemen Teknik Elektro dan Teknologi Informasi<br/>
    //         Fakultas Teknik Universitas Gadjah Mada 
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer class="relative bg-green pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-green text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
          <a href="https://www.creative-tim.com?ref=njs-profile" class="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
};

export default Footer;