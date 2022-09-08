import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoA from '../../assets/images/logo-a-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope, faHome, faUser, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return ( 
        <div className='nav-bar'>
            <Link to='/dashboard' className='logo'>
                <img src={LogoA} alt="logo" />
                {/* <img className='.sub-logo' src={LogoSubtitle} alt="logo-subtitle" /> */}
                Ayush
            </Link>
            <nav className={showNav? 'mobile-show' : ""}>
                <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon icon={faClose} color='#ffd700' size='3x' className='close-icon' onClick={() => setShowNav(false)} />
            </nav>

            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/ayush-shah-711476225/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/ayushshah31'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.codechef.com/users/ayush_shah_31'>
                        <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} size='3x' color='#ffd700' className='hamburger-icon' onClick={()=>setShowNav(true)} />
        </div>
    );
}

export default Sidebar;