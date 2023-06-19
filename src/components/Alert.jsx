const Alert = ({ alert }) => {

    const { message, type } = alert;

    return (
        <div className={`alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default Alert;
