import React, { useContext } from 'react'
import { MultiStepContext } from '../Hooks/StepContext';


export const PageForm1 = () => {

    const { userData, setUserData, increment, decrement } = useContext(MultiStepContext);

    return (
        <>

            <form className="form-floating">

                <input
                    className="form-control form-control-lg"
                    name="name"
                    placeholder="Name"
                    value={userData['name']}
                    onChange={(e) => setUserData({ ...userData, "name": e.target.value })}
                    id="name"
                    required />

                <label htmlFor="name">First name</label>


                <div className="form-floating">

                    <input
                        className="form-control my-4"
                        name="email"
                        placeholder="email"
                        value={userData['email']}
                        onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
                        id="email"
                        required />

                    <label htmlFor="email">email</label>
                </div>

                <div className="form-floating">

                    <input
                        name="number"
                        className="form-control form-control-sm  mb-4"
                        placeholder="number"
                        value={userData['number']}
                        onChange={(e) => setUserData({ ...userData, "number": e.target.value })}
                        id="number"
                        required />

                    <label htmlFor="number">Phone Number</label>
                </div>

                <button className="btn btn-outline-info m-2" type="submit" onClick={increment}> SIGUIENTE </button>


            </form>


        </>
    )


}
