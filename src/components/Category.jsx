import React, { useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { TbDisabled } from "react-icons/tb";

export default function () {
  const categories = [
    { img: "Chole Bhature.avif" },
    { img: "Burger.avif" },
    { img: "Cake.avif" },
    { img: "Chinese.avif" },
    { img: "Noodles.avif" },
    { img: "North Indian.avif" },
    { img: "Paratha.avif" },
    { img: "Pizza.avif" },
    { img: "Rolls.avif" },
    { img: "Biryani.avif" },
    { img: "Gulab Jamun.avif" },
    { img: "Kebab.avif" },
    { img: "Momo.avif" },
    { img: "Pure Veg.avif" },
    { img: "Rasmalai.avif" },
    { img: "Shawarma.avif" },
    { img: "Pav Bhaji.avif" },
  ];
  // carosel Logic
  const [slide, setSlide] = useState(0);
  const toRight = () => {
    if(slide==9) return false;
    setSlide(slide+3);

    
  };
  const toLeft = () => {
    if(slide==0) return false;
    
    setSlide(slide-3);
    
  };

  return (
    <div className="max-w-[1200px] mx-auto my-5 items-center">
      <div className="flex text-[25px] font-bold justify-between items-center">
        <div>Whats are in your Mind</div>
        <div className="flex mt-[20px]">
          <div
            onClick={toLeft}
            className="cursor-pointer w-[30px] text-[15px] flex justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeft style={{
              color: slide == 0 ? "white": ""
            }} />
          </div>
          <div
            onClick={toRight}
            className="cursor-pointer w-[30px] text-[15px] flex justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRight style={{
              color: slide == 9 ? "white " : ""
            }} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden ">
        {categories.map((cat, index) => {
          return (
            <div
              className="w-[150px] shrink-0 duration-500"
              style={{
                transform: ` translateX(-${slide * 100}%)`,
              }}
            >
              <img key={index} src={`images/categories/${cat.img}`} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="mt-6 border-[1.5px]" />
    </div>
  );
}
