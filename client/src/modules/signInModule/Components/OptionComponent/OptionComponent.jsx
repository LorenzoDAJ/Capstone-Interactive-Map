import { Link } from "react-router-dom";
import styles from '../../styles/optionStyles.module.scss';

export function OptionComponent({ onSignInClick }) {
    return (
        <div className = { styles.firstContainer }> {/* Sign in or Log in */}
            <p className = { styles.txtTitle }>Login</p>
            <button className = { styles.btnSignIn } onClick = {onSignInClick}>Sign in</button>
            <p className = { styles.txtSubtitle }>OR</p>
            <button className = { styles.btnGuest }><Link to = "/map">Guest Login</Link></button> 
        </div>
    )
}