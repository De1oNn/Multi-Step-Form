"use client"

import React, { useState } from "react";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FormFinished } from "./FormFinished"

const MultiStepForm = () => {
    const [currentStep, SetCurrentStep] = useState(0)
    const [formValue, setFormValue] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dateBirth: "",
        profileImg: "",
    })

    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dateBirth: "",
        profileImg: "",
    })
const handleError = (errors) => {
    setFormError((prev) => ({...prev, ...errors}));
};

const Step = [FirstStep, SecondStep, ThirdStep, FormFinished][currentStep];

const handleNextStep = () => {
    if (currentStep !== 3) {
        SetCurrentStep((prevStep) => prevStep + 1);
    }
};
const handleBackStep = () => {
    if (currentStep !== 0) {
        SetCurrentStep((prevStep) => prevStep - 1);
    }
}
return (
    <div>
        <Step 
        formValue={formValue}
        errors={formError}
        setFormValue={setFormValue}
        handleBackStep={handleBackStep} 
        handleNextStep={handleNextStep}
        handleError={handleError}
        />
    </div>
)
};
export default MultiStepForm