import React, { useState, useEffect } from 'react';

import AuthContext from './store/auth-context';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoginInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoginInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', '1');
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
