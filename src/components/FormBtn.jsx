const FormBtn = ({ text, handleSubmit }) => {
    return (
        <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-md"
            onSubmit={(e) => handleSubmit(e)}
        >
            {text}
        </button>
    );
};
export default FormBtn;
