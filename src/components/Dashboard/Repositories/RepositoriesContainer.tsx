import React from 'react';
import { IRepo } from '../../../types/repos';
import { useSelector, shallowEqual } from 'react-redux';
import { mostStarredRepositoriesSelector } from '../../../redux/selectors/repos';
import { StyledWrapper } from './Repositories.styled';

interface Props {
    children: ({ repositories }: { repositories: IRepo[] }) => React.ReactNode;
}

export const RepositoriesContainer: React.FC<Props> = ({ children }) => {
    const repositories = useSelector(mostStarredRepositoriesSelector, shallowEqual);
    return <StyledWrapper>{children({ repositories })}</StyledWrapper>
}