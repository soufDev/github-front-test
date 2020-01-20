import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IState } from '../../../types/actions';
import { IUser } from '../../../types/user';
import { IOrg } from '../../../types/organization';

interface Props {
    children: ({ user, organizations }: { user: IUser, organizations: IOrg[] }) => JSX.Element;
}

export const ProfileContainer: React.FC<Props> = ({ children }) => {
    const {user, organizations} = useSelector((state: IState) => ({
        user: state.user.entity,
        organizations: state.organizations.entity
    }), shallowEqual);
    return children({ user, organizations });
}