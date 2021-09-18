import React, {useState, useContext} from 'react'
import {AuthContext} from "../../shared/context/AuthContext";
import "./LoginForm.css"
import {Link, useHistory} from "react-router-dom";
import {Formik, Form, Field, validateYupSchema, ErrorMessage} from "formik";
import * as Yup from 'yup'
import TextField from "../../components/TextField/TextField";
import Loading from "../../components/Loading/Loading";
import axios from "axios";

interface LoginValues {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useContext(AuthContext);
    let history = useHistory();

    const initialValues: LoginValues = {
        email: '',
        password: ''
    };

    const LoginValidate = Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
    })

    const getError = (error: string | undefined, touch: boolean | undefined) => {
        if (error && touch)
            return error;
        return '';
    }

    const OnClick = async (values: any, actions: any) => {

        const {email, password} = values;
        try {
            auth.login();
            setIsLoading(true);
            console.log({values, actions});
            const response = await axios.post('http://localhost:5000/api/users/login',
                {email: values.email, password: values.password});

            if (!(response)) {
                return new Error("Login response fail.")
            }
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            return;
        }
        actions.setSubmitting(false);
        actions.resetForm();
        history.push('/');
    }

    return (

        <div className='container'>
            <div className="login-container">

                <div className="title-container">
                    <div className="title">Sign in</div>
                </div>
                <Formik initialValues={initialValues}
                        onSubmit={OnClick}
                        validationSchema={LoginValidate}>

                    {({errors, touched}) => (
                        <Form className='form-container' autoComplete='off'>

                            <TextField fieldName='email'
                                       fieldText='Email'
                                       placeholder='Email'
                                       error={getError(errors.email, touched.email)}/>

                            <TextField fieldName='password'
                                       fieldText='Password'
                                       placeholder='Password'
                                       error={getError(errors.password, touched.password)}/>

                            <div className="login-submit">
                                <button className='login-btn' type='submit'>Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className='signup-btn'>
                    <Link to='/signup' className='register-link'>Create account</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;