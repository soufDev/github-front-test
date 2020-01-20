import React from 'react';
import { ProfileContainer } from './ProfileContainer';
import { ProfileScreen } from './ProfileScreen';

export const Profile = () => {
    return (
        <ProfileContainer>
            {({ user, organizations }) => (
                <ProfileScreen
                    avatar={user.avatar}
                    bio={user.bio}
                    name={user.name}
                    login={user.login}
                    reposNumber={user.reposNumber}
                    commitsNumber={user.commitsNumber}
                    organizations={organizations}
                />
            )}
        </ProfileContainer>
    )
}