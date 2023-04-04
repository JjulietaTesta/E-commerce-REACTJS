import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import BasicExample from "../Spinner/Spinner"
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../Firebase/Config"


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
   

    useEffect(() => {

        setLoading(true)
        
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef

        getDocs (q)
         .then((res)=>{
            setProductos(res.docs.map((doc)=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
         })
         .finally(()=> setLoading(false))
        
          
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