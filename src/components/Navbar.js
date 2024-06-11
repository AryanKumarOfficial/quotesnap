import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <Link to='/'>QuoteSnap</Link>
            </h1>
            <ul>
                <li>
                    <NavLink
                        className={`${(e) => {
                            return e.isActive ? 'active' : ''
                        }}`}
                        to='/'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`${(e) => {
                            return e.isActive ? 'active' : ''
                        }}`}
                        to='/quotes'
                    >
                        Quotes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={`${(e) => {
                            return e.isActive ? 'active' : ''
                        }}`}
                        to='/about'
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar