import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ResumenCarrito from './components/Car/Carrito';
import { ContextProvider } from './context/context';
import OrdenDeCompra from './components/OrdenDeCompra/OrdenDeCompra';



function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/carrito" element={<ResumenCarrito />} />
          <Route path="/formularioOrden" element={<OrdenDeCompra />} />
          <Route path="*" element={<p> 404 Not found </p>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
};

export default App;