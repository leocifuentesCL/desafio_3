import {useState} from 'react';

const name_regex = /^[\w\s]+ [\w\s]+$/;
const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const age_regex = /^[0-9-]+$/;
const phone_regex = /^\+569\d{8}$/;

const Formulario = ({ sumaColaborador, setAlert }) => {

    const [newColaborador, setNewColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const handleChange = (e) => {
        setNewColaborador({
            ...newColaborador, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !newColaborador.nombre.trim() ||
            !newColaborador.correo.trim() ||
            !newColaborador.edad.trim() ||
            !newColaborador.cargo.trim() ||
            !newColaborador.celular.trim()
        ) {
            setAlert({
                message: 'Ingrese todos los campos solicitados',
                type: 'danger',
            });
            return;
        }

        if (!name_regex.test(newColaborador.nombre)) {
            setAlert({
              message: "Ingrese un nombre y un apellido",
              type: "danger",
            });
            return;
          }

        if (!email_regex.test(newColaborador.correo)) {
            setAlert({
              message: "Ingrese correo válido",
              type: "danger",
            });
            return;
          }

        if (!age_regex.test(newColaborador.edad)) {
            setAlert({
              message: "Ingrese edad válida",
              type: "danger",
            });
            return;
          }

        if (!phone_regex.test(newColaborador.telefono)) {
            setAlert({
              message: "Ingrese un número de 9 dígitos",
              type: "danger",
            });
            return;
          }

    sumaColaborador(newColaborador);

        setNewColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
        setAlert({
            message: "Ingreso exitoso",
            type: 'success'
        });

    return (
        <form onSubmit={handleSubmit}>
        <input
            className="form-control"
            type="text"
            name="nombre"
            placeholder="Ingresa un nombre"
            value={newColaborador.nombre}
            onChange={handleChange}
        />
        <input
            className="form-control"
            type="text"
            name="correo"
            placeholder="Ingresa un correo"
            value={newColaborador.correo}
            onChange={handleChange}
        />
        <input
            className="form-control"
            type="text"
            name="edad"
            placeholder="Ingresa edad"
            value={newColaborador.edad}
            onChange={handleChange}
        />
        <input
            className="form-control"
            type="text"
            name="cargo"
            placeholder="Ingresa un cargo"
            value={newColaborador.cargo}
            onChange={handleChange}
        />
        <input
            className="form-control"
            type="text"
            name="telefono"
            placeholder="Ingresa un celular"
            value={newColaborador.telefono}
            onChange={handleChange}
        />
        <button
            className="btn btn-info text-black" type="submit">
            Agregar
        </button>
    </form>
    );
}};

export default Formulario;
