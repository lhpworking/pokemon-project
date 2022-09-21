import React from 'react'
import { Link } from 'react-router-dom'
import { HOME_PATH } from '../constants/path'

export default function Header() {
    return (
        <header>
            <div className="container-fluid">
                <Link to={ HOME_PATH } className="logo">
                    <img src="/img/pngwing.com.png" alt="pokemon" />
                </Link>
            </div>
        </header>
    )
}
