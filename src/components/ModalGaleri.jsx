import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const ModalGaleri = ({ visible, onClose, galeri }) => {
  if (!visible) return null;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="justify-center items-center text-black flex fixed inset-0 z-10 text-base text-start">
        <div className="w-4/5 h-[90vh] mx-auto bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start">
            <div className="flex flex-col">
              <a className="font-semibold text-lg">{galeri.judul}</a>
              <a>Penulis: {galeri.penulis}</a>
            </div>
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <div className="overflow-y-scroll flex flex-col gap-4 pr-2">
            <img src={galeri.gambar} className="w-full h-5/6 object-cover rounded-lg" />
            <div className="w-full flex flex-col gap-4">
              {galeri.teks.split('\n').map(function(item, key) {
                return (
                  <span key={key}>
                    {item}
                    <br/>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalGaleri;