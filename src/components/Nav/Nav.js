import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

import Search from './Search'


const Nav = () => (
    <nav>
        <div id='logo'>
            <Link to='/' style={linkStyle}><h1>showplex</h1></Link>
        </div>
        <Search />
        {/* <div id='search-container'>
            <i className='fa fa-search' id='search-icon'></i>
            <input type='text' placeholder='Find Shows'/>
        </div> */}
    </nav>
)
const linkStyle = {
    textDecoration: 'none',
    color: 'initial'
}
export default Nav