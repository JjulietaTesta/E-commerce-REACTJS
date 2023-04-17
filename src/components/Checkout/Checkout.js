import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../Firebase/Config"

 export const Checkout = () => {

    const { cart, totalCarrito, vaciarCarrito } = useContext (CartContext)

    const [orderId, setOrderId] = useState(null)
    
    const [values, setValues] = useState ({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleSubmit = (e)=> {
        e.preventDefault()

        if (values.nombre.length < 6) {
            alert ("Minimo 6 caracteres")
            return
        }

        if (values.direccion.length < 6) {
            alert ("Minimo 6 caracteres")
            return
        }
        if (values.email.length < 8) {
            alert ("Minimo 8 caracteres")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito()
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }

        if (orderId) {
            return (
                <div className="container my-5">
                    <h2>Tu compra se realizó correctamente</h2>
                    <hr/> 
                    <p>Guarda tu id de orden: {orderId}</p>
                </div>
        )
    }
    
        if (cart.length === 0) {
            return <Navigate to= "/" />
        }
        
        
    

    const handleInputChange = (e) =>{
     
        setValues ({
            ...values,
            [e.target.name] : e.target.value
        })
    }

   
    return(
        <div className="container my-5">
            <h2>Ingresá tus datos</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    value={values.nombre}
                    type='text'
                    className="form-control my-2"
                    placeholder="Ingresa tu nombre"
                    onChange={handleInputChange}
                    name="nombre"
                   

                />
                 <input
                    value={values.direccion}
                    type='text'
                    className="form-control my-2"
                    placeholder="Ingresa tu dirección"
                    onChange={handleInputChange}
                    name="direccion"
                />
                 <input
                    value={values.email}
                    type='email'
                    className="form-control my-2"
                    placeholder="Ingresa tu e-mail"
                    onChange={handleInputChange}
                    name="email"
                />

                <button className="btn btn-success" type="submit"> Enviar </button>
            </form>



            

        </div>
    )

}

