import React from 'react'


export default function UpperFooter() {
  return (
    <div className='mx-auto  items-center bg-[#e8e8e8]'>
        <div className='h-[100px]  flex items-center justify-center'>
            <div className='font-bold text-[1.5rem]'>
                For Better Experience, Download<br /> the Swiggy app now
            </div>
            <div className='flex w-[200px] pl-[50px]'>
                <img src={"../images/playStore.png"} alt="" />
                <img src={"../images/appStore.png"} alt="" />
            </div>
        </div>
    </div>
  )
}
