import { useState, useContext, useEffect } from 'react';
import { web3Context } from "../Context";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import '../Navbar/navbar.css';
import './index.css';

import { NavbarContainer } from '../Navbar/navbar.styled'
import userLogo from '../../assets/login/userLogin.jpeg';

export const  VaultNavbar = ({ theme }) => {
    const context = useContext(web3Context);
    const [navOpen, setNavOpen] = useState(false);
    const [userWallet, setUserWallet] = useState('0x...c9c6')
    const { loading, walletShortner, user } = context;

    useEffect(() => {
        if(loading) return;
        const firstAddressPart = walletShortner(user, 0, 4);
        const lastAddressPart = walletShortner(user, 38, 42);
        setUserWallet(() => `${firstAddressPart}...${lastAddressPart}`);
    }, [loading, user, walletShortner, setUserWallet])
    return (
        <NavbarContainer className='center navbar' theme={theme}>
            <div className="center nav-brand">
                <Link to='/'>
                    <h2 className='mainSpacing'>Crankcoin</h2>
                </Link>
            </div>
            <div className="center nav-icons">
                <div className={ navOpen ? 'center nav-list nav-list-mobile' : 'center nav-list' }>
                    <button type="button">{userWallet}</button>
                    <button type="button" disabled>Unlock</button>
                    <span className='center'>
                        <img src={userLogo} alt="user" className={!loading ? "online": ""}  />
                    </span>
                </div>
            </div>
            <div className="toggle">
                <FaAlignRight className='icon' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </NavbarContainer>
    )
}