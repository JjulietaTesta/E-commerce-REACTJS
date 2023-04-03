import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './Detail.css'
import { Link } from 'react-router-dom'


const Detail = ({item}) =>{

    const { agregarAlCarrito, isInCart } = useContext(CartContext)
 
    const [cantidad, setCantidad] = useState(1)
    
    const handleAgregar = () =>{
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div>
            <h2>{item.name} </h2>
            <hr/>
            <img className="detail__img" src={item.img} alt={item.name}/>
            <p> {item.description}</p>

            
            {   item.stock === 0
                ? <h3>No hay stock de este producto <Link to='/' className='btn btn-primary'> Volver </Link></h3> 
                : isInCart(item.id)
                    ? <Link to="/cart" className='btn btn-success'> Finalizar compra </Link>
                    : <ItemCount 
                    max={item.stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    agregar={handleAgregar}
                    />

            }
            
           
        </div>
        
    )


}

export default Detail