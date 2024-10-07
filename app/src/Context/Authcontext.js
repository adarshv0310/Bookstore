import React, { createContext, useState, useEffect, useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(()=>localStorage.getItem('user')|| null);
    const [loading, setLoading] = useState(true);
   



    useEffect(() => {
        // Check if there's a logged-in user on initial load
        const fetchUser = async() => {
            try {
                // Mock async user fetching. Replace with actual API call
                const response = await fetch('http://localhost:8000/users/login', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                        //'Authorization': `Bearer ${localStorage.getItem('user')}`
                    }
                });


                if (response.ok) {
                    const userData = await response.json();
                    localStorage.setItem('user', userData);
                    //setUser(userData);
                } else {
                    throw new Error('User not authenticated');
                }
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);


   // const login = (userData) => {
       // setUser(userData);
        //localStorage.setItem('user', JSON.stringify(userData)); // Persist user info
   // };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        // Remove user info
    };

    return (
        <AuthContext.Provider value={{ user,   logout, loading }}>
            {children}
        </AuthContext.Provider>
    );

};
export const useAuth = () => useContext(AuthContext);