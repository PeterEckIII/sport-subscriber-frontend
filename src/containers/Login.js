import React, { useState } from 'react';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Submitted!')
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className='input-form'>
                    <label htmlFor='email'>Email: </label>
                    <input
                        autoFocus
                        type='text'
                        value={ email }
                        name='email'
                        placeholder='santa.claus@northpole.com'
                        onChange={ handleEmailChange }
                    />
                </div>
                <div className='input-form'>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        value={ password }
                        name='password'
                        placeholder='MrsClaus485028!@#'
                        onChange={ handlePasswordChange }
                    />
                </div>
                <button type='submit' disable={ !validateForm() }>Login</button>
            </form>
        </div>
    );
};

export default Login;
