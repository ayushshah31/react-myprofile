import { faJsSquare, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { SiMongodb, SiFlutter, SiFirebase } from "react-icons/si";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [letterClass]);
    return ( 
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a software developer by the name of Ayush Ketan Shah. I am an enthusiastic app and web developer having self-taught myself. I have experience working on numerous projects and have good expertise in app and web development. I never stop discovering new skillsets.
                    </p>
                    <p>
                        I have a positive outlook, being self-assured, am analytical, open-minded, ambitious but not reckless, fair-minded, and persistent. I love working with teams to create scalable and sustainable applications that provide real value to users. I'm passionate about what I do and work hard on anything that's put in front of me.
                    </p>
                    <p>
                        I have a year's worth of experience creating apps for both personal projects as well as my college committee, and I'm now working on two app development projects with Harvard Mclean Hospital. Regarding web programming, I've worked on a variety of personal projects and a few group projects with my friends.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            {/* <FontAwesomeIcon icon={faAngular}  color='#DD0031' /> */}
                            < SiMongodb color='#70EF67'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color='#3D719E'/>
                        </div>
                        <div className='face3'>
                            {/* <FontAwesomeIcon icon={SiFirebase}  color='#28A4D9' /> */}
                            <SiFirebase color='#F9CC49'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare}  color='yellow' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faReact}  color='#61DBF8' />
                        </div>
                        <div className='face6'>
                            {/* <FontAwesomeIcon icon={faGitAlt}  color='#EC4D28' /> */}
                            <SiFlutter color='#5ED4F4' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default About;