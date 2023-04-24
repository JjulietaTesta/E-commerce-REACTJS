import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { BsFillTrash3Fill } from "react-icons/bs"
import './Cart.css'
import { Link } from "react-router-dom"




export const Cart = () => {

    const { cart, vaciarCarrito, quitarDeCarrito, totalCompra } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2> No hay productos para mostrar</h2>
                <hr/>
                <Link to='/' className="btn btn-primary"> Volver </Link>

            </div>
        )
    }
    
    return (
        <div className="container my-5">
            <h2 className="cart-title">Estas llevando:</h2>
            <hr/>

            {
                cart.map((item) => (
                <div className="product-container" key={item.id} >
                    <h3 className="product-name">{item.name}</h3>
                    <hr/>
                    <img  className="cart__img" src={item.img} alt={item.name}/>
                    <div>
                        <small>Cantidad: {item.cantidad}</small>
                        <small>Precio: {item.price}</small>
                    </div>
                    <button className="btn-delete" onClick={()=> quitarDeCarrito(item.id)}> <BsFillTrash3Fill className="trash-icon"/> </button>
                        
                </div>    
                ))
            }
            
            <div className="total-container">
                <h4> TOTAL CARRITO: ${totalCompra()} </h4>
                <hr/>

                <button onClick={vaciarCarrito} className="cart-btn-del"> VACIAR CARRITO </button>
                <Link to="/checkout" className="cart-btn-ok"> FINALIZAR COMPRA </Link>

            </div>

        </div>
    )
}