import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.yellow}; 
    color: ${({ theme }) => theme.lightDark};
    border-style: none;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.8px;
    font-weight: 600;
    padding: 10px 25px;
    border-radius: 5px;
    margin: 5px 0;
    outline: none;
    &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.focusYellow}; 
        box-shadow: rgba(0, 0, 0, 0.29) 0px 0px 5px 1px inset;
    }
`;