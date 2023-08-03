import React, { useState } from "react";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import ModalInput from "./ModalInput";

export default function Table({ columns, data, setRefreshSignal, table, setShowToast }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data,
    initialState: {
      pageSize: 10,
    } }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter } = state;

  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div className="text-black">
      <div className={"flex flex-row font-poppins justify-between gap-2 align-center " + (table !== "wisata" ? "block" : "hidden")}>
        <div className="flex flex-row justify-start gap-3 align-center w-1/2">
          <input
            type="text"
            placeholder="Cari" 
            className="py-1 px-2 rounded-md border border-black bg-white mb-3 focus:outline-green"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        <button className="text-base py-1 px-3 mb-3 rounded-md hover:bg-green-dark bg-green text-white ease transition-all duration-300"
          onClick={() => setShowModal(true)}>
            Tambah
        </button> 
      </div>
      <div className="font-poppins">
        <table {...getTableProps()} className="w-full table-fixed">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-green bg-opacity-40">
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps() )}
                    style={{width: column.width}}
                    className="p-2 border-2 border-green">
                      {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} className="even:bg-green even:bg-opacity-5">
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className="text-center p-2 break-words border-green border-2">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        {page.length == 0 &&
          <div className="text-center py-10">
            Tidak ada data.
          </div>
        }
      </div>
      <ModalInput onClose={handleOnClose} visible={showModal} setRefreshSignal={setRefreshSignal} setShowToast={setShowToast} table={table}/>
    </div>
  );
}