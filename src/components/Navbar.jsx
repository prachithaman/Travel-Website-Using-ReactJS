import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { MenuItems } from './MenuItems'

const Navbar = () => {
  return (
    <nav className='NavbarItems'>
       <h1 className='navbar-logo'>Trippy</h1>

        <ul className="nav-menu">
            {MenuItems.map((item,index)=>{

                return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                    </li>
                )
            })}

            <button>Sign Up </button>
            
        </ul>
    </nav>
  )
}

export default Navbar