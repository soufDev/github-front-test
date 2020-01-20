import React from 'react';
import { StyledWrapper, StyledAvatar, StyledName, StyledLogin, StyledRepositories, StyledInfos } from './Profile.styled';
import { IOrg } from '../../../types/organization';
import { Organizations } from '../Organizations';

interface Props {
    avatar: string;
    name: string;
    login: string;
    bio: string;
    reposNumber: number;
    commitsNumber: number;
    organizations: IOrg[];
}

export const ProfileScreen: React.FC<Props> = ({ avatar, name, login, bio, reposNumber, commitsNumber, organizations }) => {
    return (
        <StyledWrapper>
            <StyledAvatar src={avatar} />
            <StyledInfos>
                <StyledName>{name}</StyledName>
                <StyledLogin>{login}</StyledLogin>
                <StyledLogin>{bio}</StyledLogin>
                <StyledRepositories><strong>{reposNumber}</strong> Repositories</StyledRepositories>
                <StyledRepositories><strong>{commitsNumber}</strong> Commits</StyledRepositories>
                <Organizations organizations={organizations} />
            </StyledInfos>
        </StyledWrapper>
    )
}