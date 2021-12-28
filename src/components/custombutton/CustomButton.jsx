import React from "react";

import './CustomButton.scss';


const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
  }) => (
    <button
      className={`noselect ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
  
  export default CustomButton;