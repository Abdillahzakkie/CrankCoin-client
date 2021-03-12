import { useState, useContext, useEffect } from 'react';
import { web3Context } from "../../../Context";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { walletShortner } from "../../../Helper";
import { NavbarContainer } from '../../../Navbar/navbar.styled'
import userLogo from '../../../../assets/login/userLogin.jpeg';
import '../../../Navbar/navbar.css';
import { FarmVaultContainer } from "./farmNavbar.style";

export const FarmVault = ({ theme }) => {
    const context = useContext(web3Context);
    const [navOpen, setNavOpen] = useState(false);
    const [userWallet, setUserWallet] = useState("0x...0000");
    const { loading, user, connectDapp, unlock } = context;
    
    useEffect(() => {
        if(loading) return;
        let isMounted = true;
        const firstAddressPart = walletShortner(user, 0, 4);
        const lastAddressPart = walletShortner(user, 38, 42);
        setUserWallet(() => `${firstAddressPart}...${lastAddressPart}`);
        // eslint-disable-next-line
        return () => isMounted = false;
    }, [loading, user, setUserWallet]);

    return (
        <FarmVaultContainer>
            <NavbarContainer className='center navbar navbarVault' theme={theme}>
                <div className="center nav-brand">
                    <Link to='/'>
                        <h2 className='mainSpacing'>Crankcoin</h2>
                    </Link>
                </div>
                <div className="center nav-icons">
                    <div className={navOpen ? 'center nav-list nav-list-mobile' : 'center nav-list' }>
                        <ul className="center">
                            <button type="button">
                                <a href={`https://etherscan.io/address/${user}`} rel="noreferrer" target="_blank">{userWallet}</a>
                            </button>
                            <button type="button" onClick={() => unlock()}>Unlock</button>
                            <span className='center' onClick={loading ? connectDapp : undefined}>
                                <img src={userLogo} alt="user" className={!loading ? "online": ""}  />
                            </span>
                        </ul>
                    </div>
                </div>
                <div className="toggle">
                    <FaAlignRight className='icon' onClick={() => setNavOpen(!navOpen)} />
                </div>
            </NavbarContainer>
        </FarmVaultContainer>
    )
}