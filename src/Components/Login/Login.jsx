// import React from 'react';
// import {reduxForm, Field} from 'redux-form';
// import {Input} from "../common/FormsControls/FormsControls";
// import {required} from "../../utils/validators/validators";
//
// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Login"} name={"login"}
//                        validate={[required]}
//                        component={Input} type="text"/>
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"}
//                        validate={[required]}
//                        component={Input} type="password"/>
//             </div>
//             <div>
//                 <Field name={"rememberMe"} component={Input} type="checkbox"/> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// };
//
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
//
// const Login = (props) => {
//     const onSubmit = (formData) => {
//         console.log(formData);
//     }
//
//     return <>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </>
//
// };
//
// export default Login;

import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";

const LoginForm = (props) => {
    // debugger;

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: false
            }}
            validate={validateLoginForm}
            validationSchema={validationSchemaLoginForm}
            onSubmit={(values) => {
                props.login(values.email, values.password, values.rememberMe);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'email'}
                            type={'text'}
                            placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage name="email" component="div"/>

                    <div>
                        <Field
                            name={'password'}
                            type={'password'}
                            placeholder={'password'}/>
                    </div>
                    <ErrorMessage name="password" component="div"/>

                    <div>
                        <Field
                            type={'checkbox'}
                            name={'rememberMe'}
                            id='rememberMe'/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button type={'submit'}>Login</button>
                </Form>
            )}
        </Formik>
    )
};

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'enter your e-mail';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(6, "Must be longer than 6 characters")
        .max(10, "Must be shorter than 10 characters")
        .required("enter your password")
});


const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm login={props.login}/>
        </div>
    )
}

export default connect(null, {login})(Login);