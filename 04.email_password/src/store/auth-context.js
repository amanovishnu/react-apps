import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoading: false,
    onLogout: () => {},
    onLogin: (username, password) => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoginInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoginInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (username, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
