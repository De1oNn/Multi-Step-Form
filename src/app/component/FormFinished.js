import React from 'react'

export const FormFinished = () => {
  localStorage.removeItem("formData");
  return (
    <div className='bg-[#f3f4f6] h-screen w-screen flex justify-center items-center '>
      <div className='h-[207px] w-[480px] bg-[#FFF] p-[32px] rounded-[8px] flex flex-col justify-center '>
        <span className='h-[60px] w-[60px]'>
          <img src='../picture/Main-1.png'/>
        </span>
        <h2 className='text-[26px] text-[#202124] font-semibold mt-[8px]'>
          Youre All Set! 🔥
        </h2>
        <p className='text-lg text-[#8E8E8E] font-normal mt-[8px]'>
          Weve received your submission. Thank you!
        </p>
      </div>
    </div>
  )
}
