import { useContext, useState} from "react"
import { CartContext } from "../Context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../Firebase/Config"
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Checkout.css'

const validation = Yup.object().shape({
    nombre: Yup.string()
               .required("Este dato es requerido")
               .min(6, "Mínimo 6 caracteres")
               .max(20, "Máximo 20 carateres"),
    direccion: Yup.string()
               .required("Este dato es requerido")
               .min(6, "Mínimo 6 caracteres")
               .max(20, "Máximo 20 carateres"),
    email: Yup.string()
               .email("El email no es válido") 
               .required("Este dato es requerido")
})

 export const Checkout = () => {

    const { cart, totalCarrito, vaciarCarrito } = useContext (CartContext)

    const [orderId, setOrderId] = useState(null)
    
    

    const crearOrden = (values)=> {
        
        
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
                <div className="checkout-container">
                    <h2>Tu compra se realizó correctamente</h2>
                    <hr/> 
                    <p>Guarda tu id de orden: <strong> {orderId}</strong> </p>

                    <div className="div-btn">
                    <Link to='/' className="btn-checkout"> Volver </Link>
                    </div>
                </div>
        )
    }
    
        if (cart.length === 0) {
            return <Navigate to= "/" />
        }
        
       
    return(
        <div className="container my-5 form-container">
            <h2 className="form-title">Ingresá tus datos</h2>
            <hr/>

            <Formik
                validationSchema={validation}
                initialValues={{
                nombre: '',
                direccion: '',
                email: ''}} 
                onSubmit={crearOrden}          
            >

                {
                    ({values, errors, handleChange, handleSubmit})=> (
                        <form onSubmit={handleSubmit}>
                            <input
                            value={values.nombre}
                            type='text'
                            className="form-control my-2"
                            placeholder="Ingresa tu nombre"
                            onChange={handleChange}
                            name="nombre"
                      
                        />
                        {errors.nombre && <p style={{color: 'red' }}>{errors.nombre}</p>}
                            <input
                            value={values.direccion}
                            type='text'
                            className="form-control my-2"
                            placeholder="Ingresa tu dirección"
                            onChange={handleChange}
                            name="direccion"
                        />
                        {errors.direccion && <p style={{color: 'red' }}>{errors.direccion}</p>}
                            <input
                            value={values.email}
                            type='email'
                            className="form-control my-2"
                            placeholder="Ingresa tu e-mail"
                            onChange={handleChange}
                            name="email"
                        />
                        {errors.email && <p style={{color: 'red' }}>{errors.email}</p>}
        
                        <button className="form-btn" type="submit"> Enviar </button>
                    </form>
          
                    )
                }

            </Formik>

        </div>
    )

}

