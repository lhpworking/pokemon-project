import { Skeleton } from 'antd';
import SkeletonImage from 'antd/lib/skeleton/Image';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { POKEMON_PATH } from '../constants/path';
import leftFillNum from '../utils/parseNumber';

export default function PokeCard({ data, loading }) {
    return (
        <>
            {
                loading ? [...Array(20)].map((_, i) =>
                    <div key={ i } style={ { marginBottom: 15, marginLeft: 15, zIndex: 1, position: "relative" } }>
                        <SkeletonImage active style={ { width: 300, height: 150, marginBottom: 10 } } />
                        <Skeleton active paragraph={ { rows: 1 } } />
                    </div>) : <Link target="_blank"
                        to={ generatePath(POKEMON_PATH, { slug: "pokemon", id: data.id }) }
                    >
                    <article key={ data.id } className={ `card ${data.types[0]?.type.name}`
                    }  >
                        <figure>
                            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg` } alt="" />
                        </figure>
                        <div className="card__content">
                            <small>#{ leftFillNum(data.id, 2) }</small>

                            <h3>{ data.name }</h3>

                            <ul>
                                {
                                    data.types.map((el, i) => <li key={ i }>{ el.type.name }</li>
                                    )
                                }

                            </ul>
                        </div>
                    </article >
                </Link>
            }
        </>

    )
}
