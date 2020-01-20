import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => theme.lightDark};
    background-color: ${({ theme }) => theme.white};
    padding: 10px 20px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.veryLightGray};
    border-radius: 6px;
    font-size: 18px;
    margin: 5px 0;
    outline: none;
`;