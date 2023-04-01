import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { BsFillTrash3Fill } from "react-icons/bs"


export const Cart = () => {

    const { cart, vaciarCarrito, quitarDeCarrito } = useContext(CartContext)
    return (
        <div className="container my-5">
            <h2>Estas llevando</h2>
            <hr/>

            {
                cart.map((item) => (
                <div key={item.id} >
                    <h3>{item.name}</h3>
                    <img src={item.img} alt={item.name}/>
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

            <button onClick={vaciarCarrito} className="btn btn-danger m-2"> Vaciar Carrito </button>

        </div>
    )
}