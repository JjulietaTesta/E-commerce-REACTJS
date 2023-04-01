import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./CartWidget.css"
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'


export const CartWidget = () => {
    const { totalCarrito } = useContext(CartContext)
    
    return (
        <Link to="/cart" className="cart-widget">
            <AiOutlineShoppingCart className="cart-icon"/>
            <span>{totalCarrito()}</span>
        </Link>
    )

}