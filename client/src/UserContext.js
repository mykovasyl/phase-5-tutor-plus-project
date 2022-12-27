import React, { useState } from "react";

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
