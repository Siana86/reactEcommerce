import { Link } from 'react-router';
import CartWidget from '../CarWidget/CartWidget.jsx';
import './Navbar.css';


function Navbar() {

  return (

    <header>
      <nav className='navBar'>
        <ul className='navBarItems'>          
          <Link to="/">
            <li> Inicio</li>
          </Link>
          <Link to="/categoria/computadora">
            <li> Computadores</li>
          </Link> 
          <Link to="/categoria/celular">
            <li> Celular</li>
          </Link>           
          
        </ul>
        <Link to="/carrito">
          <CartWidget />
        </Link>
        
      </nav>
    </header>


  )
};

export default Navbar;