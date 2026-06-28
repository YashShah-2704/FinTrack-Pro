import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    useEffect(() => {

        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }

    }, [token]);

    const logout = () => {

        setToken("");
        setUser(null);

        localStorage.removeItem("token");

    };

    return (

        <AuthContext.Provider

            value={{

                user,
                setUser,

                token,
                setToken,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};