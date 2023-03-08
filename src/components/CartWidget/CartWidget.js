import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./CartWidget.css"

export const CartWidget = () => {

    return (
        <div className="cart-widget">
            <AiOutlineShoppingCart className="cart-icon"/>
            <span>0</span>
        </div>
    )

}