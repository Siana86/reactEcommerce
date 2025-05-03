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
          <Route path="/ordenCreada" element={<img src='https://res.cloudinary.com/dufkpsvbz/image/upload/v1746295867/Orden_creada_wi3bxs.jpg'></img>} />
          <Route path="*" element={<img src='https://res.cloudinary.com/dufkpsvbz/image/upload/v1746295526/Error_404_x69xzy.jpg'></img>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
};

export default App;