import styled from 'styled-components';

export const NavbarContainer = styled.div`
    grid-template-columns: repeat(12, 1fr);
    background: #000;
    color: var(--white);
    border-bottom: ${props => props.theme !== 'dark' && '1px solid var(--darkGrey)'};
    width: 100vw;
    height: auto;
    padding: 2rem;
    z-index: 1;

    & .nav-list ul a,
    & .toggle {
        color: var(--white);
    }

    @media (max-width: 991px) {
        & { padding: 0; }
    }
`