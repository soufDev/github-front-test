import styled from 'styled-components';

export const StyledHeader = styled.nav`
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
    font-family: sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    margin-bottom: 40px;
    @media (max-width: 414px) {
        margin-bottom: 0;
    }
`;