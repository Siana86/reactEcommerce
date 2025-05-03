import { useNavigate } from "react-router";
import { useAppContext } from "../../context/context";


const ResumenCarrito = () => {
    const { carrito, precioItems, setCarrito } = useAppContext();
    const navigate = useNavigate();

    const eliminarItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    };

    const finalizarCompra = () => {
        navigate("/formularioOrden");
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Resumen del Carrito</h2>

            {carrito.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío.</p>
            ) : (
                <div className="space-y-4">
                    {carrito.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <h3 className="font-semibold">{item.nombre}</h3>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio unitario: ${item.precio}</p>
                                <p>Subtotal: ${item.precio * item.cantidad}</p>
                            </div>
                            <button
                                onClick={() => eliminarItem(item.id)}
                                className="text-red-600 hover:underline"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}

                    <div className="text-right mt-6">
                        <p className="text-xl font-semibold">Total a pagar: ${precioItems}</p>
                        <button
                            onClick={finalizarCompra}
                            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumenCarrito;
