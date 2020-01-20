import styled from 'styled-components';
import { Button } from '../common';

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLoginContainer = styled.div`
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledLoginTitle = styled.h1`
    font-size: 24px;
    font-family: sans-serif;
    color: ${({ theme }) => theme.blue};
`;

export const StyledButtonLoginContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const StyledLoginButton = styled(Button)`
    width: 30%;
    @media (max-width: 414px) {
        width: 100%;
    }
`;

export const StyledErrorMessage = styled.h3`
    padding: 5px;
    
`;
