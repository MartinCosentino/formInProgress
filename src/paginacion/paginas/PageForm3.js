import React, { useContext } from 'react'
import { MultiStepContext } from '../Hooks/StepContext';

export const PageForm3 = () => {

    const { userData, setUserData, decrement } = useContext(MultiStepContext);

    return (
        <>

            <form className="form-floating">

                <input
                    className="form-control form-control-lg"
                    name="FB"
                    placeholder="Facebook"
                    value={userData['FB']}
                    onChange={(e) => setUserData({ ...userData, "FB": e.target.value })}
                    id="FB"
                    required />

                <label htmlFor="FB" className="form-label">Facebook</label>

                <div className="form-floating">

                    <input
                        className="form-control my-4"
                        name="GIT"
                        placeholder="Github"
                        value={userData['GIT']}
                        onChange={(e) => setUserData({ ...userData, "GIT": e.target.value })}
                        id="GIT"
                        required />

                    <label htmlFor="GIT">Github</label>
                </div>

                <div className="form-floating">

                    <input
                        className="form-control form-control-sm  mb-4"
                        name="OBRASOCIAL"
                        placeholder="Obra Social"
                        value={userData['OBRASOCIAL']}
                        onChange={(e) => setUserData({ ...userData, "OBRASOCIAL": e.target.value })}
                        id="OBRASOCIAL"
                        required />

                    <label htmlFor="OBRASOCIAL">ObraSocial</label>
                </div>

                <button className="btn btn-outline-danger m-2" type="submit"> SUBMIT </button>
                <button className="btn btn-outline-info m-2" onClick={decrement}> Atrás </button>

            </form>


        </>
    )


}
