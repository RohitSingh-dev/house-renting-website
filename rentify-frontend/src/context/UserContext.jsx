import { createContext, useState } from "react";

export const UserContext= createContext(null);

export const UserContextProvider= (props)=> {
    const [currentUser, setCurrentUser]= useState(null);

    const handleLogin = async (email, password) => {
        try {
          const res = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          });
          const resJSON = await res.text();
          if (res.status === 200) {
            setCurrentUser(JSON.parse(resJSON));
            return true;
          } else {
            alert("Invalid Credentials");
          }
        } catch (err) {
          console.log(err);
        }
      };

      const updateUser = (user) => {
        setCurrentUser(user);
    }

    return (
        <UserContext.Provider value={{currentUser, handleLogin, updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
