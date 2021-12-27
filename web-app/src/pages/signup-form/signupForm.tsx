// @ts-ignore

import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {Formik, Form, Field, validateYupSchema, ErrorMessage, useFormik} from "formik";
import * as Yup from 'yup';
import TextField from "../../components/TextField/TextField";
import Loading from "../../components/Loading/Loading"
import './signupForm.css';

const axios = require('axios');

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Header: React.FC = () => {
    let history: any = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const FormValidate = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters'),
        email: Yup.string()
            .email('Invalid Email'),
        password: Yup.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
    });

    const getError = (error: string | undefined, touch: boolean | undefined) => {
        if (error && touch)
            return error;
        return '';
    };

    const onClick = async (values: any, actions: any) => {
        const {confirmPassword: string, ...data} = values;

        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:5000/api/users/signup", data);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            return;
        }
        actions.setSubmitting(false);
        actions.resetForm();
        history.push('/LoginNavBar');
    }

    return (

        <div className='container'>
            <div className="signup-container">
                {isLoading && <Loading/>}
                {!isLoading &&
                <div>
                    <div className="title-container">
                        <div className="title">Signup</div>
                    </div>
                    <Formik initialValues={initialValues}
                            onSubmit={onClick}
                            validationSchema={FormValidate}>
                        {({errors, touched}) => (
                            <Form className='form-container' autoComplete='off'>

                                <TextField fieldName='firstName' fieldText='First Name'  placeholder='First name' error={getError(errors.firstName, touched.firstName)}/>

                                <TextField fieldName='lastName'
                                           fieldText='Last Name'
                                           placeholder='Last name'
                                           error={getError(errors.lastName, touched.lastName)}/>

                                <TextField fieldName='email'
                                           fieldText='Email'
                                           placeholder='Email'
                                           error={getError(errors.email, touched.email)}/>

                                <TextField fieldName='password'
                                           fieldText='Password'
                                           placeholder='Password'
                                           error={getError(errors.password, touched.password)}/>

                                <TextField fieldName='confirmPassword'
                                           fieldText='Confirm Password'
                                           placeholder='Confirm Password'
                                           error={getError(errors.confirmPassword, touched.confirmPassword)}/>

                                <div className="login-submit">
                                    <button className='submit-btn' type='submit'>Submit</button>
                                    <button className='reset-btn' type='reset'>Reset</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>}
            </div>
        </div>
    )
}

export default Header;