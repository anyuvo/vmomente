import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"} type="text"/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"} type="password"/>
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

};

export default Login;