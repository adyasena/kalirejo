import React, { useState, useMemo } from "react";
import ModalUmkm from "./ModalUmkm";
import { useFetch } from "../helpers/useFetch";

const Umkm = () => {
  const [showModalUmkm, setShowModalUmkm] = useState(false);
  const [id, setId] = useState();
  const {data: umkmData} = useFetch("/umkm");
  const [umkm, setUmkm] = useState([]);
  
  useMemo(() => {
    if (!umkmData?.data?.data) return;
    setUmkm(umkmData.data.data.umkm);
  }, [umkmData]);

  const handleOnClose = () => {
    setShowModalUmkm(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-4xl font-bold gap-4 pt-4">
        UMKM Unggulan
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {umkm.map((item) => (
            <div key={item._id} className="flex flex-col items-center gap-2 h-52">
              <button className="h-4/5 w-full rounded-lg transform ease duration-300 hover:scale-[1.02] hover:shadow-md" 
                onClick={() => {setId(item); setShowModalUmkm(true)}}>
                <img loading="lazy" src={item.gambar} className="rounded-lg h-full w-full object-cover"/>
              </button>
              <div className="flex flex-col items-center text-2xl">
                {item.produk}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="galeri" className="h-16"></div>
      <ModalUmkm
        onClose={handleOnClose}
        visible={showModalUmkm}
        umkm={id}
      />
    </div>
  );
};

export default Umkm;
