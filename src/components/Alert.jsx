const Alert = ({alert}) => {

    const { message, type } = alert;

    return (
        <div className={`mt-3 alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default Alert;