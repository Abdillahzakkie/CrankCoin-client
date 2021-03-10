import styled from "styled-components";

export const TransactionListContainer = styled.div`
    width: 90%;
    margin: 3rem auto;
    border: 5px solid var(--darkgrey);
    background: var(--mainWhite);
    grid-gap: .5rem 0;
    overflow: auto;

    & .container {
        grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 2fr;
        grid-template-rows: auto;
        height: 50px;
        width: 100%;
        margin: 0 auto;
        place-items: center;
        background: var(--mainWhite);
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .25);
        padding: 0 1rem;
    }

    & .header { background: var(--orange); }
`;