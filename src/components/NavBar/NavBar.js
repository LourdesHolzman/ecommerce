import { CartWidget } from '../CartWidget/CartWidget'
import '../NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className='header'>
        <h1>Erde Frisch</h1>

        <nav>
            <ul>
                <li>NOSOTROS</li>
                <li>PRODUCTOS</li>
                <li>CONTACTO</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
    )
}

