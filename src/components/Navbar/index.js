import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
// import { web3Context } from "../Context";
import './navbar.css';

import { NavbarContainer } from './navbar.styled'
// import user from '../../assets/user_icon/male.jpg';

export function Navbar({ theme }) {
    const [navOpen, setNavOpen] = useState(false);

    const _active = {
        'padding': '.75rem',
    }

    let Navlist = ['', 'Staking', 'About','Tokenomics'];
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
                    {/* <img src={logo} alt="Edumark"/> */}
                    <h2 className='mainSpacing'>
                        {/* Raid<span> Exchange</span> */}
                        Crankcoin
                    </h2>
                </Link>
            </div>
            <div className={ navOpen ? 'center nav-list nav-list-mobile' : 'center nav-list' }>
                <ul>{Navlist}</ul>
            </div>
            {/* <div className="center nav-icons">
                <Link to='/cart' className='center'>
                    <AiOutlineShoppingCart className='icon' />
                </Link>

                <Link to={isLoggedIn ? '/products/auth/new' : '/login'}  className={isLoggedIn ? 'center' : 'hide'}>
                    <BiCloudUpload className='icon' />
                </Link>

                <Link to={isLoggedIn ? '/products/auth/new' : '/login'} className='center'>
                    <img 
                        src={user}
                        alt="user" 
                        className={isLoggedIn ? 'online': 'offline'}
                    />
                </Link>
            </div> */}
            <div className="toggle">
                <FaAlignRight className='icon' onClick={() => setNavOpen(!navOpen)} />
            </div>
        </NavbarContainer>
    )
}