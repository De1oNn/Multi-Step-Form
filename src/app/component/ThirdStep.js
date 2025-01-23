import React from 'react';

export const ThirdStep = (props) => {
  const { handleNextStep, handleBackStep, formValue, setFormValue, errors, handleError, clearError } = props;

  // Handle input change for text inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    clearError(name);
  };

  // Handle profile image upload
  const handleProfileImgChange = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      // Update form value with selected file
      setFormValue((prev) => ({
        ...prev,
        profileImg: files[0], // Save the selected file
      }));
      clearError('profileImg'); // Clear error if file is selected
    }
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepThreeValid(formValue);

    if (isValid) {
      const localData = {
        ...formValue,
        currentstep: 3,
      };
      localStorage.setItem('formData', JSON.stringify(localData));
      handleNextStep();
    } else {
      handleError(errors);
    }
  };

  return (
    <div className="bg-[#f3f4f6] h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
        <div className="flex flex-col w-[100%] h-[129px] justify-between mb-[30px]">
          <span className="h-[60px] w-[60px]">
            <img src="../picture/Main-1.png" alt="Logo" />
          </span>
          <h2 className="text-[26px] text-foreground font-semibold text-[#202124] mt-[8px]">
            Join Us! 😎
          </h2>
          <div className="text-[18px] whitespace-nowrap text-[#8E8E8E] mt-[8px]">
            Please provide all current information accurately.
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div>
            <label className="block text-sm font-semibold leading-4 text-[#334155]">
              Date of birth
              <span>*</span>
            </label>
            <input
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316] mt-[8px]"
              placeholder="--/--/--"
              type="date"
              name="dateBirth"
              value={formValue.dateBirth}
              onChange={handleChange}
            />
            {errors.dateBirth && <p className="text-red-500 mt-[5px]">{errors.dateBirth}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold leading-4 text-[#334155]">
              Profile image <span>*</span>
            </label>
            <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-solid mt-[8px]">
              <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z" fill="#202124" />
                </svg>
              </div>
              <h4>Browse or Drop Image</h4>
            </div>

            <input
              type="file"
              name="profileImg"
              onChange={handleProfileImgChange}
              className="hidden"
            />
            {errors.profileImg && <p className="text-red-500 mt-[5px]">{errors.profileImg}</p>}
          </div>

          <div className="flex w-full gap-x-2 mt-[70px]">
            <button onClick={handleBackStep} className="flex items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100">
              <span>Back</span>
            </button>
            <button onClick={handleFormNextStep} className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80">
              <span>Continue 3/3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const isStepThreeValid = (data) => {
  const { dateBirth, profileImg } = data;

  const errors = {};
  let isValid = true;

  // Validate Date of Birth
  if (!dateBirth) {
    errors.dateBirth = "Төрсөн өдрөө оруулна уу";
    isValid = false;
  }

  // Validate Profile Image
  if (!profileImg) {
    errors.profileImg = "Профайл зурагаа оруулна уу";
    isValid = false;
  }

  return { isValid, errors };
};