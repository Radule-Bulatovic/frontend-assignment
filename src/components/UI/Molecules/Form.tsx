import { FormLayout } from '@shopify/polaris';

import InputField, { InputFieldProps } from '../Atoms/InputField';

interface FormProps {
  formFields: Omit<InputFieldProps, 'changeHandler'>[];
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const Form = ({ formFields, setState }: FormProps) => (
  <FormLayout>
    {formFields.map((e, index) => (
      <InputField key={index} {...e} changeHandler={setState} />
    ))}
  </FormLayout>
);

export default Form;
