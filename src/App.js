import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='*' element={<h2> ERROR 404: PÁGINA NO ENCONTRADA</h2>} > </Route>
      </Routes>
    </BrowserRouter>
      
    );
    
}
    

    

       
      

export default App;
