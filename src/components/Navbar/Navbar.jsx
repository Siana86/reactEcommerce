import CartWidget from '../CarWidget/CartWidget.jsx';
import './Navbar.css';


function Navbar() {

  return (

    <header>
      <nav className='navBar'>
        <ul className='navBarItems'>
          <li> Inicio</li>
          <li>Zapatillas</li>
          <li>Indumentaria</li>
          <li>Contactos</li>
        </ul>
        <CartWidget />
      </nav>
    </header>


  )
};

export default Navbar;