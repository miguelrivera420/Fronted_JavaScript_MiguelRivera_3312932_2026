import { useState } from 'react'

function Solicitudes() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  async function enviarFormulario(e) {
    e.preventDefault()
    setCargando(true)
    setMensaje('')
    setError('')

    const response = await fetch('http://localhost:3000/solicitudes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, correo })
    })

    const data = await response.json()

    if (response.ok) {
      setMensaje(data.mensaje)
      setNombre('')
      setApellido('')
      setCorreo('')
    } else {
      setError(data.error)
    }

    setCargando(false)
  }

  return (
    <div>
      <h2>Solicitudes</h2>

      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {cargando && <p>Enviando...</p>}
      {mensaje && <p>{mensaje}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Solicitudes