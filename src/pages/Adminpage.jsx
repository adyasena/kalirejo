import { useState, useMemo } from "react";
import TableUmkm from "../components/TableUmkm";
import ModalEditUmkm from "../components/ModalEditUmkm";
import ModalDeleteUmkm from "../components/ModalDeleteUmkm";
import { useFetch } from "../helpers/useFetch";
import { Logo } from "../assets";

export default function Adminpage() {
  const [refreshSignal, setRefreshSignal] = useState(false);
  const [id, setId] = useState();
  const [showModalEditUmkm, setShowModalEditUmkm] = useState(false);
  const [showModalDeleteUmkm, setShowModalDeleteUmkm] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [openTab, setOpenTab] = useState(1);

  const changeClass = () => {
    if (window.scrollY >= 180) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener('scroll', changeClass);

  const handleOnClose = () => {
    setShowModalEditUmkm(false);
    setShowModalDeleteUmkm(false);
  };

  const {data: umkmData} = useFetch("/umkm", refreshSignal);
  const [umkm, setUmkm] = useState([]);
  
  useMemo(() => {
    if (!umkmData?.data?.data) return;
    setUmkm(umkmData.data.data.umkm);
  }, [umkmData]);
  
  const columnsUmkm = useMemo(
    () => [
      {
        Header: 'No',
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        width: 20,
      },
      {
        Header: "Produk",
        accessor: "produk",
        width: 50,
      },
      {
        Header: "Deskripsi",
        accessor: "deskripsi",
        width: 200,
      },
      {
        Header: "Foto",
        accessor: "gambar",
        Cell: ({value}) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img src={value} className="h-52 py-1" />
            </div>
          )
        },
        width: 200,
      },
      {
        Header: "Action",
        accessor: umkm => {
          let id =(umkm._id);
          return ( 
            <div className="flex flex-col items-center gap-2 px-1">
              <button onClick={() => {setId(umkm); setShowModalEditUmkm(true);}} 
                className="rounded-md p-2 bg-blue hover:bg-black text-white w-full">
                  Ubah
              </button>
              <button onClick={() => {setId(id); setShowModalDeleteUmkm(true)}} 
                className="rounded-md p-2 bg-red hover:bg-black text-white w-full">
                  Hapus
              </button>
            </div>
          )
        },
        width: 40,
      }
    ], []
  );

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="navbar">
        <div className={"navbar bg-white shadow-md transform duration-300 ease "
          + (scroll ? "opacity-100 " : "lg:h-24")}>
        </div>
        <div className={"z-[1] font-poppins sticky flex flex-row container mx-auto lg:px-8 text-center items-center text-lg font-semibold text-green-dark " +
          "justify-between transform duration-300 ease overflow-hidden " + (scroll ? "h-16" : "lg:h-24 h-16")}>
          <button className="flex flex-row justify-start items-center h-full"
            onClick={() => {scrollToTop()}}>
            <img src={Logo} className={"m-2 transform duration-300 ease " + (scroll ? "w-8" : "w-0 mr-[-4px]")}/>
            <p className="transform">Dashboard Admin</p> 
          </button>
          <div className="lg:flex flex-row hidden gap-12">
            <button className="hover:underline"
              onClick={() => {scrollToTop()}}>
              Keluar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-green">
        <div className="w-full min-h-screen pt-32 pb-6 items-center">
        <div className="container mx-auto flex flex-row justify-between text-green-dark text-center text-2xl font-poppins font-semibold w-full">
              <button className={"w-1/3 py-2 rounded-tl-xl transform duration-300 ease border-t-4 border-l-4 border-white " + (openTab === 1 ? "bg-white hover:bg-grey": "bg-green hover:bg-green-dark text-white")}
                onClick={() => setOpenTab(1)}>
                  Wisata
              </button>
              <button className={"w-1/3 py-2 transform duration-300 ease border-t-4 border-l-4 border-r-4 border-white " + (openTab === 2 ? "bg-white hover:bg-grey": "bg-green hover:bg-green-dark text-white")}
                onClick={() => setOpenTab(2)}>
                  UMKM
              </button>
              <button className={"w-1/3 py-2 rounded-tr-xl transform duration-300 ease border-t-4 border-r-4 border-white " + (openTab === 3 ? "bg-white hover:bg-grey": "bg-green hover:bg-green-dark text-white")}
                onClick={() => setOpenTab(3)}>
                  Galeri
              </button>
            </div>
          <div className="bg-white container mx-auto rounded-b-xl flex flex-col items-center h-full">
            <div className="w-full text-sm pt-6 px-5 rounded-md items-center flex flex-col">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <TableUmkm columns={columnsUmkm} data={umkm} setRefreshSignal={setRefreshSignal}/>
              </div>
              
            </div>
          </div>
        </div>
        <ModalEditUmkm onClose={handleOnClose} visible={showModalEditUmkm} row={id} setRefreshSignal={setRefreshSignal}/>
        <ModalDeleteUmkm onClose={handleOnClose} visible={showModalDeleteUmkm} row={id} setRefreshSignal={setRefreshSignal}/>
      </div>
    </>
  )
};