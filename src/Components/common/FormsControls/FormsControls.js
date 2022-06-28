import React from 'react';
import cl from "./FormsControls.module.css";

const Element = (Element) = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={cl.formControl + " " + (hasError ? cl.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = Element("textarea");
export const Input = Element("input");
