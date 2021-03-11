import styled from "styled-components";

export const FarmVaultContainer = styled.div`
    & .nav-list ul {
        grid-template-columns: repeat(3, 1fr);
        grid-column: 7/13;
        height: 35px;
        width: 100%;
        margin: auto;
        margin-right: 2rem;
        grid-gap: 2rem;
    }

    & .nav-list ul button {
        margin: auto;
        padding: .5rem 4rem;
        background: transparent;
        color: var(--white);
        border: 1.5px solid var(--white);
        border-radius: 1rem;
        letter-spacing: var(--mainSpacing);
        font-weight: 900;
        font-family: cursive;
    }
`;