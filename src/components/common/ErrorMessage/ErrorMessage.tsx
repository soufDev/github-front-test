import React from 'react';
import { StyledWrapper } from './ErrorMessage.styled';

interface Props {
    message: string | null;
}
export const ErrorMessage: React.FC<Props> = ({ message }) => {
    if (message) {
        return <StyledWrapper>{message}</StyledWrapper>
    }
    return null;
}