import { TextField, TextFieldProps } from '@shopify/polaris';

export type InputFieldProps = {
  label: string;
  value: string;
  type: string;
  id: string;
  changeHandler: (value: (prev: any) => any) => void;
  placeholder?: string;
};

const InputField = ({ label, value, type, changeHandler, id, placeholder }: InputFieldProps) => {
  return (
    <TextField
      type={type as TextFieldProps['type']}
      label={label}
      value={value}
      onChange={(value) => changeHandler((prev: any) => ({ ...prev, [id]: value }))}
      autoComplete="off"
      placeholder={placeholder}
    />
  );
};

export default InputField;
