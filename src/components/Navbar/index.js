import { useState, useContext } from 'react';
import { web3Context } from "../Context";
import { NavLink, Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import './navbar.css';

import { NavbarContainer } from './navbar.styled'
import user from '../../assets/login/userLogin.jpeg';

export function Navbar({ theme }) {
    const context = useContext(web3Context);
    const [navOpen, setNavOpen] = useState(false);

    const { loading, connectDapp } = context;
    const _active = {
        'padding': '.75rem',
    }

    let Navlist = ['', 'Dashboard', 'Farm', 'Whitepaper', 'FAQ'];
    Navlist = Navlist.map((item, i) => {
        return (
            <NavLink 
                key={i} 
                exact
                activeStyle={_active} 
                to={item.replace('','/').toLowerCase()}
                className='mainSpacing'
            >
                {item === '' ? 'Home' : item}
            </NavLink>
        );
    });

    return (
        <NavbarContainer className='center navbar' theme={theme}>
            <div className="center nav-brand">
                <Link to='/'>
                    <h2 className='mainSpacing'>
                        Crankcoin
                    </h2>
                </Link>
            </div>
            <div className={ navOpen ? 'center nav-list nav-list-mobile' : 'center nav-list' }>
                <ul>{Navlist}</ul>
            </div>
            <div className="center nav-icons">
                <span className='center' onClick={loading ? connectDapp : undefined}>
                    <img src={user} alt="user" className={!loading ? "online": ""}  />
                </span>
            </div>
            <div className="toggle">
                <FaAlignRight className='icon' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </NavbarContainer>
    )
}