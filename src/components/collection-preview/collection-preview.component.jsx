import React from "react";

import CollecionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles'

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <Preview>
            {items
                .filter((item, index) => index < 4)
                .map(item => {
                    return <CollecionItem key={item.id} item={item} />;
                })}
        </Preview>
    </CollectionPreviewContainer>
);

export default CollectionPreview;
