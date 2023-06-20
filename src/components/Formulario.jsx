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

    const handlerChange = (e) => {
        setNewColaborador({...newColaborador, [e.target.name]: e.target.value,});
    };

    const handlerSend = (e) => {
        e.preventDefault();

        if (
            !newColaborador.nombre.trim() ||
            !newColaborador.correo.trim() ||
            !newColaborador.edad.trim() ||
            !newColaborador.cargo.trim() ||
            !newColaborador.telefono.trim()
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
    };

    return (
    <form className="d-flex flex-column gap-2" onSubmit={handlerSend}>
        <input
            type="text"
            name="nombre"
            placeholder="Ingrese un nombre"
            value={newColaborador.nombre}
            onChange={handlerChange}/>
        <input
            type="text"
            name="correo"
            placeholder="Ingrese un correo"
            value={newColaborador.correo}
            onChange={handlerChange}/>
        <input
            type="text"
            name="edad"
            placeholder="Ingrese edad"
            value={newColaborador.edad}
            onChange={handlerChange}/>
        <input
            type="text"
            name="cargo"
            placeholder="Ingrese un cargo"
            value={newColaborador.cargo}
            onChange={handlerChange}/>
        <input
            type="text"
            name="telefono"
            placeholder="Ingrese un celular"
            value={newColaborador.telefono}
            onChange={handlerChange}/>
        <button className="btn btn-success" type="submit">
        Agregar
        </button>
    </form>
    );
};

export default Formulario;
