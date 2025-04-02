import { Link } from 'react-router';
import './Item.css';

function Item({ producto, filtrarProducto }) {

    const { id, nombre, precio, stock } = producto;

    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad: 1,
        };

        console.log("Vas a agregar", nuevoProducto);

        // console.log("Vas a agregar", {...prod, cantidad: 1});

        // Este es un mini spoiler de cómo vamos a agregar al carrito
        // const array = [1,2,3];
        // array.push(4);
        // console.log([...array, 5])
    };

    return (
        <div className="card">
            <div className="card-body">
            <h3 className="card-header">{nombre}</h3>
            <h5 >Precio: ${precio}</h5>
            <p className='card-text'>Quedan {stock} disponibles</p>
            <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`} >
                <button className="btn btn-secondary my-2" onClick={() => filtrarProducto(producto)}>Ver detalle</button>
            </Link>
            </div>
            
        </div>
    );
};

export default Item;