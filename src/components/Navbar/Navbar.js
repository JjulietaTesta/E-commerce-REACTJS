import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <div className="logo__container">
                    <h1 className="logo__title">LA STROKERIA</h1>
                    <img src="./imgs/lp.png" className="logo" alt="logo"/>
                </div>


                <nav className="navbar">
                    <p className="navbar__link">POP</p>
                    <p className="navbar__link">ROCK</p>
                    <p className="navbar__link">INDIE</p>
                    <CartWidget/>
                </nav>
                
                
            </div>
        </header>
    )

}