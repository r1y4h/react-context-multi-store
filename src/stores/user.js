import React from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    name: "Someone else",
  });

  const updateUser = (value) => {
    setUser(value);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserContextProvider,
}