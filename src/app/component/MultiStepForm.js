"use client"

import React, { useEffect, useState } from "react";
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

const clearError = (name) => {
    setFormError((prev) => ({...prev, [name]: "" }));
}

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

useEffect(() => {
    const data = localStorage.getItem("formData")
    if (data) {
        const parsedData = JSON.parse(data)
        SetCurrentStep(parsedData.currentStep)
        setFormValue(parsedData)
    }
}, []);

return (
    <div>
        <Step 
        formValue={formValue}
        errors={formError}
        clearError={clearError}
        setFormValue={setFormValue}
        handleBackStep={handleBackStep} 
        handleNextStep={handleNextStep}
        handleError={handleError}
        />
    </div>
)
};
export default MultiStepForm