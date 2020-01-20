import styled from 'styled-components';
import { Button } from '../common';

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled(Button)`
    width: 150px;
    font-size: 12px;
    @media (max-width: 414px) {
        width: 100px;
    }
`;

export const StyledContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    @media (max-width: 414px) {
        width: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 100%;
    }
`;