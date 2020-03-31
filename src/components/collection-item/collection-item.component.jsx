import React from "react";
import { connect } from "react-redux";

import { CollectionItemContainer, Image, CollectionFooter, Name, Price, CollectionItemCustomButton } from './collection-item.styles'

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <Image imageUrl={imageUrl} />
            <CollectionFooter>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </CollectionFooter>
            <CollectionItemCustomButton onClick={() => addItem(item)} inverted>
                Add to Cart
            </CollectionItemCustomButton>
        </CollectionItemContainer>
    );
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
