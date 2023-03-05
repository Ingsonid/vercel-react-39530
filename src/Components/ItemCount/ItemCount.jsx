import { useState } from "react"
import {toast} from 'react-toastify'

const ItemCount = ({valInicial,stock, onAdd}) => {

      //Var    , forma mod var   estado inicial
const [contador,setContador]=useState(valInicial)
const AumentarContador = () => setContador(contador+1)
const DisminuirContador = () => setContador(contador-1)
const agregarCarrito = () => {
  onAdd(contador)
  toast(`🦄 Agregaste ${contador} productos al carrito!`) 
}

  return (
    <>
        <button className="btn btn-dark" onClick={()=> (contador < stock) && AumentarContador()}> + </button>
        {contador}
        <button className="btn btn-dark" onClick={()=> (contador > valInicial) && DisminuirContador()}> - </button>

        <button className="btn btn-danger" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  );
}

export default ItemCount;
