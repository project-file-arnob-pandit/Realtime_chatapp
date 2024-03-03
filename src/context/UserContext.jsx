import React, { createContext, useState } from "react";

export const userContext = createContext(null);

const UserContext = ({ children }) => {
    const [userProfile, setUserProfile] = useState(
        "https://imgs.search.brave.com/TlBxVzDO-RJewmKWKp-69kd2Eh5k2nQB3-VKvURq3AQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzkzLzI3/LzM2MF9GXzU4OTkz/Mjc4Ml92UUFFQVpo/SG5xMVFDR3U1aWt3/cllhUUQwTW11cm0w/Ti5qcGc"
    );

    return (
        <userContext.Provider
            value={{
                userProfile,
                setUserProfile,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export default UserContext;
