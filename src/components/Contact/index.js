import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const refForm = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xqbf85j',
            'template_krjutp3',
            refForm.current,
            'v4PXlumH-B-iyzFZT'
        ) 
            .then(
                () => {
                    alert("Message sent successfully!")
                    window.location.reload(false);
                },
                (error) => {
                    console.log(error)
                    alert("Failed to send message, please try again!")
                }
        )
    }

    return ( 
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Want to collaborate on a project and have a chat on ice-cream🍦 with me!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half' ><input type="text" name='from_name' placeholder='Name' required /></li>
                                <li className='half' ><input type="email" name='email' placeholder='Email' required /></li>
                                <li><input type='text' name='subject' placeholder='Subject' required /></li>
                                <li><textarea placeholder='Message' name='message' required></textarea></li>
                                <li><input type='submit' className='flat-button' value='SEND'/></li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Ayush Shah,
                    <br />
                    India,
                    <br />
                    Mumbai <br />
                    {/* Brownie Town <br /> */}
                    <span>shahayush934@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[18.922064, 72.834641]} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[18.922064, 72.834641]}>
                            <Popup>
                                Ayush Lives here!.<br /> Come over for an ice-cream & chat :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Contact;