import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className='header'>
        <img src='https://i.ibb.co/Mh6N0c3/gg.png' style={{width:'191.7px', height:'56.4px', margin:'30px'}} />

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

