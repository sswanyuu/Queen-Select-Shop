import "./form-input.styles.scss";
//props -> destructuring
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/*  only render it when lebel exist */}
      {label && (
        <label
          //if no value, apply the classname
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
