import React from 'react';
import { IRepo } from '../../../../types/repos';
import { StyledWrapper, StyledTitle, StyledDescription, StyledStars } from './Repository.styled';


interface Props {
    repository: IRepo;
}

export const Repository: React.FC<Props> = ({ repository }) => {
    return(
        <StyledWrapper>
            <StyledTitle>{repository.name}</StyledTitle>
            <StyledDescription>{repository.description}</StyledDescription>
            <StyledStars><strong>{repository.stars}</strong> Stars</StyledStars>
        </StyledWrapper>
    )
}