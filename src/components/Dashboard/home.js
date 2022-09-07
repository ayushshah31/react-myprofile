import './home.scss';
import { auth, storage, db } from '../../firebase';
import { useRef } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

const Home = () => {
    const formRef = useRef();
    const userCollectionRef = collection(db, 'portfolio');
    const [isLoading,setIsLoading] = useState(false);
    
    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = formRef.current.name.value;
        const tech_stack = formRef.current.tech_stack.value;
        const description = formRef.current.description.value;
        const url = formRef.current.url.value;
        const image = formRef.current.file?.files[0] ;
        // console.log("Form Submit", name, tech_stack, description, url, image);
        const storageRef = ref(storage, `portfolio/${image.name ?? 'default'}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => { 
                setIsLoading(true);
                getDownloadURL(snapshot.ref).then(
                    (downloadUrl) => {
                        savePortfolio({name, tech_stack, description, url, image: downloadUrl});
                    }, (error) => {
                        console.log(error)
                        savePortfolio({name, tech_stack, description, url, image: 'portfolios/2/two.png'});
                    }
                )
            }, (error) => {
                console.log(error)
                savePortfolio({name, tech_stack, description, url, image: 'portfolios/2/two.png' });
            }
        )
    }

    const savePortfolio = async(portfolio) => {
        console.log(portfolio);
        try {
            await addDoc(userCollectionRef, portfolio);
            window.location.reload(false);
        } catch (error) {
            console.log(error)
            alert("Failed to add Portfolio");
        }
        setIsLoading(false);
    }

    return (
        <div className="container dashboard">
            <div className='text-zone home-page'>
                <form ref={formRef} onSubmit={ submitPortfolio }>
                    <ul>
                        <li><input type="text" name='name' placeholder='Name' required /></li>
                        <li><textarea placeholder='Tech Stack' name='tech_stack' required></textarea></li>
                        <li><textarea placeholder='Description' name='description' required></textarea></li>
                        <li><input type='text' name='url' placeholder='Url' required /></li>
                        <li><input type='file' name='file' placeholder='image' /></li>
                        <input type='submit' className='flat-button' value='SEND' />
                        <input type='button' className='flat-button' value='SIGN OUT' onClick={() => auth.signOut()}/>
                    </ul>
                </form> 
                { isLoading? <h1>IS LOADING</h1> : <></>}
            </div>
        </div>
    );
}

export default Home;