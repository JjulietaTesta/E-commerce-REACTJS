import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="logo__container">
                    <h1 className="logo__title">LA STROKERIA</h1>
                    <img src="./imgs/lp.png" className="logo" alt="logo"/>
                </div>


                <nav className="navbar">
                    <Link to='/' className='navbar__link'>INICIO</Link> 
                    <Link to='/productos/pop' className="navbar__link">POP</Link>
                    <Link to='/productos/rock' className="navbar__link">ROCK</Link>
                    <Link to='/productos/indie' className="navbar__link">INDIE</Link>
                    <CartWidget/>
                </nav>
                
                
            </div>
        </header>
    )

}