import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CarritoContext";
const Cardwidget = ({cantidadCarrito}) => {
  const {getItemQuantity} = useCarritoContext()
  return (
    <>
     <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-dark">Carrito</button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
    </>
  );
}

export default Cardwidget;
<i class="bi bi-cart"></i>