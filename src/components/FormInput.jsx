const FormInput = ({ label, type, size, name, values, handleChange }) => {
    return (
        <div className='form-control '>
            <label htmlFor={name} className='label capitalize'>
                <span className='label-text'>{label}:</span>
            </label>
            <input
                id={name}
                type={type}
                className={`input input-bordered ${size}
                focus:outline-1
                focus:outline-primary focus:outline-offset-0`}
                name={name}
                value={values}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}
export default FormInput
