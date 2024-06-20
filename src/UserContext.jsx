import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:4000/profile',{ withCredentials: true }).then(response => {
            // console.log(response.data);
            setId(response.data.userId);
            setUsername(response.data.username);
        });
    }, []);

    return (
        <UserContext.Provider value={{ username, setUsername, id, setId }}>
            {children}
        </UserContext.Provider>
    )
}
