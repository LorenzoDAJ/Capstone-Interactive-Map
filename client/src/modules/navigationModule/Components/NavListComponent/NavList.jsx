/* 
-- Files where NavList is imported --
NavigationModule.jsx

*/

import { useEffect } from 'react';

import icons from '../../../../assets/icons/Icons.jsx';
import styles from './styles/navListStyles.module.scss';

export default function NavList ({ handleClickOutside, isHamClicked, isNavListClosed, handleModalClick, captureNavListClick }) {

    // closes the dropdown if the user clicked outside (anywhere in the screen except the dropdown)
    useEffect(function() {
        if (!isNavListClosed) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavListClosed]);

    return (
        <>
            <section id = "navigationList" className = { isHamClicked && !isNavListClosed ? `${styles.navBarList} ${styles.active}`: styles.navBarList }> {/* navBarList active (for showing list if hamburger is clicked) */}
                {/* <div class = "minimize">min</div> [add it after main nav list is done] */}
                <ul className = { styles.navList }> 
                    <li>
                        <img className = { `${styles.icon} ${styles.map}` } src = { icons.map } alt = "Map" />
                        <span className = { styles.text }>Map</span>
                    </li>
                    <li onClick = { function() { handleModalClick(); captureNavListClick('newsAndEvents'); } }>
                        <img className = { `${styles.icon} ${styles.calendar}` } src = { icons.calendar } alt = "News and Events" />
                        <span className = { styles.text }>News and Events</span>
                    </li>
                    <li onClick = { function() { handleModalClick(); captureNavListClick('aboutUs'); } }>
                        <img className = { `${styles.icon} ${styles.info}` } src = { icons.info } alt = "About Us" />
                        <span className = { styles.text }>About Us</span>
                    </li>
                    <li onClick = { function() { handleModalClick(); captureNavListClick('contactUs'); } }>
                        <img className = { `${styles.icon} ${styles.contact}` } src = { icons.contact } alt = "Contact Us" />
                        <span className = { styles.text }>Contact Us</span>
                    </li>
                    <li onClick = { function() { handleModalClick(); captureNavListClick('submitFeedback'); } }>
                        <img className = { `${styles.icon} ${styles.feedback}` } src = { icons.feedback } alt = "Submit Feedback" />
                        <span className = { styles.text }>Submit Feedback</span>
                    </li>
                </ul>
            </section>
        </>
    )
}