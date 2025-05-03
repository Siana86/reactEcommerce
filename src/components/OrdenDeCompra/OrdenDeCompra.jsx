import { addDoc, collection } from "firebase/firestore/lite";
import { useState } from "react";
import { useNavigate } from "react-router";
import { db } from "../../../firebaseConfig";

const ordenesCollection = collection(db, "ordenes");

const OrdenDeCompra = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        direccion: "",
        telefono: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordenesCollection, formData)


        navigate("/gracias"); // TODO AGREGAR LA RESPUES DE ORDEN OK
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Completa tus datos</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Nombre completo</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Dirección de entrega</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block font-medium">Teléfono</label>
                    <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
};

export default OrdenDeCompra;
