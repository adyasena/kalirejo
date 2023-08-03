import { useState } from "react";
import { createFetcher } from "../helpers/fetcher";
import { FaXmark } from "react-icons/fa6";

const ModalDelete = ({ visible, onClose, row, setRefreshSignal, table, setShowToast }) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const deleteUmkmHandler = async () => {
    try {
      setIsDeleteLoading(true);

      const fetcher = createFetcher();
      await fetcher.delete("/umkm/" + row._id);

      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.error("Error saat menghapus", error)

    } finally {
      setIsDeleteLoading(false);
    }
  }
  const deleteGaleriHandler = async (id) => {
    try {
      setIsDeleteLoading(true);

      const fetcher = createFetcher();
      await fetcher.delete("/galeri/" + id);

      setRefreshSignal((s) => !s);
      onClose();

    } catch (error) {
      console.error("Error saat menghapus", error)

    } finally {
      setIsDeleteLoading(false);
    }
  }
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-10 text-base">
        <div className={"w-[30%] mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-10 " + (table === "umkm" ? "block" :"hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Hapus Produk
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center w-full">
              Anda yakin ingin menghapus {row.produk}?
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-red-primary hover:text-red rounded-md hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isDeleteLoading ? "cursor-wait bg-grey" : "bg-red hover:bg-black")}
                type="submit"
                onClick={() => deleteUmkmHandler(row._id)}>
                  Hapus
              </button>
            </div>
          </div>
        </div>
        <div className={"w-[30%] mx-auto bg-white p-6 font-poppins rounded-lg shadow-lg relative flex flex-col gap-10 " + (table === "galeri" ? "block" :"hidden")}>
          <div className="flex items-start font-semibold text-lg">
            Hapus Konten
            <button className="ml-auto bg-transparent hover:bg-grey p-1 rounded-lg transform ease duration-300" onClick={onClose}>
              <FaXmark className="scale-125"/>
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center w-full">
              Anda yakin ingin menghapus {row.judul}?
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="text-red-primary hover:text-red rounded-md hover:bg-grey py-2 px-4 ease transition-all duration-300"
                type="button"
                onClick={onClose}>
                  Batal
              </button>
              <button
                className={"py-2 px-4 rounded-md text-white ease transition-all duration-300 " + (isDeleteLoading ? "cursor-wait bg-grey" : "bg-red hover:bg-black")}
                type="submit"
                onClick={() => deleteGaleriHandler(row._id)}>
                  Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalDelete;