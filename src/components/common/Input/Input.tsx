import React from 'react';
import { StyledInput } from './Input.styled';

interface Props {
    type: string;
    value: string | number;
    onChange: (e: React.FormEvent<EventTarget>) => void;
    placeholder: string;
}

export const Input: React.FC<Props> = ({ type, value, onChange, placeholder, ...rest }) => {
    return (
        <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
        />
    )
}