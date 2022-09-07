import './index.scss';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [letterClass, setLetterClass] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    });
    useEffect(() => {
        const getPortfolio = async () => {
            const querySnapshot = await getDocs(collection(db, 'portfolio'));
            console.log(querySnapshot.docs[0].data());
            setPortfolio(querySnapshot.docs.map(doc => doc.data()));
        }
        getPortfolio();
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className='image-container'>
                {
                    portfolio.map((item, index) => {
                        return (
                            <div className='image-box' key={index}>
                                <img className='portfolio-image' src={item.image} alt='portfolio' />
                                <div className='content'>
                                    <p className='title'>{item.name}</p>
                                    <h4 className='tech-stack'>{item.tech_stack}</h4>
                                    <h4 className='description'>{item.description}</h4>
                                    <button className='btn' onClick={()=> window.open(item.url)} >VIEW</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return ( 
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                        idx={15}
                    />
                </h1>
                <div>{(portfolio.length > 0) ?
                    renderPortfolio(portfolio): <h2>FIREBASE QUOTA EXCEEDED. SORRY FOR THE INCONVENIENCE </h2>
                }</div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Portfolio;