import React from 'react'
import Card from './Card'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function OnlineDelivery() {
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
  return (
    <>
    
    <div className='max-w-[1200px] mx-auto mt-[40px]'>
    <hr className='mb-5 border-[1.5px]' />
    <div className="flex text-[25px] font-bold justify-between items-center">
        <div>Restaurants with online food delivery in Kolhapur</div>
      </div>
      <div className='grid grid-cols-4 gap-3'>
        {
            topResto.map((resto, index)=>{
                return <Card {...resto}/>
            })
        }
      </div>
    </div>
    </>
  )
}
