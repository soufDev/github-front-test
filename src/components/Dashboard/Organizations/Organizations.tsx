import React from 'react';
import { IOrg } from '../../../types/organization';
import { StyledWrapper, StyledOrgImg } from './Organizations.styled';

interface Props {
    organizations: IOrg[];
}
export const Organizations: React.FC<Props> = ({ organizations }) => {
    if (organizations.length === 0) {
        return <h2>No Organization Found</h2>
    }
    return (
        <StyledWrapper>
            {organizations.map((org: IOrg) => <StyledOrgImg src={org.avatar} alt={org.description} key={org.id} />)}
        </StyledWrapper>
    )
}