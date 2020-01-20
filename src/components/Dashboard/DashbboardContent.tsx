import React from 'react';
import { StyledContentWrapper } from './Dashboad.styled';

interface Props {
    children: React.ReactNode
}

export const DashboardContent: React.FC<Props> = ({ children }) => {
    return <StyledContentWrapper>{children}</StyledContentWrapper>
}