import React , {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export function Authprovider({children}){
    
    const [isAuthenticated,setIsAuthenticated] = useState(()=>{
        return JSON.parse(localStorage.getItem('isAuthenticated')) || false;
    });
    
    const [isAdmin, setIsAdmin] = useState(()=>{
        return JSON.parse(localStorage.getItem('role')) || false;
    });

    const login = ()=>{
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated',JSON.stringify(true));
    }

    const logout = ()=>{
        setIsAuthenticated(false);
        localStorage.removeItem('role');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('employeeName');
        localStorage.removeItem('token');
        
    }
    const setRole = (role)=>{
        setIsAdmin(role);
        localStorage.setItem('role',JSON.stringify(role));
    }

    // useEffect(()=>{
    //     localStorage.removeItem('isAuthenticated')
    // },[]);
    return (
        <AuthContext.Provider value={{isAuthenticated,isAdmin,login,logout,setRole}}>
          {children}  
        </AuthContext.Provider>
    );

}

export function useAuth() {
    return useContext(AuthContext);
}