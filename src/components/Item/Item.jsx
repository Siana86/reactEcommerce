import { Link } from 'react-router';

import './Item.css';
import { useAppContext } from '../../context/context';

function Item({ producto }) {

    const { id, nombre, precio, stock, img } = producto;

    const { agregarAlCarrito } = useAppContext();

    return (

        <div className="card" >
            <img src={img} className="card-img-top" alt={nombre}></img>
            <div className="card-body">
                <h3 className="card-header">{nombre}</h3>
                <h5 >Precio: ${precio}</h5>
                <p className='card-text'>Quedan {stock} disponibles</p>
                <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto, 1)}>Agregar al carrito</button>
                <Link to={`/detalle/${id}`}>
                    <button className="btn btn-secondary my-2">Ver detalle</button>
                </Link>
            </div>
        </div>

    );
};

export default Item;