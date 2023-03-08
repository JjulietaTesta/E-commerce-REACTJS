import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <div>
      <header>
       <Navbar/>
       <ItemListContainer greeting={"Feliz compra"}/>
      </header>
    </div>
  );
}

export default App;
