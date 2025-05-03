import { collection, getDocs } from "firebase/firestore/lite";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
//import { toast } from "react-toastify";

const AppContext = createContext(); // 1.

export const useAppContext = () => useContext(AppContext); // 5.

export const ContextProvider = (props) => { // 2.

    const [carrito, setCarrito] = useState([]);
    const [cantidadItems, setCantidadItems] = useState(0);
    const [precioItems, setPrecioItems] = useState(0);
    const [productos, setProductos] = useState([]);
    const productCollection = collection(db, "productos");


    useEffect(() => {
        const totalCantidad = carrito.reduce((acc, el) => acc + el.cantidad, 0);
        const totalPrecio = carrito.reduce((acc, el) => acc + el.cantidad * el.precio, 0);
        setCantidadItems(totalCantidad);
        setPrecioItems(totalPrecio);
    }, [carrito]);

    useEffect(() => {
        getDocs(productCollection)
            .then(snapshot => {
                const arrayDeProductos = snapshot.docs.map(el => el.data());
                setProductos(arrayDeProductos);

            })
            .catch(err => console.error(err));
    }, []);



    function agregarAlCarrito(prod, cantidad) {
        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        if (carrito.some(el => el.id === prod.id)) {
            const newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad
                    }
                } else {
                    return element;
                }
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        }

        //toast("Producto agregado correctamente");


    }



    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, cantidadItems, precioItems, productos, setCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};