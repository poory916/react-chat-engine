import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const history = useHistory();
    useEffect( ()=>{
        auth.onAuthStateChanged((user)=>{
            setUser(user);
            setIsLoading(false)
            if(user) history.push('/chats')
        })
    },[user,history] )
    const value = {user};

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};