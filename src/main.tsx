import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '@shopify/polaris/build/esm/styles.css';
import Login from './components/Pages/Login';
import Products from './components/Pages/Products';
import Register from './components/Pages/Register';
import PageTemplate from './components/Templates/Layouts/PageTemplate';
import { ROUTES } from './constants';
import { AuthContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<PageTemplate />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.REGISTER} element={<Register />} />
              <Route path={ROUTES.HOME} index element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </AppProvider>
  </React.StrictMode>
);
