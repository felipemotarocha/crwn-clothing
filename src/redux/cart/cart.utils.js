export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        item => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === existingCartItem.id
                ? {
                      ...existingCartItem,
                      quantity: existingCartItem.quantity + 1
                  }
                : item
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        item => item.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== existingCartItem.id);
    }

    return cartItems.map(item =>
        item.id === existingCartItem.id
            ? { ...existingCartItem, quantity: existingCartItem.quantity - 1 }
            : item
    );
};
