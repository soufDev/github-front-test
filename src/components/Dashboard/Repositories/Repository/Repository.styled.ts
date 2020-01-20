import styled from 'styled-components';

export const StyledWrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: 2px;
    padding: 5px;
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 16px;
    font-weight: 300;
    color: ${({ theme }) => theme.darkGray};
`;

export const StyledDescription = styled.h4`
    font-size: 12px;
    font-weight: 200;
`;

export const StyledStars = styled.span`
    font-size: 14px;
    font-weight: 200;
`;