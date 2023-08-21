import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon' will put this in useState so we can get next or prev pokemons
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon'); // api
    const [nextUrl, setNextUrl] = useState(''); // to set at next button
    const [prevUrl, setPrevUrl] = useState(''); // to set at prev button

    async function downloadPokemon(){
        setIsLoading(true)
        const response = await axios.get(pokedexUrl); // this downloads list of 20 pokemons

       const pokemonResults = response.data.results; // we get the array of pokemons from the result

       console.log(response.data);
       setNextUrl(response.data.next);
       setPrevUrl(response.data.previous);

       // iterating over the array of pokemons, and using thier url, to create an array of promises
       // that will download those 20 pokemons
       const pokemonResultPromise = pokemonResults.map((pokemon)=> axios.get(pokemon.url));

       // passing that promise array to axios.all
       const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokems detailed data
       console.log(pokemonData);

       // now iterate on the data of each pokemon, and extraxt id, name, image, types

       const pokeListResult = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name, 
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny , 
                types: pokemon.types
            }
        })

       console.log(pokeListResult);
       setPokemonList(pokeListResult);
       setIsLoading(false);
        
    }
    useEffect(()=>{
        downloadPokemon();
    }, [pokedexUrl])


    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {(isLoading)?'Loading...':
                 pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} />)
                }
            </div>
            <div className="controls">
                <button disabled={prevUrl == null} onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl == null} onClick={()=> setPokedexUrl(nextUrl)}>Next</button>
            </div>
        </div>
    ) 
}

export default PokemonList;