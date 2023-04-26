import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BasicExample from "../Spinner/Spinner"
import Detail from "../Detail/Detail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/Config"
import './ItemDetailContainer.css'



const ItemDetailContainer = ()=> {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()
    
    
    
    useEffect(()=>{

        setLoading(true)

        const docRef = doc(db, "productos", itemId)
        
        getDoc(docRef)
            .then ((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
        
       
            .finally(()=>{
                setLoading(false)
            })
    },[])   

        return (
            <div className="detail-container">
                {
                    loading
                    ? <BasicExample />
                    : <Detail item={item} />
                }
            </div>
        )
    





}

export default ItemDetailContainer