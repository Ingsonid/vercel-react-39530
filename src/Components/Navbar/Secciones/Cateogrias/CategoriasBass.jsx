import { Link } from "react-router-dom";
import React from "react";

const CategoriasBass = React.memo(() => {
  return (
    <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="btn btn-link-disabled">Bajos</button> 
            </a>
            <ul className="dropdown-menu">
            
              {/* <li><hr className="dropdown-divider" /></li> */}
          
            <li><Link className="dropdown-item" to={"/category/Warwick-Bass"}>Warwick</Link></li>
            <li><Link className="dropdown-item" to={"/category/Dingwall-Bass"}>Dingwall</Link></li>
            <li><Link className="dropdown-item" to={"/category/Sadowsky-Bass"}>Sadowsky</Link></li>
            <li><Link className="dropdown-item" to={"/category/Spector-Bass"}>Spector</Link></li>
            </ul>
          </li>

          


  );
})

export default CategoriasBass;
