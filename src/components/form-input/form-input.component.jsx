import { Input, Group, FormInputLabel } from "./form-input.styles";
//props -> destructuring
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {/*  only render it when lebel exist */}
      {label && (
        <FormInputLabel
          //if no value, shrink = false
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
