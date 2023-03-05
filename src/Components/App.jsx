import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar';
// import Cardwidget from './Cardwidget/Cardwidget';
import ItemCount from './ItemCount/ItemCount';
import Dolar from './Dolar/Dolar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Contacto from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
import { Checkout } from './Checkout/Checkout';

import { cargarBDD } from '../firebase/firebase';

//Toastify
import { ToastContainer } from 'react-toastify';


//Context
import { DarkModeProvider } from '../Context/DarkModeContext';
import { CarritoProvider } from '../Context/CarritoContext';



// import './App.css';



// diferencias de html normal  y en jsx

/*
class => className
<input> => <input/>
variables  ${} => {}
style = "nombreClase" => style= {{"nombrePorpiedad"}}
usar camelCase para propiedades
*/


function App() {
 

 //cargarBDD()
  return (

   <>

   <BrowserRouter>
   <CarritoProvider>
   <DarkModeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes> 

      <ToastContainer/>
      </DarkModeProvider> 
      </CarritoProvider>
    </BrowserRouter>
          
   
          {/* <ItemCount  valInicial={1} stock={10} /> */}
          {/* <Cardwidget   cantidadCarrito={10} /> */}

          {/* <Dolar/> */}
         


   </>
  
  );
}

export default App;
