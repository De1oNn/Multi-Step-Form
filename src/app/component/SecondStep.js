import React from 'react'
import { isTwoOneValid } from '../utils/stepTwoValidation'

export const SecondStep = (props) => {
  const {handleNextStep, handleBackStep, errors, formValue, handleError, setFormValue, clearError} = props

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name)
  }

  const handleFormNextStep = () => {
    const { isValid, errors } = isTwoOneValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentstep: 2
      };
      localStorage.setItem("formData", JSON.stringify(localData))
      handleNextStep();
    } else {
      handleError(errors);
    }
  }
  return (
    <div className= 'bg-[#f3f4f6] h-screen w-screen flex justify-center items-center'>
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
        <div className="flex flex-col w-[100%] justify-between mb-[30px]">
          <span className="h-[60px] w-[60px]">
            <img src='../picture/Main-1.png'/>
          </span>
          <h2 className="text-[26px] text-foreground font-semibold text-[#202124] mt-[8px]">
            Join Us! 😎
          </h2>
          <div className="text-[18px] whitespace-nowrap text-[#8E8E8E] mt-[8px]">
            Please provide all current information accurately.
          </div>
        </div>
        <div className="w-[100%] h-[338px] flex flex-col justify-between">
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] mb-[5px]">Email <span className='text-red-500'>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            type="text"
            name='email'
             placeholder="Your email"
             value={formValue.email}
             onChange={handleChange}
             />
            {errors.email && <p className='text-red-500'>{errors.email}</p>} 
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155]">Phone number<span className='text-red-500'>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            type="text"
            name='phoneNumber'
             placeholder="Your phone number"
             value={formValue.phoneNumber}
             onChange={handleChange}
             />
            {errors.phoneNumber && <p className='text-red-500 mt-[5px]'>{errors.phoneNumber}</p>} 
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] font-[14px]">Password <span className='text-red-500'>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            type="password"
            name='password'
            placeholder="Your password"
            value={formValue.password}
            onChange={handleChange}
            />
            {errors.password && <p className='text-red-500 mt-[5px]'>{errors.password}</p>} 
          </div>
          <div className="flex flex-col justify-between h-[68px] w-[100%]">
            <p className="block text-sm font-semibold leading-4 text-[#334155] font-[14px]">Confirm password <span className='text-red-500'>*</span></p>
            <input className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]" 
            type="password"
            name='confirmPassword'
            placeholder="Confirm password"
            value={formValue.confirmPassword || ""}
            onChange={handleChange}
            />
            {errors.confirmPassword && <p className='text-red-500 mt-[5px]'>{errors.confirmPassword}</p>} 
          </div>
        </div>
        <div className='flex w-full gap-x-2 mt-auto'>
          <button onClick={handleBackStep} className='flex items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100' > <span>Back</span> </button>
          <button 
          onClick={handleFormNextStep} 
          type="submit"
          className='flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80'
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  )
}
// const isTwoOneValid = (data) => {
//   const { email = '', phoneNumber = '', password = '', confirmPassword = ''} = data;
  
//   const errors = {};
//   let isValid = true;

//   if (email.length <= 0) {
//     errors.email = "Мэйл хаягаа оруулна уу";
//     isValid = false;
//   }
//   if (phoneNumber.length <= 0) {
//     errors.phoneNumber = "Утасны дугаараа оруулна уу.";
//     isValid = false;
//   }
//    else if (phoneNumber.length <= 1) {
//     errors.phoneNumber = "hello";
//   }
//   if (password.length <= 0) {
//     errors.password = "Нууц үгээ оруулна уу";
//     isValid = false;
//   }
//   if (confirmPassword.length <= 0) {
//     errors.confirmPassword = "Нууц үгээ давтаж оруулна уу"
//   }

//   return { isValid, errors };
// };
