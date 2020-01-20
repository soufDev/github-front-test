import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledOrgImg = styled.img`
    width: 30px;
    height: 30px;
    &:hover {
        border: 2px solid ${({ theme }) => theme.darkGray};
        border-radius: 2px;
    }
`;