import React from "react";
import "./styles.css"

function Button({
    className,
    text,
    onClick,
    disabled = false,
    ...rest
}) {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
}

export default Button;