import { Link, useParams } from 'react-router-dom';
import { HOME_PATH } from '../constants/path';
import usePokemon from '../hook/usePokemon';
import PokemonServices from '../services/pokemon';

export default function PokeCardDetail() {
    let { id } = useParams()
    const { data: pokemon, loading } = usePokemon(() => PokemonServices.getPokemon(id), [id])
    const { data: pokeHabitat } = usePokemon(() => PokemonServices.getPokemonHabitat(id), [id])
    const { data: pokemonShape } = usePokemon(() => PokemonServices.getPokemonShape(id), [id])
    console.log("hbi", pokeHabitat);
    return (
        <div className="container">
            <Link to={ HOME_PATH }> &larr; Back</Link>
            < article className="pokemon-detail" key={ pokemon?.id } >
                <figure className='pokemon-detail__img'>
                    <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg` } alt={ pokemon?.name } />
                </figure>
                <div className="pokemon-detail__content">
                    <small>#{ pokemon?.id }</small>
                    <h3>{ pokemon?.name }</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum facere dolor unde debitis nostrum magnam beatae delectus mollitia totam aut possimus, vitae temporibus accusamus obcaecati, minima perspiciatis excepturi commodi.</p>
                    <ul>
                        {
                            pokemon?.types && pokemon.types.map((el, i) => {
                                return <li key={ i } className={ `${el.type.name}` } >{ el.type.name }</li>

                            })
                        }

                    </ul>
                    <div className="abilities">
                        <h5>abilities</h5>
                        <ul>
                            {
                                pokemon?.abilities && pokemon.abilities.map((el, i) => {
                                    return <li key={ i }>{ el.ability.name }</li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="appearance">
                        {
                            pokemon?.height && <div className="height">
                                <h5>height</h5>
                                <p>{ pokemon?.height } m</p>
                            </div>
                        }
                        {
                            pokemon?.weight && <div className="weight">
                                <h5>weight</h5>
                                <p>{ pokemon?.weight } kg</p>
                            </div>
                        }
                        {
                            pokeHabitat?.name && <div className="habitat">
                                <h5>Habitat</h5>
                                <p>{ pokeHabitat.name }</p>
                            </div>
                        }
                        {
                            pokemonShape?.name && <div className="shape">
                                <h5>Shape</h5>
                                <p>{ pokemonShape.name }</p>
                            </div>
                        }
                    </div>
                    <div className="stats">
                        <h5>stats</h5>
                        <ul>
                            {
                                pokemon?.stats && pokemon.stats.map((stat, i) => {
                                    return <li key={ i }>
                                        <span>{ stat.stat.name }</span>
                                        <p>{ stat.base_stat }</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </article >
        </div>

    )
}
