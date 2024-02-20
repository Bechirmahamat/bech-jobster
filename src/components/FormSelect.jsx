const FormSelect = ({ name, label, size, values, handleChange }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label capitalize'>
                <span className='label-text'>{label}:</span>
            </label>
            <select
                id={name}
                className='select   focus:outline-1
                focus:outline-primary focus:outline-offset-0 select-bordered'
                name={name}
                onChange={handleChange}
            >
                {values.map((item) => {
                    return (
                        <option className='' key={item} value={item}>
                            {item}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
export default FormSelect
