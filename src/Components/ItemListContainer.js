import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  /* ACA VA LA LOGICA 
  si la info esta a mano : no hago mucho
  const productos = []

  const productos filtrados = 
  */

  /* si la info no esta a mano : hay que hacer un estado y un efecto
   */

 /*  const [estado, setEstado] = useState([]) */;
  /* USar useParams tambien aca */

  /* PLANTILLA DE ASYNC MOCK */

/*   useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
      //  resolve( los productos que voy a usar );
      }, 2000);
    });

    pedido
      .then((resultados) => {
       // setEstado(resultado)
        console.log(resultado);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <>
   {/*  <ItemList loquevamosaMostrar={productos} /> */}
      <h1>{props.greeting}</h1>
    </>
  );
};

export default ItemListContainer;
