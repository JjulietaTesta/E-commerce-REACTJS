import './Detail.css'

const Detail = ({item}) =>{
    return (
        <div>
            <h2>{item.name} </h2>
            <hr/>
            <img className="detail__img" src={item.img} alt={item.name}/>
            <p> {item.description}</p>
        </div>
    )
}

export default Detail