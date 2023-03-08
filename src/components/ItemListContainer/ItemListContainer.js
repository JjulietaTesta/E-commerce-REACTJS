import "./ItemListContainer.css"

export const ItemListContainer = ({greeting}) => {

    return (
        <div className="list__container">
            <h2 className="list__container__name"> Bienvenido a La Strokeria, tu tienda de vinilos</h2>
            <hr/>

            <p className="greeting">{greeting}</p>
        </div>
    )

}