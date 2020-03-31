import React from "react";
import { connect } from "react-redux";

import {
    clearItemFromCart,
    removeItem,
    addItem
} from "../../redux/cart/cart.actions";

import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt="item"></Image>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItem(cartItem)}>
                    &#10094;
                </Arrow>
                <Value >{quantity}</Value>
                <Arrow onClick={() => addItem(cartItem)}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price >${price}</Price>
            <RemoveButton onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
