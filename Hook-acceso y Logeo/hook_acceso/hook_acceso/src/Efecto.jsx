import { useEffect } from "react"
function Efecto(){
    useEffect(()=>{
        alert("el componente se ha cargado")
    },[])
    return(
        <div>
            <h1>Hook UseState</h1>

        </div>
    )
}
export default Efecto