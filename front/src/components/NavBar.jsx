/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import '../index.css'

export default function NavBar({navTheme}) {

    return (
        <nav style={navTheme}>
            <Link to='/'>
                <h1 style={navTheme}>Suite Store</h1>
            </Link>
            <Link to='/products' className="nav-links" style={navTheme}>Products</Link>    
            <Link to='/categories' className="nav-links" style={navTheme}>Categories</Link>    
            <Link to='/history' className="nav-links" style={navTheme}>History</Link>
        </nav>
    )
}

// #484f58
