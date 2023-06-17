import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
//import Alert from '../src/components/Alert'
//import Buscador from '../src/components/Buscador'
//import Formulario from '../src/components/Formulario'
import Listado from '../src/components/Listado';
import BaseColaboradores from "./BaseColaboradores"

const App = () => {
  
  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Listado />
    </>
  )
}

export default App
