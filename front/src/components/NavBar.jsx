import { Link } from 'react-router-dom'

import '../index.css'

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>
                <h1>Suite Store</h1>
            </Link>
            <Link to='/products' className="nav-links">Products</Link>    
            <Link to='/categories' className="nav-links">Categories</Link>    
            <Link to='/history' className="nav-links">History</Link>
        </nav>
    )
}
