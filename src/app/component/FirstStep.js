import React from 'react'
// import pic from '../picture/Main-1.png'
// import MultiStepForm from 

export const FirstStep = (props) => {

    const {handleNextStep} = props

  return (
    <div className= 'bg-[#f3f4f6] h-screen w-screen flex justify-center items-center' >
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
        <div className="flex flex-col w-[100%] h-[129px] justify-between mb-[30px]">
          <span className="h-[60px] w-[60px]">
            {/* <img src={pic} alt="h"/> */}
            <img src='../picture/Main-1.png'/>
          </span>
          <h2 className="text-[26px] text-foreground font-semibold text-[#202124] mt-[8px]">
          Join Us! 😎
          </h2>
          <div className="text-[18px] whitespace-nowrap text-[#8E8E8E] mt-[8px]">
          Please provide all current information accurately.
          </div>
        </div>
        <div className="w-[100%] h-[228px] flex flex-col justify-between">
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155]">First name <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your first name" placeholder="Your first name"/>
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155]">Last name <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your last name" placeholder="Your last name" />
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] font-[14px]">Username <span>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" type="Your username" placeholder="Your username"/>
          </div>
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button onClick={handleNextStep} type="submit" className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">
          Continue 1/3  
          </button>
        </div>
      </div>
    </div>
  )
}
