import React, { useContext } from 'react'
import { PageForm1 } from './paginas/PageForm1'
import { PageForm2 } from './paginas/PageForm2'
import { PageForm3 } from './paginas/PageForm3'
import { MultiStepContext } from './Hooks/StepContext';

export const App2 = () => {

    const { currentStep, setStep, finalData } = useContext(MultiStepContext);


    const showStep = (currentStep) => {

        switch (currentStep) {
            case 1:

                return <PageForm1 />
            case 2:

                return <PageForm2 />

            case 3:

                return <PageForm3 />


            default:
            case 0:
        }
    }


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

    return (
        <>

            <h1 className="text-center">MAIN</h1>
            <hr />



            <div className="container">
                <div className="row">
                    <div className="col-12 border text-center"> <h1 className="display-5"> Page {currentStep}</h1> </div>
                    <div className="col-6 border text-center">
                        6
                    </div>
                    <div className="col-6 border text-center">
                        6
                    </div>
                    <div className="col-12 border p-2">

                        {/* //////////////////////////////////////////////////////////////// */}
                        {/* FORM traido desde el Switch*/}
                        {showStep(currentStep)}

                        {/* //////////////////////////////////////////////////////////////// */}






                    </div>

                </div>
            </div>

        </>
    )
}


