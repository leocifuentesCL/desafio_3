import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores, deleteColaborador }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td><i className="fa-solid fa-trash"
            onClick={() => deleteColaborador(colaborador.id)}></i>
            </td>
            </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
