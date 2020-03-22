import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {/* {isGoogleSignIn ? <i class="fab fa-google" style={{ marginRight: '5px' }}></i> : ''} */}
        {children}
    </button>
)

export default CustomButton;
