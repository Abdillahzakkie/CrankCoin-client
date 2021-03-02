import styled from "styled-components";
import background from "../../../assets/moon/moon3.jpg";

export const AboutBackground = styled.div`
    background: url(${background}) fixed top/cover no-repeat;
    width: 100%;
    height: 50vh;
    place-items: center;

    .center {
        width: 70%;
        color: var(--white);
        padding: 2rem;
        letter-spacing: var(--mainSpacing);
    }

    @media (max-width: 767px) {
        & {
            height: auto;
        }

        .center {
            width: 90%;
            h1 { font-size: 2rem; }
        }
    }
`

export const AboutContainer = styled.div`

    .wrapper {

        .wrapper-fluid {
            grid-template-columns: repeat(2, 1fr);
            padding: 8rem 2rem;
            background: #000;
            color: var(--white);
            line-height: 2;
            grid-gap: 2rem;

            .right {
                span {
                    text-decoration: underline;
                }

                p {
                    margin-bottom: .5rem;
                }
            }
        }
    }

    @media (max-width: 767px) {
        & {

            .wrapper {

                .wrapper-fluid {
                    grid-template-columns: 1fr;
                }
            }
        }
    }
`