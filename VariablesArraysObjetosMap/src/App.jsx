
import './App.css';


import Actividad1Libro from './Actividad1Libro';
import Actividad2Ciudades from './Actividad2Ciudades';
import Actividad3Canciones from './Actividad3Canciones';
import Actividad4Animales from './Actividad4Animales';
import Actividad5Videojuegos from './Actividad5Videojuegos';
import Actividad6Equipo from './Actividad6Equipo';
import Actividad7Peliculas from './Actividad7Peliculas';
import Actividad8Menu from './Actividad8Menu';
import ActividadFinalBiblioteca from './ActividadFinalBiblioteca';


export default function App() {
  return (
    <div className="contenedor-principal">
      <h1 className="titulo-principal">Taller Práctico de React: Variables, Arrays, Objetos y map()</h1>
      
      <Actividad1Libro />
      <Actividad2Ciudades />
      <Actividad3Canciones />
      <Actividad4Animales />
      <Actividad5Videojuegos />
      <Actividad6Equipo />
      <Actividad7Peliculas/>
      <Actividad8Menu />
      <ActividadFinalBiblioteca />
    </div>
  );
}