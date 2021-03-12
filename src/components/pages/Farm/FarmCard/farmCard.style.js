import styled from "styled-components";

export const FarmCardContainer = styled.div`
    // grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: 4rem;
    width: 50%;

    .card {
        grid-gap: 1.5rem 0;
        background: var(--mainWhite);
        width: 100%;
        padding: 1rem;
        margin: auto;
        border: 1px solid #e2d6cf;
        border-radius: .5rem;
        padding: 3rem 2rem;

        .logo {
            width: 50px;
            height: 50px;

            & img {
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }

        .width-100 {  
            width: 100%;
            place-items: center;
        }
        
        input {
            width: 100px;
            height: 50px;
            padding: 1rem;
            background: transparent;
            font-size: 1.25rem;
            text-align: center;
        }

        .btn {
            background: #000;
            color: var(--white);
            width: 100%;
            height: 50px;
            border-radius: .5rem;
            border: 1.5px solid var(--mainwhite);
            letter-spacing: var(--mainSpacing);
            font-weight: 900;
            transition: var(--mainTransition);

            &:hover {
                color: var(--darkGrey);
                background: transparent;
                border: 1px solid #000;
            }
        }
    }

    @media (max-width: 767px) {
        & {
            grid-template-columns: 1fr;
            padding: 2rem;
        }

        @media (max-width: 500px) {
            & { width: 100%; }
        }
    }
`;