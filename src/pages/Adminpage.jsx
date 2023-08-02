import { useState, useMemo } from "react";
import nl2br from "react-nl2br";
import Table from "../components/Table";
import ModalEdit from "../components/ModalEdit";
import ModalDelete from "../components/ModalDelete";
import { useFetch } from "../helpers/useFetch";
import { Logo } from "../assets";

export default function Adminpage() {
  const [refreshSignal, setRefreshSignal] = useState(false);
  const [id, setId] = useState();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [table, setTable] = useState();
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
    setShowModalEdit(false);
    setShowModalDelete(false);
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
              <button onClick={() => {setId(umkm); setShowModalEdit(true); setTable("umkm")}} 
                className="rounded-md p-2 bg-blue hover:bg-black text-white w-full">
                  Ubah
              </button>
              <button onClick={() => {setId(id); setShowModalDelete(true); setTable("umkm")}} 
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

  const {data: galeriData} = useFetch("/galeri", refreshSignal);
  const [galeri, setGaleri] = useState([]);
  
  useMemo(() => {
    if (!galeriData?.data?.data) return;
    setGaleri(galeriData.data.data.galeri);
  }, [galeriData]);
  
  const columnsGaleri = useMemo(
    () => [
      {
        Header: 'No',
        Cell: ({ row, flatRows }) => {
          return flatRows.indexOf(row) + 1;
        },
        width: 20,
      },
      {
        Header: "Penulis",
        accessor: "penulis",
        width: 50,
      },
      {
        Header: "Judul",
        accessor: "judul",
        width: 70,
      },
      {
        Header: "Teks",
        accessor: "teks",
        Cell: ({value}) => {
          return (
            <div className="text-start overflow-y-scroll h-52">{nl2br(value)}</div>
          )
        },
        width: 180,
      },
      {
        Header: "Foto",
        accessor: "gambar",
        Cell: ({value}) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <img src={value} className="h-52" />
            </div>
          )
        },
        width: 160,
      },
      {
        Header: "Action",
        accessor: galeri => {
          let id =(galeri._id);
          return ( 
            <div className="flex flex-col items-center gap-2 px-1">
              <button onClick={() => {setId(galeri); setShowModalEdit(true); setTable("galeri")}} 
                className="rounded-md p-2 bg-blue hover:bg-black text-white w-full">
                  Ubah
              </button>
              <button onClick={() => {setId(id); setShowModalDelete(true); setTable("galeri")}} 
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
          <div className="bg-white min-h-[70vh] container mx-auto rounded-b-xl flex flex-col items-center h-full">
            <div className="w-full text-sm p-6 rounded-md items-center flex flex-col">
              <div className={openTab === 2 ? "block" : "hidden"}>
                <Table columns={columnsUmkm} data={umkm} setRefreshSignal={setRefreshSignal} table={"umkm"}/>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <Table columns={columnsGaleri} data={galeri} setRefreshSignal={setRefreshSignal} table={"galeri"}/>
              </div>
            </div>
          </div>
        </div>
        <ModalEdit onClose={handleOnClose} visible={showModalEdit} row={id} setRefreshSignal={setRefreshSignal} table={table}/>
        <ModalDelete onClose={handleOnClose} visible={showModalDelete} row={id} setRefreshSignal={setRefreshSignal} table={table}/>
      </div>
    </>
  )
};