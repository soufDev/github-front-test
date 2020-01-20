import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.errorMessageBgColor};
    color: ${({ theme }) => theme.errorMessageTextColor};
    border-color: ${({ theme }) => theme.errorMessageBorderColor};
    border-width: 2px;
    border-radius: 6px;
    box-sizing: border-box;
`;