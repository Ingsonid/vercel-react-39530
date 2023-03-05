import { Link } from "react-router-dom";
import React from "react";

const CategoriasGuitar = React.memo(() => {
  return (
    <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn-link-disabled">Guitarras</button> 
            </a>
            <ul className="dropdown-menu">
             
            <li><Link className="dropdown-item" to={"/category/Charvel-Guitars"}>Charvel</Link></li>
            <li><Link className="dropdown-item" to={"/category/Jackson-Guitars"}>Jackson</Link></li>
            <li><Link className="dropdown-item" to={"/category/Chapman-Guitars"}>Chapman</Link></li>
            <li><Link className="dropdown-item" to={"/category/Prs-Guitars"}>Prs Guitars</Link></li>
            </ul>
          </li>

          


  );
})

export default CategoriasGuitar;
