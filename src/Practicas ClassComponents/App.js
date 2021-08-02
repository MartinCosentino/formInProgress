


// imc
import React, { Component } from 'react';
import RenderizadoCondicional from './ReenderizadoCondicional';
import Padre from './ComunicacionEntreComponentes';
import { FuncionalComponentCounter } from './FuncionalComponentCounter';
import CicloVida from './CicloVida';
import AjaxApis from './AjaxApis';
// CCC

class FirstClassComponent extends Component {
  state = { counter: 0 }





  render() {
    return (
      <>

        <div className="container">
          <div className="row">

            <div className="col-12">


              <h1 className="display-5 text-center"> FirstClassComponent </h1>
              <hr />

            </div>

            <div className="col-6 p-5  text-center border">

              6
            </div>
            <div className="col-6 p-5 text-center border">
              6
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center border p-4">

              <sup>Counter: </sup> <h3>{this.state.counter}</h3>


              {/* suma */}
              <button
                className="btn btn-outline-warning mx-1 my-2"
                onClick={() => {
                  this.setState({
                    counter: this.state.counter + 1
                  })
                }}> + </button>


              {/* 0 */}
              <button className="btn btn-outline-warning mx-1 my-2"
                onClick={() => {
                  this.setState({
                    counter: this.counter = 0
                  })


                }}> C </button>



              {/* resta */}
              <button className="btn btn-outline-warning mx-1 my-2"
                onClick={() => {
                  this.setState({
                    counter: this.state.counter - 1
                  })
                }}> - </button>
            </div>


            <div className="col-12 border text-center">




              <RenderizadoCondicional />
              <hr />


              <Padre />

              <hr />

              <FuncionalComponentCounter />

              <hr />

              <CicloVida />

              <hr />

              <AjaxApis />
              <hr />


            </div>

          </div>

        </div>


      </>
    );
  }
}

export default FirstClassComponent;


