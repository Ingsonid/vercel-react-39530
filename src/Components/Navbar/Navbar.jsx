import Cardwidget from "../Cardwidget/Cardwidget";
import Secciones from "./Secciones/Secciones";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";


const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <Secciones/>
          
         
        </ul>
        <Cardwidget/>
        <BotonDarkMode/>
      </div>

     
    
    </div>
  </nav>



  );
}

export default Navbar;
