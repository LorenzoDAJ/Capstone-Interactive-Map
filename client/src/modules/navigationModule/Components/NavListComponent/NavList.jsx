/* 
-- Files where NavList is imported --
NavBar.jsx

*/


import { useState } from 'react';
import ContactUs from '../../../contactUsModule/ContactUsComponent/ContactUs.jsx';
import icons from '../../../../assets/icons/Icons.jsx';
import styles from './styles/navListStyles.module.scss';

export default function NavList (props) {
    const isClicked = props.verify; // a prop from NavBarComponent. Checks if hamburger is clicked

    const [isContactUs, setIsContactUsClicked] = useState(false); // checks if the about us is clicked located inside the navList

    function handleContactUsClick() {
        setIsContactUsClicked(!isContactUs);
    }

    return (
        <>
        <section className = { isClicked ? `${styles.navBarList} ${styles.active}`: styles.navBarList }> {/* navBarList active (for showing list if hamburger is clicked) */}
            {/* <div class = "minimize">min</div> [add it after main nav list is done] */}
            <ul className = { styles.navList }> 
                <li>
                    <img className = { `${styles.icon} ${styles.map}` } src = { icons.map } alt = "Map" />
                    <span className = { styles.text }>Map</span>
                </li>
                <li>
                    <img className = { `${styles.icon} ${styles.calendar}` } src = { icons.calendar } alt = "News and Events" />
                    <span className = { styles.text }>News and Events</span>
                </li>
                <li>
                    <img className = { `${styles.icon} ${styles.info}` } src = { icons.info } alt = "About Us" />
                    <span className = { styles.text }>About Us</span>
                </li>
                <li onClick = { handleContactUsClick }>
                    <img className = { `${styles.icon} ${styles.contact}` } src = { icons.contact } alt = "Contact Us" />
                    <span className = { styles.text }>Contact Us</span>
                </li>
                <li>
                    <img className = { `${styles.icon} ${styles.feedback}` } src = { icons.feedback } alt = "Submit Feedback" />
                    <span className = { styles.text }>Submit Feedback</span>
                </li>
            </ul>
        </section>

        <ContactUs isContactUs = { isContactUs } /> {/* Pass the isContactUs value to ContactUsComponent */}
        </>
    )
}