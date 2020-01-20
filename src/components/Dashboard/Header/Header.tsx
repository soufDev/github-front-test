import React from 'react';
import { StyledHeader } from './Header.styled';

interface Props {
    children: React.ReactNode;
}
export const Header: React.FC<Props> = ({ children }) => {
    return (
        <StyledHeader>{children}</StyledHeader>
    )
}