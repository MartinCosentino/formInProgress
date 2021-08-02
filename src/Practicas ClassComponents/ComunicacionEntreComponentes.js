import React, { Component } from 'react';

class Padre extends Component {

    state = {
        counter: 0
    }

    increment = () => {
        this.setState({

            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <>

                <h2 className="display-5"> Comunicacion entre componentes </h2>

                <Hijo mensaje="mensaje para el componente hijo 1 sin enviar l function como prop (no afecta al counter)" />


                <Hijo increment={this.increment} mensaje="mensaje para el componente hijo 2 con la prop increment (afecta al counter)  " />
                <pre> Counter : {this.state.counter} </pre>

            </>
        );
    }
}

const Hijo = ({ mensaje, increment }) => {

    return (<>
        <h4>{mensaje}</h4>

        <button onClick={increment}> Increment  </button>

    </>)
}

export default Padre;
