import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-a-bg.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['y', 'u', 's', 'h'];
    const jobArray = ['A','p','p',' / ','W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [letterClass]);

    return ( 
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>i</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img className='logo' src={LogoTitle} alt='developer' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={15} />
                    </h1>
                    <h2>FullStack Developer / Flutter / React / Firebase </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                {/* <Logo /> */}
                <div className='logo-container'>
                    <div className='solid-logo'>
                        <div className='glitch'></div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;