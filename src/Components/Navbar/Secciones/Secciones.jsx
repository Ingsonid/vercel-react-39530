import { Link } from "react-router-dom";

import CategoriasGuitar from "./Cateogrias/CategoriasGuitars";
import CategoriasBass from "./Cateogrias/CategoriasBass";
const Secciones = () => {
  return (
    <>
    <li className="nav-item colorNav">
                <Link className="nav-link" to={"/"} ><button className="btn btn-link-disabled">Inicio</button></Link>
            </li>

          <CategoriasGuitar/>
          <CategoriasBass/>
          <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}><button className="btn btn-link-disabled">Contacto</button></Link>
            </li>
  </>
  );
}

export default Secciones;
