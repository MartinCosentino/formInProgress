import React, { Component } from 'react';



class Reloj extends Component {


    componentWillUnmount = () => {
        console.log(3, 'El componente ha sido eliminado del DOM')
    }

    render() {
        return (<h3>{this.props.Hora}</h3>);
    }
}

/////////LIFECICLE////////////

class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, 'el comoponente se inicializa, aun NO esta esta en el DOM');


        this.state = {

            Hora: new Date().toLocaleTimeString(),
            visible: false
        }


        this.temporizador = null
    }


    componentDidMount = () => {
        console.log(1, 'El componente ya se encuentra en el DOM')
    }


    componentDidUpdate = (prevProps, prevState) => {
        console.log(2, "El estado o las props del componente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount = () => {

        console.log(3, "El componente ha sido eliminado del DOM")
    }


    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                Hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }



    // RENDER //
    render() {
        console.log(4, 'El componente se dibuja/redibuja por algun cambiuo en el DOM')

        return (
            <>
                <h3>Ciclo de vida de los componentes de Clase</h3>
                <hr />

                {/* <h3>{this.state.Hora}</h3> */}
                {
                    this.state.visible && <Reloj Hora={this.state.Hora} />
                }

                <button onClick={this.iniciar}> Iniciar </button>
                <button onClick={this.detener}> Detener </button>

            </>);
    }
}

export default CicloVida;