export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  const existingItem = cartItems.find((item) => item.id === itemToClear.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
  }
  return cartItems.map((item) =>
    item.id === itemToClear.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
