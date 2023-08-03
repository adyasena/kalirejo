import { useRef, useState } from "react";
import { createFetcher } from "../helpers/fetcher";
import { FaXmark } from "react-icons/fa6";

const ModalEdit = ({ visible, onClose, row, setRefreshSignal, table }) => {
  const [isLoading, setIsLoading] = useState(false);

  const namaRef = useRef();
  const lokasiRef = useRef();
  const htmRef = useRef();
  const jamRef = useRef();
  const fasilitasRef = useRef();

  const editWisataHandler = async () => {
    try {
      setIsLoading(true);

      const wisata = {
        nama: namaRef.current.value,
        lokasi: lokasiRef.current.value,  
        htm: htmRef.current.value,
        jam: jamRef.current.value,
        fasilitas: fasilitasRef.current.value,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.put("/wisata/" + row._id, wisata);
      if (!res.data.success) throw new Error(res.data.error);
      
      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
      setRefreshSignal((s) => !s);
      onClose();
    }
  };

  const produkRef = useRef();
  const deskripsiRef = useRef();
  const gambarUmkmRef = useRef();

  const editUmkmHandler = async () => {
    try {
      setIsLoading(true);

      const umkm = {
        produk: produkRef.current.value,
        deskripsi: deskripsiRef.current.value,  
        gambar: gambarUmkmRef.current.value,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.put("/umkm/" + row._id, umkm);
      if (!res.data.success) throw new Error(res.data.error);
      
      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
      setRefreshSignal((s) => !s);
    }
  };

  const penulisRef = useRef();
  const judulRef = useRef();
  const teksRef = useRef();
  const gambarGaleriRef = useRef();

  const editGaleriHandler = async () => {
    try {
      setIsLoading(true);

      const galeri = {
        penulis: penulisRef.current.value,
        judul: judulRef.current.value,  
        teks: teksRef.current.value,
        gambar: gambarGaleriRef.current.value,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.put("/galeri/" + row._id, galeri);
      if (!res.data.success) throw new Error(res.data.error);
      
      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false);
      setRefreshSignal((s) => !s);
    }
  };
  
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
      <div className={"w-1/2 mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-4 " + (table === "wisata" ? "block" : "hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Ubah Wisata
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Nama</label>
                <input ref={namaRef} name="nama" defaultValue={row.nama} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Lokasi</label>
                <input ref={lokasiRef} name="lokasi" defaultValue={row.lokasi} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Harga Tiket</label>
                <input ref={htmRef} name="htm" defaultValue={row.htm} type="number" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Jam Buka</label>
                <input ref={jamRef} name="jam" defaultValue={row.jam} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Fasilitas</label>
                <textarea ref={fasilitasRef} name="fasilitas" defaultValue={row.fasilitas} className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green h-24" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-green-dark rounded-md hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-green-dark bg-green")}
                type="submit"
                disabled={isLoading}
                onClick={editWisataHandler}>
                  Ubah
              </button>
            </div>
          </form>
        </div>
        <div className={"w-1/2 mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-4 " + (table === "umkm" ? "block" : "hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Ubah Produk
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Produk</label>
                <input ref={produkRef} name="produk" defaultValue={row.produk} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Deskripsi</label>
                <textarea ref={deskripsiRef} name="deskripsi" defaultValue={row.deskripsi} className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green h-52" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Gambar</label>
                <input ref={gambarUmkmRef} defaultValue={row.gambar} name="gambar" type="text" 
                  className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-green-dark rounded-md hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-green-dark bg-green")}
                type="submit"
                disabled={isLoading}
                onClick={editUmkmHandler}>
                  Ubah
              </button>
            </div>
          </form>
        </div>
        <div className={"w-1/2 mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-4 " + (table === "galeri" ? "block" : "hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Ubah Konten
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Penulis</label>
                <input ref={penulisRef} name="penulis" defaultValue={row.penulis} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Judul</label>
                <input ref={judulRef} name="judul" defaultValue={row.judul} type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Teks</label>
                <textarea ref={teksRef} name="teks" defaultValue={row.teks} className="py-1 px-2 whitespace-pre-line rounded-md border-black border bg-white focus:outline-green h-52" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Gambar</label>
                <input ref={gambarGaleriRef} defaultValue={row.gambar} name="gambar" type="text" 
                  className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-green-dark rounded-md hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isLoading ? "cursor-wait bg-grey" : "hover:bg-green-dark bg-green")}
                type="submit"
                disabled={isLoading}
                onClick={editGaleriHandler}>
                  Ubah
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalEdit;