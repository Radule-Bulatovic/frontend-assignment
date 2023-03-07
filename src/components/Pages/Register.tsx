import { Layout, LegacyCard, Toast } from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useAuth } from '../../context';
import Form from '../UI/Molecules/Form';

const Register = () => {
  const { isLoggedIn, onRegister } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate(ROUTES.HOME);
  }, [isLoggedIn]);

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: 'John Johnson',
    email: 'example@email.com',
    password: 'password',
    phone: '+123456789'
  });

  const formFields = [
    {
      label: 'Full name',
      placeholder: 'John Johnson',
      value: form.name,
      type: 'text',
      id: 'name'
    },
    {
      label: 'Email',
      placeholder: 'example@email.com',
      value: form.email,
      type: 'email',
      id: 'email'
    },
    {
      label: 'Phone number',
      placeholder: '+123456789',
      value: form.phone,
      type: 'tel',
      id: 'phone'
    },
    {
      label: 'Password',
      value: form.password,
      type: 'password',
      id: 'password'
    }
  ];

  return (
    <>
      <Layout>
        <Layout.Section>
          <LegacyCard
            title="Sign in"
            actions={[
              {
                content: 'Alredy have an account?',
                onAction: () => {
                  navigate(ROUTES.LOGIN);
                }
              }
            ]}
            primaryFooterAction={{
              content: 'Log in',
              onAction: () => {
                onRegister(form)
                  .then(() => navigate(ROUTES.HOME))
                  .catch(() => setError(true));
              }
            }}>
            <LegacyCard.Section>
              <Form formFields={formFields} setState={setForm} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
      {error ? (
        <Toast content="Wrong credentials!" onDismiss={() => setError((prev) => !prev)} error />
      ) : null}
    </>
  );
};

export default Register;
