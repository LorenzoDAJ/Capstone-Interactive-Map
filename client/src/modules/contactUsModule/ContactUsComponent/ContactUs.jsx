/* 
-- Files where ContactUs is imported --
NavListComponent.jsx

*/

import { useEffect } from 'react';
import styles from './styles/contactUsStyles.module.scss';

export default function ContactUs({ isContactUs }) { // isContactUs is a prop from NavListComponent
    
    // adds the className rootContainer to the #root and removes it once the component unmounts
    useEffect(function() {
        const root = document.getElementById('root');
        root.classList.add(styles.rootContactUs);

        //removes the className once unmount
        return function() {
            root.classList.remove(styles.rootContactUs);
        };
    }, []);

    return (
        <>
            <div className = { isContactUs ? `${ styles.contactUsContainer } ${ styles.active }` : styles.contactUsContainer }>
                <div className = { styles.contactUsContent }>
                    <span className = { styles.txtTitle }>Contact Us</span>
                    <form className =  { styles.form }>
                        <label htmlFor = "name">Name</label>
                        <input 
                            autoComplete = "off"
                            name = "name"
                            type = "text"
                        />

                        <label htmlFor = "email">Email</label>
                        <input
                            autoComplete = "off"
                            name = "email"
                            type = "email"
                        />

                        <label htmlFor = "question">Question</label>
                        <textarea 
                            name = "question"
                        />

                        <button className = { styles.submitBtn }>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}