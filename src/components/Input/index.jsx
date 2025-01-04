import React from "react";

import "./styles.css"

function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    error = "",
    required = false,
    disabled = false,
    ...rest
}) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                {...rest}
            />
            
            {error && <p style={{color: "#B42318", fontSize: "12px", paddingTop:"4px"}}>{error}</p>}

        </div>
    );
}

export default Input;