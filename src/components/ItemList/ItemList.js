import { Link } from 'react-router-dom'
import './ItemList.css'


 export const ItemList = ({productos})=> {
    return (
        <div className="row main__container">
                { productos.map((prod)=>
                  (<div key={prod.id} className="col-3 m-3 item__container">
                  <p className='prod__description'>{prod.name}</p>
                  <hr/>
                  <img src={prod.img} alt={prod.name} className='item__img'/>
                  <p className='prod__text'>Categoría:{prod.category}</p>
                  <p className='prod__text'>${prod.price}</p>
                  <Link to={`/detail/${prod.id}`} className="button">Ver más</Link>
                  </div>)
                  )
                }
          </div>
                  
    )
}