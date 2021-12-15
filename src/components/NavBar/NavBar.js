import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className='header'>
        <h1>Erde Frisch</h1>

        <nav>
            <ul>
                <li><Link to="nosotros">NOSOTROS</Link></li>
                <li><Link to="productos">PRODUCTOS</Link></li>
                <li><Link to="contacto">CONTACTO</Link></li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
    )
}

