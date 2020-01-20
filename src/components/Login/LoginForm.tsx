import React from 'react';
import { useInput } from '../../hooks';
import { StyledWrapper, StyledLoginContainer, StyledLoginTitle, StyledButtonLoginContainer, StyledLoginButton } from './Login.styled';
import { Input } from '../common';
import { ErrorMessage } from '../common/ErrorMessage/ErrorMessage';

interface Props {
    onLogin: (username: string, accessToken: string) => Promise<void>;
    error: null | string;
}
export const LoginForm: React.FC<Props> = ({ onLogin, error }) => {
    const username = useInput('');
    const accessToken = useInput('');

    const disabled = username.value === '' || accessToken.value === '';

    return (
        <StyledWrapper>
            <StyledLoginContainer>
                <StyledLoginTitle>Login</StyledLoginTitle>
                <ErrorMessage message={error} />
                <Input type='text' value={username.value} placeholder='Github Username' onChange={username.onChange} />
                <Input type='password' value={accessToken.value} placeholder='User Access Token' onChange={accessToken.onChange} />
                <StyledButtonLoginContainer>
                    <StyledLoginButton onClick={() => onLogin(username.value as string, accessToken.value as string)} label='Submit' disabled={disabled} />
                </StyledButtonLoginContainer>
            </StyledLoginContainer>
        </StyledWrapper>
    )
}