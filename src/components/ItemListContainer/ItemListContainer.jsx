import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router';
import { useAppContext } from '../../context/context';


function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const { productos } = useAppContext();
  const { categoria } = useParams();



  useEffect(() => {

    if (productos.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

  }, [productos, categoria]);

  return (

    loading ?

      <Loader />

      :

      <div >
        <div className="container">
          {
            categoria ?

              productos.filter(el => el.categoria === categoria).map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })

              :
              productos.map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })}

        </div>
      </div>
  );
};

export default ItemListContainer;

