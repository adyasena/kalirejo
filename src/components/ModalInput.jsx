import { useRef, useState } from "react";
import { createFetcher } from "../helpers/fetcher";
import { FaXmark } from "react-icons/fa6";

const ModalInput = ({ visible, onClose, setRefreshSignal, table }) => {
  const [isLoading, setIsLoading] = useState(false);

  const produkRef = useRef();
  const deskripsiRef = useRef();
  const gambarUmkmRef = useRef();

  const addUmkmHandler = async () => {
    try {
      setIsLoading(true);
      
      const umkm = {
        produk: produkRef.current.value,
        deskripsi: deskripsiRef.current.value,  
        gambar: gambarRef.current.value,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.post("/umkm", umkm);
      if (!res.data.success) throw new Error(res.data.error);
      
    } 
    catch (error) {
      console.error(error)
    } 
    finally {
      setIsLoading(false);
      setRefreshSignal((s) => !s);
      onClose();
    }
  };

  const penulisRef = useRef();
  const judulRef = useRef();
  const teksRef = useRef();
  const gambarGaleriRef = useRef();

  const addGaleriHandler = async () => {
    try {
      setIsLoading(true);
      
      const galeri = {
        penulis: penulisRef.current.value,
        judul: judulRef.current.value,  
        teks: teksRef.current.value,
        gambar: gambarGaleriRef.current.value,
      }; 

      const fetcher = createFetcher();

      const res = await fetcher.post("/galeri", galeri);
      if (!res.data.success) throw new Error(res.data.error);
    } 
    catch (error) {
      console.error(error)
    } 
    finally {
      setIsLoading(false);
      setRefreshSignal((s) => !s);
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
      <div className={"w-1/2 mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-4 " + (table === "umkm" ? "block" : "hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Tambah Produk
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Produk</label>
                <input ref={produkRef} name="produk" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Deskripsi</label>
                <textarea ref={deskripsiRef} name="deskripsi" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green h-52" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Gambar</label>
                <input ref={gambarUmkmRef} name="gambar" type="text" 
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
                onClick={addUmkmHandler}>
                  Tambah
              </button>
            </div>
          </form>
        </div>
        <div className={"w-1/2 mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-4 " + (table === "galeri" ? "block" : "hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Tambah Konten
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <form className="flex flex-col gap-4" >
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Penulis</label>
                <input ref={penulisRef} name="penulis" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Judul</label>
                <input ref={judulRef} name="judul" type="text" className="py-1 px-2 rounded-md border-black border bg-white focus:outline-green" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Teks</label>
                <textarea ref={teksRef} name="teks" className="py-1 px-2 whitespace-pre-line rounded-md border-black border bg-white focus:outline-green h-52" />
              </div>
              <div className="flex flex-col justify-start w-full gap-1">
                <label className="text-sm">Gambar</label>
                <input ref={gambarGaleriRef} name="gambar" type="text" 
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
                onClick={addGaleriHandler}>
                  Tambah
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalInput;