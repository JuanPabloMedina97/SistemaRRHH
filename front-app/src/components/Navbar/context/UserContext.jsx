import { createContext, useContext, useState, useEffect } from "react";

export const UserStatusContext = createContext();

const UserProvider = ({ children }) => {

    const [userStatus, setUserStatus] = useState(false)
    
    return (
        <UserStatusContext.Provider value={{ userStatus, setUserStatus }}>
            {children}
        </UserStatusContext.Provider>
    )
};

export default UserProvider;

export const useUserStatusContext = () => useContext(UserStatusContext);