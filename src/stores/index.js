import React from "react";

import { CartContext, CartContextProvider } from "stores/cart";
import { UserContext, UserContextProvider } from "stores/user";

const StoreProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
};

const useStores = () => ({
  cartStore: React.useContext(CartContext),
  userStore: React.useContext(UserContext),
})

export { StoreProvider, useStores };