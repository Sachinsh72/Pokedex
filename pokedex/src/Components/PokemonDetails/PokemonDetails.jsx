import { useParams } from "react-router-dom";
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails(){

    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id);

    return(
        <div className="pokemon-defaults-wrapper">
            <img className="pokemon-deatils-image" src={pokemon.image}/>
            <div className="pokeemon-deatils-name"><span>{pokemon.name}</span> </div>
            <div className="pokeemon-deatils-name">Height: {pokemon.height}</div>
            <div className="pokeemon-deatils-name">Weight:{pokemon.weight}</div>
            <div className="pokemon-deatils-types">
                {pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}
            </div>

            { 
                pokemon.types &&  pokemon.similarPokemons &&
                <div> 
                    more {pokemon.types[0]} type pokemons
                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default PokemonDetails;