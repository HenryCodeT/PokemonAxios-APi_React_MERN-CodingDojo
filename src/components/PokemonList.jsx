import React, { useState } from 'react';
import axios from 'axios';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);

    const handleOnClick = async () => {
        // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`)
        //     .then(response => {
        //         console.log(response);
        //         setPokemonList((listaPrev) => response.data.results);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1126');
            console.log(response.data.results);
            setPokemonList((listaPrev) => response.data.results);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    return (
        <div>
            <button className='btn btn-success' onClick={handleOnClick}>Fetch Pokemon</button>
            <ul className='col-4 mx-auto'>
                {
                    pokemonList ? pokemonList.map((item, index) => {
                        return (
                            <li key={index}>{item.name}</li>
                        );
                    })
                        : ''
                }
            </ul>
        </div>
    )

}
export default PokemonList;