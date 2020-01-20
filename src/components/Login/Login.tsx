import React from 'react';
import { LoginContainer } from './LoginContainer';
import { LoginForm } from './LoginForm';

export const Login = () => (
    <LoginContainer>
        {({onLogin, error}) => (
            <LoginForm onLogin={onLogin} error={error} />
        )}
    </LoginContainer>
)