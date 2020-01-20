import styled from 'styled-components';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledAvatar = styled.img`
    width: 260px;
    height: 260px;
    border-radius: 3px;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledInfos = styled.div`
    @media (max-width: 414px) {
        padding: 5px;
    }
`;

export const StyledName = styled.h1`
    font-size: 26px;
    line-height: 30px;
`;

export const StyledLogin = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${({ theme }) => theme.darkGray};
`;

export const StyledRepositories = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${({ theme }) => theme.dark};
`;


export const StyledBio = styled.h4`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 20px;
    color: ${({ theme }) => theme.dark};
`;
