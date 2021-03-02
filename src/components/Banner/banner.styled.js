import styled from 'styled-components';

export const BannerContainer = styled.div`
    grid-template-columns: 1fr;
    width: 50vw;
    height: 60%;
    background: var(--mainWhite);
    margin: auto;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 5px 5px 5px var(--darkGrey);

    .center:nth-child(1) {
        background: #000;
        color: var(--white);
        height: 40px;
        place-content: center;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 767px) {
        & {
            width: 90vw;
            height: 65%;
        }
    }
    
`