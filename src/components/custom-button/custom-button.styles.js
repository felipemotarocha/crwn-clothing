import styled, { css } from 'styled-components';

const customButtonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const isGoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: #345ae8;
        border: 1px solid #345ae8;
    }
`

const invertedStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
    if (isGoogleSignIn) {
        return isGoogleSignInStyles;
    }

    return inverted ? invertedStyles : customButtonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    margin-right: 10px;
    margin-top: ${props => props.cartDropdown ? 'auto' : 0};
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
