import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import BasicExample from "../Spinner/Spinner"
import "./ItemListContainer.css"


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
   

    useEffect(() => {

        setLoading(true)
        
        pedirDatos()
         .then ((res)=>{
            if (categoryId){
            setProductos (res.filter((prod)=> prod.category === categoryId))
            } else {
                setProductos(res)
            }
        })
        
         .catch ((err)=>{
           console.log (err)
        })

         
         .finally(()=>{
           setLoading(false)
         })
          
    },[categoryId]) 
    
    
        return (
        <div className="container my-5">
            
                <h2 className="list__container__name"> Bienvenido a La Strokeria, tu tienda de vinilos</h2>
            
            <hr/>
            
            {
                loading 
                    ? <BasicExample />
                    : <ItemList productos={productos}/>
            
            }
    </div>
    )


}