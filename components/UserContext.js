
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [userDetails, setUserDetails] = useState({});
  const [address, setAddressDetails] = useState({}); 
  const [paymentDetails, setPaymentDetails] = useState({});


  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, address, setAddressDetails,  paymentDetails,
        setPaymentDetails, }}>
      {children}
    </UserContext.Provider>
  );
};
