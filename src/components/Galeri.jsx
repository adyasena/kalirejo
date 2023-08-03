import React, { useState, useMemo, useEffect } from "react";
import ModalGaleri from "./ModalGaleri";
import { useFetch } from "../helpers/useFetch";

const Galeri = () => {
  const [showModalGaleri, setShowModalGaleri] = useState(false);
  const [id, setId] = useState();
  const {data: galeriData} = useFetch("/galeri");
  const [galeri, setGaleri] = useState([]);
  
  useMemo(() => {
    if (!galeriData?.data?.data) return;
    setGaleri(galeriData.data.data.galeri);
  }, [galeriData]);

  const handleOnClose = () => {
    setShowModalGaleri(false);
  };

  useEffect(() => {
    document.body.style.overflow = showModalGaleri ? "hidden" : "unset";
  }, [showModalGaleri]);

  return (
    <>
      <div className="flex flex-col text-4xl font-bold gap-4 pt-4 pb-32">
        Galeri
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {galeri.map((item) => (
            <div key={item._id} className="flex flex-col items-center gap-2 h-60">
              <button className="h-full w-full group relative rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md" 
                onClick={() => {setId(item); setShowModalGaleri(true)}}>
                <img src={item.gambar} className="rounded-lg h-full w-full object-cover object-top"/>
                <div className="bg-black h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg group-hover:opacity-50 opacity-0 transform ease duration-300"></div>
                <div className="absolute w-full text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center text-2xl font-bold opacity-0 group-hover:opacity-100 transform ease duration-300 p-2">
                  {item.judul}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ModalGaleri
        onClose={handleOnClose}
        visible={showModalGaleri}
        galeri={id}
      />
    </>
  );
};

export default Galeri;
