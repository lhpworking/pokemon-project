import React, { useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard';
import PokemonServices from '../../services/pokemon';

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState('?offset=0&limit=100')
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')
    const [search, setSearch] = useState('')
    const [searchParam] = useState([["name"], ["types"]])

    const fetchPokemon = async () => {
        setLoading(true)
        try {
            let res = await PokemonServices.getPokemons(url)
            if (res.previous) setPrevUrl(new URL(res.previous).search)
            if (res.next) setNextUrl(new URL(res.next).search)
            getPokemon(res.results)
            setLoading(false)
        } catch (error) {
            console.log("Get pokemon error:", error)
        }
    }
    const getPokemon = async (pokemonData) => {
        pokemonData.map(async (el) => {
            const pokemon = await PokemonServices.getPokemons(el.name)
            setPokemons(pokemons => {
                pokemons = [...pokemons, pokemon]
                pokemons.sort((a, b) => a.id > b.id ? 1 : -1)
                return pokemons
            })
        })
    }
    const filterPokemon = (pokemonData) => {
        return pokemonData.filter((pokemon) => {
            return searchParam.some((param) => {
                return (
                    pokemon[param]
                        .toString()
                        .toLowerCase()
                        .indexOf(search.toLowerCase()) > -1
                );
            })
        })
    }
    useEffect(() => {
        fetchPokemon()
    }, [url])
    return (
        <><section className="search">
            <div className="container">
                <input
                    type="text"
                    placeholder='Search pokemon by name'
                    value={ search }
                    onChange={ (e => setSearch(e.target.value)) } />
            </div>
        </section>
            <section className="pokemon">
                <div className="container-fluid">
                    <div className="card-layout">
                        { search ? filterPokemon(pokemons)
                            .map((pokemon, i) => {
                                return pokemon && <PokeCard key={ i } data={ pokemon } />;
                            }) :
                            pokemons.map((pokemon, i) => {
                                return pokemon && <PokeCard key={ i } data={ pokemon } loading={ loading } />;
                            }) }
                    </div>
                    <div className={ `btn-group ${search ? "d-none" : ""}` }>
                        <button
                            type="button"
                            className={ `btn btn-prev` }
                            disabled={ url === "?offset=0&limit=30" ? true : false }
                            onClick={ () => {
                                setPokemons([]);
                                setUrl(prevUrl);
                            } }>
                            &larr; Prev
                        </button>
                        <button type="button" className='btn btn-next' onClick={ () => {
                            setPokemons([]);
                            setUrl(nextUrl);
                        } }>
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </section></>
    )
}