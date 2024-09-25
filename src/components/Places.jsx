import React from 'react'

export default function Places() {
    const cities = [
        { name: "kolhapur"},
        { name: "pune"},
        { name: "sangali"},
        { name: "satara"},
        { name: "kagal"},
        { name: "gadhinglaj"},
        { name: "miraj"},
        { name: "Radhanagari"},
        { name: "Gargoti"},
        { name: "Shiroli"},
        { name: "Gokul Shirgaon"},
        { name: "Appachi Wadi"},
    ]
  return (
    <>
    <div className='max-w-[1200px] mx-auto my-5 items-center'>
        <hr className='border-[1.5px] mt-3 mb-3'/>
        <div className='text-[25px] font-bold'>Best Places to Eat Across Cities</div>
        <div className='grid grid-cols-4 p-[10px] gap-3'>
            {
                cities.map((data, index)=>{
                    return <span className='border border-[#c5c5c5] rounded-[10px] p-[10px]'>{`Best Restaurants in ${data.name}`}</span>
                })
            }
        </div>
    </div>
    </>
  )
}
