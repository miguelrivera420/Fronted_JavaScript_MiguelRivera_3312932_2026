import { useState } from 'react'

function Informacion() {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function consultarInformacion() {
    setCargando(true)
    setInfo(null)
    setError('')

    const response = await fetch('http://localhost:3000/informacion')
    const data = await response.json()

    if (response.ok) {
      setInfo(data)
    } else {
      setError('La API respondió con error: ' + response.status)
    }

    setCargando(false)
  }

  return (
    <div>
      <h2>Información</h2>
      <button onClick={consultarInformacion}>Consultar /informacion</button>

      {cargando && <p>Cargando...</p>}
      {info && (
        <div>
          <p>Servicio: {info.servicio}</p>
          <p>Versión: {info.version}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Informacion