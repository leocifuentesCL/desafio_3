const Buscador = ({ endSearch, onChanges }) => {
    return (
        <input
        className="form-control"
        type="text"
        placeholder="Busca a una persona"
        value={endSearch}
        onChange={onChanges}
        />
    );
};

export default Buscador;
