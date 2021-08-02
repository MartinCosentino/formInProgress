import React, { Component } from 'react';


const Pokemon = (props) => {
    return (
        <>
            <figure className="border" >

                <img src={props.avatar} alt={props.name} />
                <p>{props.name}</p>


            </figure>

        </>
    )
}

class AjaxApis extends Component {
    state = {
        pokemons: [],
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon";

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                console.log(data)
                data.results.forEach(element => {
                    fetch(element.url)
                        .then(resp => resp.json())
                        .then(dataImg => {
                            // console.log(dataImg)



                            let pokemon = {
                                id: dataImg.id,
                                name: dataImg.name,
                                avatar: dataImg.sprites.front_default,

                            };

                            let pokemons = [...this.state.pokemons, pokemon];

                            this.setState({ pokemons })
                        })

                });


            })

    }


    render() {
        return (<>

            <h2> Peticiones Asincronas en Componentes de Clase</h2>
            {this.state.pokemons.length === 0 ? (<div className="alert alert-info"> Loading ...... </div>)

                : (this.state.pokemons.map(el =>
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />))}

        </>);
    }
}

export default AjaxApis;