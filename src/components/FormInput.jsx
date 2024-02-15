const FormInput = ({ label, type, size, name, value, handleChange }) => {
    return (
        <div className="form-control ">
            <label htmlFor="" className="label capitalize">
                <span className="label-text">{label}:</span>
            </label>
            <input
                type={type}
                className={`input input-bordered ${size} `}
                name={name}
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};
export default FormInput;
