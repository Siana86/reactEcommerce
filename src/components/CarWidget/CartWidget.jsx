import { IoCartOutline } from "react-icons/io5";
import './CartWidget.css';
import { useAppContext } from "../../context/context";

function CartWidget() {

    const { cantidadItems, precioItems } = useAppContext();

    return (
        <>
            <p><IoCartOutline />{cantidadItems}</p>
            <p>{precioItems}</p>
        </>
    );
};

export default CartWidget;