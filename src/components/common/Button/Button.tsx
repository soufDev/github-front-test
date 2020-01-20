import React from 'react';
import { StyledButton } from './Button.styled';

interface Props {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button: React.FC<Props> = ({ label, onClick, disabled, ...rest }) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick} {...rest} >{label}</StyledButton>
    )
}