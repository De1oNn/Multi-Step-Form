"use client"

import React, { useState } from "react";
import { FirstStep } from "./FirstStep";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";
import { FormFinished } from "./FormFinished"

const MultiStepForm = () => {
    const [currentStep, SetCurrentStep] = useState(0)

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
        <Step handleBackStep={handleBackStep} handleNextStep={handleNextStep}/>
    </div>
)
};
export default MultiStepForm