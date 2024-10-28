import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_NOTE};
    padding: 32px;
    border-radius: 16px;
    color: gray;

    header {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    p {
        margin-bottom: 16px;
    }




`;