import { Input, Group, FormInputLabel } from './form-input.styles'
import { InputHTMLAttributes, FC } from 'react'
//props -> destructuring
type FormInputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>
const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {/*  only render it when lebel exist */}
      {label && (
        <FormInputLabel
          //if no value, shrink = false
          shrink={Boolean(
            otherProps && typeof otherProps.value === 'string' && otherProps.value.length,
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}
export default FormInput
