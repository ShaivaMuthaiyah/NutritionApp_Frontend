import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();


// Provider component that wraps your app and makes user data available
export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  // Custom hook to use the User Context
  export function useUser() {
    return useContext(UserContext);
  }