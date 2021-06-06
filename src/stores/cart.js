import React from "react";

const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState({
    items: [
      {
        name: "Product ABC",
        qty: 1,
      },
      {
        name: "Other XYZ",
        qty: 2,
      },
    ],
  });

  const addToCart = (value) => {
    cart.items.push(value);
    setCart({
      items: cart.items,
    });
  };

  const removeCartItem = (index) => {
    cart.items.splice(index, 1);
    setCart({
      items: cart.items,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
