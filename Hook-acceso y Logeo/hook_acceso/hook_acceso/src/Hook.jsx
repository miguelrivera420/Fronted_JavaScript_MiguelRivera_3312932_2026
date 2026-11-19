import { useEffect,useState } from "react";

function Hook(){
    const [contador , setContador]= useState(0)
    useEffect(()=>{
        alerta()
    },[contador])
    function alerta(){
        alert("el contador cambio", contador)
    }
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={()=>setContador(contador+1)}>Incrementar</button>

        </div>
    )
}
export default Hook;