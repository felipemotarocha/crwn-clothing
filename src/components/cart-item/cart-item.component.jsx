import React from "react";

import { CartItemContainer, Image, ItemDetails, Name } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <Image src={imageUrl} alt="Item"></Image>
        <ItemDetails>
            <Name>{name}</Name>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;
