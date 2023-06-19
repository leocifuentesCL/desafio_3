import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import { useState } from 'react';
import Alert from '../src/components/Alert'
import Buscador from '../src/components/Buscador'
import Formulario from '../src/components/Formulario'
import Listado from '../src/components/Listado';
import BaseColaboradores from "./BaseColaboradores"

const App = () => {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ message: '', type: ''});
  const [endSearch, setEndSearch] = useState('');

  const sumaColaborador = (colaborador) => {
    colaborador.id = +colaboradores[colaboradores.length -1].id + 1;
    setColaboradores([...colaboradores, colaborador]);
  };

    const deleteColaborador = (id) => {
      const filtroLista = colaboradores.filter(
        (colaborador) => colaborador.id !== id
      );
      setColaboradores(filtroLista);
    };
    const handlerEndSearch = (e) => {
      setEndSearch(e.target.value);
    };
    const filtroColaboradores = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(endSearch.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(endSearch.toLowerCase()) ||
        colaborador.edad.toLowerCase().includes(endSearch.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(endSearch.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(endSearch.toLowerCase())
    );

  return (
    <>
      <h1>Lista de colaboradores</h1>
      <Buscador endSearch={endSearch} onChanges={handlerEndSearch}/>
      <Listado colaboradores={filtroColaboradores} deleteColaborador={deleteColaborador}/>
      <h2>Agregue una persona</h2>
      <Formulario
      sumaColaborador={sumaColaborador}
      colaboradores={colaboradores}
      setAlert={setAlert}
      />
    </>
  );
  }

export default App;
