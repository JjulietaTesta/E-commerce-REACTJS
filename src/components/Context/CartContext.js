import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  console.log(cart)

  const agregarAlCarrito = (item) => {
    setCart([...cart, item])
  }

  const quitarDeCarrito = (id) => {
    setCart ( cart.filter((prod) => prod.id !== id))
  }

  const isInCart = (id) => {
    return cart.some((prod)=> prod.id === id )
  }

  const totalCarrito = () => {
    return cart.reduce((acc,prod) => acc + prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCart ([])
  }
    
  
    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCarrito,
            vaciarCarrito,
            quitarDeCarrito
          }}>
            {children}

        </CartContext.Provider>
    )
}