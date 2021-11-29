import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';



function App() {

  return (
   
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/nosotros" element={ <ItemListContainer greeting='Cosmética natural'/> } />
        <Route path="/productos" element={ <ItemDetailContainer/> } />
        <Route path="/detail" element={ <ItemDetailContainer/> } />
        <Route path="/cart" element={ <CartView/> } />

      </Routes>
      

    </BrowserRouter>
    
  );
}

export default App;
