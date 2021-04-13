import React, { Children } from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
}

return(
    <Button className = {`${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
        {Children}
    </Button>
)



















