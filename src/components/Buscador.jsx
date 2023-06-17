const Buscador = ({ endSearch, onChanges }) => {
    return (
        <input
        style={{ width: "400px" }}
        className="form-control mb-3 mx-left text-center"
        type="text"
        placeholder="Busca a una persona"
        value={endSearch}
        onChange={onChanges}
        />
    );
};

export default Buscador;
