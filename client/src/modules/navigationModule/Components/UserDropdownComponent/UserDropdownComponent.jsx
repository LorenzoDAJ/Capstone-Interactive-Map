// For all menus, add a function where the menus will disappear when the user click outside

import { Link } from "react-router-dom";

import icons from '../../../../assets/icons/Icons.jsx';
import styles from '../../styles/userDropdownStyles.module.scss';

export function UserDropdownComponent(props) {
    const isClicked = props.verify;

    return (
        <>  
            <div className = { isClicked ? `${styles.dropdownMenu} ${styles.active}`: styles.dropdownMenu } >
                <div className = { styles.dropMenuTitle }>
                    <span className = { styles.title }>Guest Account</span> {/* Will be changed to handle dynamic data */}
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