import React, { useContext } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { context } from "../../App";
import "./ListSong.css";
const ListSong = ({ listSong }) => {
  const { idSong, setIdSong, showMenu, setShowMenu } = useContext(context);
  // ! Get Id Of Song
  const handelGetSong = (id) => {
    setIdSong(id);
    setShowMenu(false);
  };
  return (
    <div
      className={`fixed top-[5rem] right-0 left-0 bottom-[5rem] bg-bg-pr z-50 md:static md:bg-transparent md:col-span-2 md:block ${
        !showMenu ? "hidden" : ""
      }`}
    >
      <table className="text-left w-full">
        <thead className=" flex items-center text-white w-full border-b border-white">
          <tr className="flex w-full mb-4 text-white">
            <th className="p-4 w-[10%] md:w-[10%]">#</th>
            <th className="p-4 w-[60%]">Song</th>
            <th className="p-4 w-[30%] md:w-[20%]">Author</th>
            <th className="p-4 w-[10%] hidden md:block">
              <IoArrowDownCircleOutline className="font-black text-xl"></IoArrowDownCircleOutline>
            </th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-96 overflow-x-hidden">
          {listSong.map((item) => (
            <tr
              className={`flex w-full mb-4 cursor-pointer text-gray-400 hover:bg-white hover:bg-opacity-10 hover:text-white ${
                idSong === item.id ? "active" : ""
              }`}
              onClick={() => handelGetSong(item.id)}
              key={item.id}
            >
              <td className="p-4 w-[10%] md:w-[10%]">{item.id + 1}</td>
              <td className="p-4 w-[60%]">{item.name}</td>
              <td className="p-4 w-[30%] md:w-[20%]">{item.author}</td>
              <td className="p-4 w-[10%] hidden md:block">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <IoArrowDownCircleOutline></IoArrowDownCircleOutline>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
