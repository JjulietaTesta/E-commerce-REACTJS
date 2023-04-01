import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import BasicExample from "../Spinner/Spinner"
import Detail from "../Detail/Detail"



const ItemDetailContainer = ()=> {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()
    
    
    
    useEffect(()=>{

        setLoading(true)
        
        pedirDatos()
            .then((res)=> {
                setItem (res.find((prod) => prod.id === Number(itemId)))
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])   

        return (
            <div className="container my-5">
                {
                    loading
                    ? <BasicExample />
                    : <Detail item={item} />
                }
            </div>
        )
    





}

export default ItemDetailContainer