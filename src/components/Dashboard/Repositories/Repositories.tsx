import React from 'react';
import { IRepo } from '../../../types/repos';
import { Repository } from './Repository/Repository';
import { RepositoriesContainer } from './RepositoriesContainer';

export const Repositories: React.FC = () => {
    return (
        <RepositoriesContainer>
            {({ repositories }) => repositories.map((repo: IRepo, index: number) => <Repository key={index} repository={repo} />)}
        </RepositoriesContainer>
    )
}