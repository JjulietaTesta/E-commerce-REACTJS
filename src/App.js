import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout'



function App() {
 
  
  
  return (
    
    <CartProvider>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='detail/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='*' element={<h2> ERROR 404: PÁGINA NO ENCONTRADA</h2>} > </Route>
        </Routes>
      </BrowserRouter>
      
    </CartProvider>
    
    
    );
    
}
    

    

       
      

export default App;
