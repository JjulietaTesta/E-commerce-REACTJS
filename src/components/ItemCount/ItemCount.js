import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
       cantidad < max && setCantidad(cantidad + 1)
    }

    return (
       <div className="counter-container">
         <button onClick={handleRestar}  className="btn-counter"> - </button>
         <span className="counter"> {cantidad} </span>
         <button onClick={handleSumar} className="btn-counter"> + </button>

         <br/>
         <button onClick={agregar} className="btn-add"> Agregar al carrito </button>
       </div>
    )
}

export default ItemCount