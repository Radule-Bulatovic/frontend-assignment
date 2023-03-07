import { useState, useEffect, useContext, PropsWithChildren, createContext, FC } from 'react';

import { LoginT, UserT } from '../types';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (credentials: LoginT) => new Promise(() => {}),
  onRegister: (user: UserT) => new Promise(() => {})
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider: FC<PropsWithChildren<{}>> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = (credentials: LoginT) => {
    return new Promise((resolve, reject) => {
      if (credentials.email === 'example@email.com' && credentials.password === 'password') {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        return resolve('Success');
      }
      reject('False credentials');
    });

    // auth
    //   .login(credentials)
    //   .then(() => {
    //     localStorage.setItem('isLoggedIn', '1');
    //     setIsLoggedIn(true);
    //   })
    //   .catch(() => {
    //     localStorage.setItem('isLoggedIn', '0');
    //     setIsLoggedIn(false);
    //   });
  };

  const registerHandler = (user: UserT) => {
    return new Promise((resolve, reject) => {
      if (user.email && user.password && user.name && user.phone) {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        return resolve('Success');
      }
      reject('False data');
    });

    // auth
    //   .register(user)
    //   .then(() => {
    //     localStorage.setItem('isLoggedIn', '1');
    //     setIsLoggedIn(true);
    //   })
    //   .catch(() => {
    //     localStorage.setItem('isLoggedIn', '0');
    //     setIsLoggedIn(false);
    //   });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onRegister: registerHandler
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
