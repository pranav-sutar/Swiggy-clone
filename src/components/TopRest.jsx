import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

export default function TopRest() {
    const topResto = [
        {
            img: 'resto01.webp',
            offer: "Items At ₹179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto02.webp',
            offer: "Items At ₹199",
            title: "Pizza Hut",
            rating: 4.3,
            minTime: 42,
            name: "Burger",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto03.webp',
            offer: "Items At ₹200",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto04.webp',
            offer: "Items At ₹151",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto05.webp',
            offer: "Items At ₹255",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto06.webp',
            offer: "Items At ₹199",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto07.webp',
            offer: "Items At ₹99",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto08.webp',
            offer: "Items At ₹145",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto09.webp',
            offer: "Items At ₹281",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
        {
            img: 'resto10.webp',
            offer: "Items At ₹355",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 40,
            name: "Pizzas",
            place: " Takala, Kolhapur"
        },
    ]
    const [slide, setSlide] = useState(0);
    const toLeft= ()=>{
        if(slide==0) return false; 
        setSlide(slide-2);

    }
    const toRight = ()=>{
        if(slide==6) return false;
        setSlide(slide+2);
    }



  return (
    <>
    <div className='max-w-[1200px] mx-auto '>
    <div className="flex text-[25px] font-bold justify-between items-center">
        <div>Top Restaurant chains in Kolhapur</div>
        <div className="flex mt-[20px]">
          <div
           onClick={toLeft}
            className="cursor-pointer w-[30px] text-[15px] flex justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeft style={{
                color: slide == 0 ? "white" : ""
            }} />
          </div>
          <div
            onClick={toRight}
            className="cursor-pointer w-[30px] text-[15px] flex justify-center items-center h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            
          >
            <FaArrowRight style={{
                color: slide == 6 ? "white" : "",
            }} />
          </div>
        </div>
      </div>
      <div className='flex gap-3 overflow-hidden duration-500 p-[10px] ' >
        {
            topResto.map((resto, index)=>{
               return <div className='duration-500' style={{
                
                transform:`translateX(-${slide * 100}%)`,
               }}>
                <Card  {...resto} key={index}/>
               </div>
            })
        }
      </div>
    </div>
    </>
  )
}
