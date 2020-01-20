import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IState } from '../../../types/actions';
import { IUser } from '../../../types/user';

interface Props {
    children: ({ user }: { user: IUser }) => JSX.Element;
}

export const ProfileContainer: React.FC<Props> = ({ children }) => {
    const user = useSelector((state: IState) => state.user.entity, shallowEqual);
    return children({ user });
}