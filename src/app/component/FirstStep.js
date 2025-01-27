'use client';
import React, { useState } from 'react';
import { isStepOneValid } from '../utils/stepOneValidation';
import { motion } from 'framer-motion';

export const FirstStep = (props) => {
  const { handleNextStep, errors, formValue, handleError, setFormValue, clearError } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name)
  }

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentStep: 1,
      };
      localStorage.setItem("formData", JSON.stringify(localData))
      // console.log("in first step", formValue);
      handleNextStep();
    } else {
      handleError(errors);
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }} 
    animate={{ opacity: 1, x: 0 }}    
    transition={{ duration: 1 }}      
    >
    <div className='bg-[#f3f4f6] h-screen w-screen flex justify-center items-center'>
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
        <div className="flex flex-col w-[100%] h-[129px] justify-between mb-[30px]">
          <span className="h-[60px] w-[60px]">
            <img src='../picture/Main-1.png' alt="Main-1" />
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
            <p className="block text-sm font-semibold leading-4 text-[#334155] mb-[5px]">First name <span className='text-red-500'>*</span></p>
            <input
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              type="text"
              placeholder="Your first name"
              name="firstName"
              value={formValue.firstName} 
              onChange={handleChange}
            />
            {errors.firstName && <p className='text-red-500 mt-[5px]'>{errors.firstName}</p>} 
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%] mt-[25px]">
            <label className="block text-sm font-semibold leading-4 text-[#334155] mb-[5px]">Last name <span className='text-red-500'>*</span></label>
            <input
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              type="text"
              placeholder="Your last name"
              name="lastName"
              value={formValue.lastName}  
              onChange={handleChange}
            />
            {errors.lastName && <p className='text-red-500 mt-[5px]'>{errors.lastName}</p>} 
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%] mt-[25px]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] font-[14px] mb-[5px]">Username <span className='text-red-500'>*</span></p>
            <input
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              type="text"
              placeholder="Your username"
              name="username"
              value={formValue.username || ""} 
              onChange={handleChange}
            />
            {errors.username && <p className='text-red-500 mt-[5px]'>{errors.username}</p>} 
          </div>
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button
            onClick={handleFormNextStep}
            type="submit"
            className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80"
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
