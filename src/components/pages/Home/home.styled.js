import styled from "styled-components";
import darkTheme from "../../../assets/dark-theme.jfif";

export const HomeBackground = styled.div`
    background: url(${darkTheme}) fixed top/cover no-repeat;
    width: 100%;
    height: 85vh;
`
export const HomeContainer = styled.div`
    background: #000;

    .container {
        padding: 4rem 2rem;
        color: var(--white);
        grid-gap: 2rem 0;
        letter-spacing: var(--mainSpacing);

        h1 { font-size: 3rem; }

        p { line-height: 2; }

        .btn {
            padding: 1rem 2rem;
            border-radius: .5rem;
            letter-spacing: var(--mainSpacing);
            font-weight: 600;
            transition: var(--mainTransition)
        }

        .btn:hover {
            background: transparent;
            color: var(--white);
            border: .1rem solid var(--mainWhite);
            box-shadow: 5px 5px 5px var(--darkGrey);
        }
    }
`