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
        padding: 0 2rem 2rem;

        & .card {
            width: 100%;
            height: 175px;
            background: var(--mainWhite);
            border-top-left-radius: .25rem;
            border-top-right-radius: 2.5rem;
            border-bottom-left-radius: 2.5rem;
            border-bottom-right-radius: .25rem;
            box-shadow: 5px 5plx 5px var(--darGrey);
            transition: var(--mainTransition);
            padding: 2.5rem 1rem;

            &:hover {
                background: var(--darkGrey);
                cursor: pointer;
                color: var(--white);
            }
            
            & h5 {
                margin-left: 1rem;
                font-wpeight: 500;
                font-size: 1.5rem
            }
        }
    }
`