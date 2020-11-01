import React from "react";

function FormField( { label, type, value, name, onChange } ) {
    return (
        <div>
            <label>
                {/*Nome da Categoria: */}
                {label}
                <input type={type} name={name} value={value} onChange = { onChange } />
            </label>
        </div>
    );
}

export default FormField;