import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../types/actions';
import { StyledWrapper, StyledButton } from './Dashboad.styled';
import { Header as DashboadHeader } from './Header/Header';
import { Profile } from './Profile/Profile';
import { Repositories } from './Repositories';
import { DashboardContent } from './DashbboardContent';

export const Dashboard: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const onLogout = () => dispatch({ type: 'LOGOUT' });
    return (
        <StyledWrapper>
            <DashboadHeader>
                <h1>Dashboard</h1>
                <StyledButton onClick={onLogout} label="Logout" />
            </DashboadHeader>
            <DashboardContent>
                <Profile />
                <Repositories />
            </DashboardContent>
        </StyledWrapper>
    )
}