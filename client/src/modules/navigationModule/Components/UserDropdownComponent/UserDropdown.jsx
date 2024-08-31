// For all menus, add a function where the menus will disappear when the user click outside

/* 
-- Files where UserDropdown is imported --
NavigationModule.jsx

*/

import { Link } from "react-router-dom";
import { useEffect } from 'react';

import icons from '../../../../assets/icons/Icons.jsx';
import styles from './styles/userDropdownStyles.module.scss';

export default function UserDropdown({ handleClickOutside, isDropClicked, nodeRef, ...props }) {

    // closes the dropdown if the user clicked outside (anywhere in the screen except the dropdown)
    useEffect(function() {
        if (isDropClicked) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropClicked]);
    
    return (
        <>  
            <div id = "dropdown" ref = { nodeRef } className = { `${ styles.dropdownMenu } ${ props.className }`} >
                <div className = { styles.dropMenuTitle }>
                    <span className = { styles.txtTitle }>Guest Account</span> {/* Will be changed to handle dynamic data */}
                </div>
                <ul className = { styles.dropMenuList }>
                    {/* If guest account is used */}
                    <li>
                        <img className = { `${styles.icon} ${styles.signin}` } src = {icons.signIn} alt = "Signin"/>
                        <span className = { styles.text }><Link to = "/">Sign in</Link></span>
                    </li>

                    {/* else, if existing account is logged in */}
                </ul>
            </div>
        </>
    )
}