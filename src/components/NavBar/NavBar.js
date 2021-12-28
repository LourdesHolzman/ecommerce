import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className='header'>
        <Link to="/"><img src='https://i.ibb.co/Mh6N0c3/gg.png' style={{width:'191.7px', height:'56.4px', margin:'30px'}} /></Link>

        <nav>
            <ul>
                <li><Link to="productos/ANTI-AGE">ANTI-AGE</Link></li>
                <li><Link to="productos/ACTIVOS CONCENTRADOS y SERUM">ACTIVOS CONCENTRADOS y SERUM</Link></li>
                <li><Link to="productos/LÍNEA TERAPÉUTICA">LÍNEA TERAPÉUTICA</Link></li>  
            </ul>
        </nav>

        <CartWidget/>

    </header>
    )
}

