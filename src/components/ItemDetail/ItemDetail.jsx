import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { Link, useParams } from 'react-router';
import { useAppContext } from '../../context/context';

function ItemDetail() {

    const { id } = useParams();
    const { productos, agregarAlCarrito } = useAppContext();

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState(null);
    const [contador, setContador] = useState(1);



    useEffect(() => {
        if (productos.length > 0) {
            const productoAMostrar = productos.find(el => el.id === id || el.id === parseInt(id));
            setProducto(productoAMostrar);
            setLoading(false);
        }

    }, [productos, id]);

    return (

        loading ?
            <Loader />

            :

            <div className="card mb-3">
                {
                    producto ?

                        <>
                            <img src={producto.img} className="card-img-top" alt={producto.nombre}></img>
                            <h3 className="card-title">{producto.nombre}</h3>
                            <div className="card-body">
                                <h5>Precio: <b>${producto.precio}</b></h5>
                                <h5>Categoria: <b>{producto.categoria.toUpperCase()}</b></h5>
                                <p><b>{producto.descripcion}</b></p>
                                <p>Quedan <b>{producto.stock}</b> disponibles</p>

                                <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />

                                <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto, contador)}>Agregar al carrito</button>
                                <Link to="/">
                                    <button className="btn btn-secondary my-2">Volver al inicio</button>
                                </Link>
                            </div>

                        </>

                        :

                        <p>Producto no encontrado con el id {id}</p>

                }
            </div>
    );
};

export default ItemDetail;