import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Sidebar nombre="Miguel Rivera"></Sidebar>
      <Dashboard Tarjeta="Miguel Rivera"></Dashboard>
    </div>
  )
}
export default App