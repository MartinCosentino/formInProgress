import React, { Component } from 'react';



export const LogIn = () => {
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

export const LogOut = () => {
    return (
        <div>
            <h3>LogOut</h3>
        </div>
    )
}




class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: true,
        }
    }
    render() {
        return (<>


            <h2 className="display-5 my-3">Reenderizado condicional </h2>
            <hr />


            {
                this.state.session ? (<LogOut />)

                    : (<LogIn />)
            }





        </>);
    }
}

export default RenderizadoCondicional;