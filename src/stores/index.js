import React from "react";

import { CartContextProvider, useCartStore } from "stores/cart";
import { UserContextProvider, useUserStore } from "stores/user";

const StoreProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
};

export { StoreProvider, useCartStore, useUserStore };
