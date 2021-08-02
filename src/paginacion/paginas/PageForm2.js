import React, { useContext } from 'react'
import { MultiStepContext } from '../Hooks/StepContext';

export const PageForm2 = () => {

    const { userData, setUserData, increment, decrement } = useContext(MultiStepContext);

    return (
        <>

            <form className="form-floating">

                <input
                    className="form-control form-control-lg"
                    name="city"
                    placeholder="City"
                    value={userData['city']}
                    onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
                    id="city"
                    required />

                <label htmlFor="city" >Ciudad</label>

                <div className="form-floating">

                    <input
                        className="form-control my-4"
                        name="CODIGOPOSTAL"
                        placeholder="CODIGOPOSTAL"
                        value={userData['CODIGOPOSTAL']}
                        onChange={(e) => setUserData({ ...userData, "CODIGOPOSTAL": e.target.value })}
                        id="CODIGOPOSTAL"
                        required />

                    <label htmlFor="CODIGOPOSTAL" >Codigo Postal</label>
                </div>

                <div className="form-floating">

                    <input
                        className="form-control form-control-lg"
                        name="DIRECCION"
                        placeholder="Dirección"
                        value={userData['DIRECCION']}
                        onChange={(e) => setUserData({ ...userData, "DIRECCION": e.target.value })}
                        id="DIRECCION"
                        required />

                    <label htmlFor="DIRECCION" >Dirección:</label>

                </div>


                <button className="btn btn-outline-info m-2" type="submit" onClick={increment}> SIGUIENTE </button>
                <button className="btn btn-outline-info m-2" onClick={decrement}> Atrás </button>


            </form>


        </>
    )


}
