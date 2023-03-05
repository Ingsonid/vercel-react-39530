import { Link } from "react-router-dom"
//Context
import { useDarkModeContext } from "../../Context/DarkModeContext"



const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()

  return (
   <div className={`card mb-3 cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
        <img src={`${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                <h5 className="card-title colorText">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text precio">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                {/* <button className="btn btn-danger"><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button> */}
                <button className={`btn ${darkMode ? 'btn-primary' : 'btn-danger'}`}><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
      </div>

  )
}

export default Item;
