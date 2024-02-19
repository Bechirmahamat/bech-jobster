const InputWihIcon = ({
    svg,
    label,
    type,
    value,
    name,
    handleChange,
    disabled,
}) => {
    return (
        <div className='form-control'>
            <label className='input input-bordered flex items-center gap-2'>
                {svg}
                <input
                    placeholder={label}
                    type={type}
                    name={name}
                    className='grow'
                    value={value}
                    disabled={disabled || false}
                    onChange={(e) => handleChange(e)}
                />
            </label>
        </div>
    )
}
export default InputWihIcon
