import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import './App.css'
import Efecto from "./Efecto"
import Hook from "./Hook"
import TablaRoles from "./TablaRoles"
import TablaUsuarios from "./TablaUsuarios"
import ActualizarRoles from "./ActualizarRoles"

function App() {
 
  return (
      <BrowserRouter>  
      <Routes>
        <Route path='/' element={<Efecto></Efecto>}></Route>
        <Route path='/hook' element={<Hook></Hook>}></Route>
        <Route path='/roles' element={<TablaRoles></TablaRoles>}></Route>
        <Route path='/usuarios' element={<TablaUsuarios></TablaUsuarios>}></Route>
        <Route path='/actualizarRol/:id' element={<ActualizarRoles></ActualizarRoles>}></Route>
        

        

      </Routes>
    </BrowserRouter>
  )
}

export default App
