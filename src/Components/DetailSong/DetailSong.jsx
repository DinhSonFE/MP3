import React, { useContext } from "react";
import { context } from "../../App";
import "./DetailSong.css";
const DetailSong = ({ detailSong }) => {
  const { playingSong } = useContext(context);
  return (
    <div className="col-span-1 items-center flex justify-between flex-col md:border-r md:border-white max-h-screen">
      <div className="">
        <h1 className="text-gray-400 font-extrabold text-xs">NOW PLAYING</h1>
        <span className="font-extrabold text-2xl text-white">
          {detailSong?.name}
        </span>
      </div>
      <div
        className={`max-w-72 max-h-72  flex justify-center items-center relative before:content-[''] before:absolute before:w-12 before:h-12 before:bg-white before:rounded-full before:border-2 before:border-black rounded-full border-2 border-white overflow-hidden ${
          playingSong ? "animation-music" : ""
        }`}
      >
        <img
          className=" object-cover w-full h-full"
          src={detailSong?.links?.images[1]?.url}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center">
        <div>
          <img
            src={detailSong?.links?.images[0]?.url}
            alt=""
            className="w-12 h-12 rounded-full"
          />
        </div>
        <span className="ml-4 text-white font-extralight ">
          {detailSong?.author}
        </span>
      </div>
    </div>
  );
};

export default DetailSong;
