import { FaXmark } from "react-icons/fa6";

const ModalUmkm = ({ visible, onClose, umkm }) => {
  if (!visible) return null;

  return (
    <>
      <div className="justify-center items-center text-black flex fixed inset-0 z-10 text-base">
        <div className="w-1/2 mx-auto bg-white p-6 rounded-lg shadow-lg relative flex flex-col gap-4">
          <div className="flex items-start font-semibold text-lg">
            {umkm.produk}
            <button className="ml-auto bg-transparent" onClick={onClose}>
              <FaXmark/>
            </button>
          </div>
          <img src={umkm.gambar} className="w-full h-72 object-cover rounded-lg" />
          <div className="w-full flex flex-col gap-4">
            {umkm.deskripsi}
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-[1] bg-black" id="container"></div>
    </>
  )
}

export default ModalUmkm;