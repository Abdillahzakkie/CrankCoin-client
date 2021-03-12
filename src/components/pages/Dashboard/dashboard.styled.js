import styled from "styled-components";

export const DashboadContainer = styled.div`
    & .account-details {
        place-items: start;
        width: 100%;
        padding: 1.5rem;
        letter-spacing: var(--mainSpacing);
    }

    & .card-container {
        grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
        grid-template-rows: auto;
        width: 100vw;
        grid-gap: 2rem;
        padding: 0 2.5rem 2rem 1.5rem;

        & .card {
            width: 100%;
            height: 175px;
            background: var(--mainWhite);
            // border-radius: .25rem 2.5rem .25rem 2.5rem;
            transition: var(--mainTransition);
            padding: 1.5rem 1rem;

            &:hover {
                background: var(--lightGrey);
                cursor: pointer;
                color: var(--white);
            }
            
            & h5 {
                margin-left: 1rem;
                font-weight: 500;
                font-size: 1.25rem
            }
        }
    }
`