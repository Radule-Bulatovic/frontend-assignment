import { Layout, LegacyCard, Toast } from '@shopify/polaris';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useAuth } from '../../context';
import Form from '../UI/Molecules/Form';

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const { onLogin, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate(ROUTES.HOME);
  }, [isLoggedIn]);

  const [form, setForm] = useState({
    email: 'example@email.com',
    password: 'password'
  });

  const formFields = [
    {
      label: 'Email',
      value: form.email,
      type: 'email',
      id: 'email'
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
                content: 'Dont have an account?',
                onAction: () => {
                  navigate(ROUTES.REGISTER);
                }
              }
            ]}
            primaryFooterAction={{
              content: 'Log in',
              onAction: () => {
                onLogin(form)
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
}
