import React from "react";

import { useStores } from "stores";

export default () => {
  const inputRef = React.useRef();
  const { cartStore } = useStores()
  const { cart, addToCart, removeCartItem } = cartStore;

  const handleAddToCart = () => {
    const item = inputRef.current.value || 'Some Item';
    addToCart({
      name: item,
      qty: Math.floor(Math.random() * 10),
    });
  };

  const handleRemoveCartItem = (index) => {
    removeCartItem(index);
  };

  return (
    <div className="my-5">
      <h4>Cart</h4>
      <div className="d-flex flex-column">
        <input ref={inputRef} className="form-control mb-2" />
        <button className="mb-2" onClick={handleAddToCart}>
          Add To Cart
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>
                  <button onClick={() => handleRemoveCartItem(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
