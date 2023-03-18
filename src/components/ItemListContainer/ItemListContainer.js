import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import BasicExample from "../Spinner/Spinner"
import "./ItemListContainer.css"


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
   

    useEffect(() => {
        pedirDatos()
         .then ((res)=>{
            setProductos (res)
        })
        
         .catch ((err)=>{
           console.log (err)
        })

         
         .finally(()=>{
           setLoading(false)
         })
          
    }, []) 
    
    
        return (
        <div className="container my-5">
            <h2 className="list__container__name"> Bienvenido a La Strokeria, tu tienda de vinilos</h2>
            <hr/>
            
            {
                loading 
                    ? <BasicExample />
                    :<ItemList productos={productos}/>
            
            }
    </div>
    )


}