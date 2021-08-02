import React, { useState } from 'react';
import { App2 } from '../App2';

export const MultiStepContext = React.createContext();
export const StepContext = () => {
    const [currentStep, setStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([]);


    const increment = () => {
        setStep(currentStep + 1)
        if (currentStep === 3) {
            return setStep(currentStep - 2)

        }

    }

    const decrement = () => {
        setStep(currentStep - 1)
        if (currentStep === 1) {
            return setStep(currentStep)
        }
    }
    const submitData = () => {

    }

    return (
        <>

            <MultiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, increment, decrement }}>
                <App2 />
            </MultiStepContext.Provider>


        </>
    )

}