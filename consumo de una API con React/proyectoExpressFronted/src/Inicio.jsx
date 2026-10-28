import { useState } from 'react'

function Inicio() {
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function consultarInicio() {
    setCargando(true)
    setMensaje('')
    setError('')

    const response = await fetch('http://localhost:3000/inicio')
    const data = await response.json()

    if (response.ok) {
      setMensaje(data.mensaje)
    } else {
      setError('La API respondió con error: ' + response.status)
    }

    setCargando(false)
  }

  return (
    <div>
      <h2>Inicio</h2>
      <button onClick={consultarInicio}>Consultar /inicio</button>

      {cargando && <p>Cargando...</p>}
      {mensaje && <p>{mensaje}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Inicio