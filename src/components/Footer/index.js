import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { FooterContainer } from "./footer.styled";

export function Footer() {
    const [email, setEmail] = useState('');
    const getYear = new Date().getFullYear();

    let socialIcon = [
        { icon: <FaGithub /> , to: "https://github.com/abdillahzakkie" },
        { icon: <FaTelegram /> , to: "https://t.me/DragonTrybe" },
        { icon: <FaLinkedin /> , to: "https://www.linkedin.com/in/abdullah-zakarriya-ba58961aa" },
        { icon: <FaTwitter /> , to: "https://twitter.com/Dev_DragonLord" },
    ];
    socialIcon = socialIcon.map((item, i) => {
    return <a href={item.to} key={i} target='_blank' rel='noopener noreferrer' className='icon'>{item.icon}</a>
    })
    
    return (
        <FooterContainer className='center footer'>
            <section className="center">
                <h3>about me</h3>
                <small>
                    We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                </small>
                <small>
                    copyright &copy; {getYear} all rights reserved | 
                    Designed & built with 💖 by DragonLord
                </small>
            </section>
            <section className="center">
                <h3>newsletter</h3>
                <small>
                    Stay up to date with our latest trends
                </small>
                <form className='form-control'>
                    <input type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='enter email address'
                    />
                </form>
            </section>
            <section className="center">
                <h3>follow me</h3>
                <small>Let us be social</small>
                <div>{socialIcon}</div>
            </section>
        </FooterContainer>
    )
}