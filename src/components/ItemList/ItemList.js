import './ItemList.css'


 export const ItemList = ({productos})=> {
    return (
        <div className="row">
                { productos.map((prod)=>
                  (<div key={prod.id} className="col-3 m-3 item__container">
                  <p className='prod__description'>{prod.description}</p>
                  <hr/>
                  <img src={prod.img} alt={prod.name} className='item__img'/>
                  <p className='prod__name'>{prod.name}</p>
                  <p>${prod.price}</p>
                  <button className="button">Ver más</button>
                  </div>)
                  )
                }
          </div>
    )
}