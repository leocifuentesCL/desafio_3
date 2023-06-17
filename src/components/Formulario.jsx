import {useState} from 'react';

const name_regex = /^[\w\s]+ [\w\s]+$/;
const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const age_regex = /^[0-9-]+$/;
const phone_regex = /^\+569\d{8}$/;

const Formulario = ({sumaColaborador, setAlert}) => {

    const [newColaborador, setNewColaborador] = useState({
        name: '',
        mail: '',
        age: '',
        position: '',
        phone: ''
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
                type: 'advertencia',
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
            name: '',
            mail: '',
            age: '',
            position: '',
            phone: ''
        });
        setAlert({
            message: "Ingreso exitoso",
            type: 'success'
        });

    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Ingresa un nombre"
            value={newColaborador.nombre}
            onChange={handleChange}
        />
        <input
            type="text"
            name="mail"
            placeholder="Ingresa un correo"
            value={newColaborador.mail}
            onChange={handleChange}
        />
        <input
            type="text"
            name="age"
            placeholder="Ingresa edad"
            value={newColaborador.age}
            onChange={handleChange}
        />
        <input
            type="text"
            name="position"
            placeholder="Ingresa un cargo"
            value={newColaborador.position}
            onChange={handleChange}
        />
        <input
            type="number"
            name="phone"
            placeholder="Ingresa un celular"
            value={newColaborador.phone}
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
