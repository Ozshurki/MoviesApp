import React from 'react';
import {Field, validateYupSchema, ErrorMessage} from "formik";

interface TextValues {
    fieldName: string,
    fieldText: string,
    placeholder: string,
    error?:string,
}

const TextField: React.FC<TextValues> = ({fieldName, fieldText, placeholder, error}: TextValues) => {

    const getType= (str:string)=>{
        if(str == 'password' || str == 'confirmPassword')
            return 'password';
        return '';
    }
    return (
        <div className={fieldName + '-container'}>
            <label htmlFor={fieldName}>{fieldText}</label>
            <br/>
            <Field className={fieldName + '-field'}
                   id={fieldName}
                   name={fieldName}
                   placeholder={placeholder}
                   type={getType(fieldName)}/>
            {error && (
                <div className='firstName-error'>{error}</div>
            )}
        </div>

    );
}

export default TextField;