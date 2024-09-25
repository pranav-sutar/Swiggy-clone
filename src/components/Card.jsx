import React from "react";
import { MdStars } from "react-icons/md";
export default function Card(resto) {
  return (
    <>
      <div className="w-[268px] shrink-0 grow ">
        <div className="group h-[182px] rounded-[15px] overflow-hidden relative hover:cursor-pointer  ">
          <img
            className=" object-cover w-full h-full group-hover:scale-110 duration-100"
            src={`../images/topResto/${resto.img}`}
            alt=""
          />
          <div className="p-[10px] text-white image-overlay absolute w-full h-full top-0 flex items-end font-[30px]
           pl-[20px]">
            <span className="font-bold">{resto.offer}</span>
          </div>
        </div>
        <div className="mt-2 text-xl font-bold">{resto.title}</div>
        <div className="flex gap-3">
          <span>
            {" "}
            <MdStars className="inline" /> {resto.rating}
          </span>{" "}
          <span>
            {" "}
            <t /> {resto.minTime} mins
          </span>
        </div>
        <div className="text-[gray]">
            {resto.name}
            <br />
            {resto.place}
        </div>
      </div>
    </>
  );
}
