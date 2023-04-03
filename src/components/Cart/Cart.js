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
            <h2>Estas llevando</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} >
                    <h3>{item.name}</h3>
                    <img  className="cart__img" src={item.img} alt={item.name}/>
                    <div>
                        <small>Cantidad: {item.cantidad}</small>
                        <small>Precio: {item.price}</small>
                    </div>
                    <p>Precio total: {item.price * item.cantidad}</p>
                    <button className="btn btn-danger" onClick={()=> quitarDeCarrito(item.id)}> <BsFillTrash3Fill/> </button>
                    <hr/>    
                </div>    
                ))
            }

            <h4> TOTAL: {totalCompra()} </h4>

            <button onClick={vaciarCarrito} className="btn btn-danger m-2"> Vaciar Carrito </button>

        </div>
    )
}