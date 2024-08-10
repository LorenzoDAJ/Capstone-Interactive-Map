import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/optionStyles.module.scss';
import { SignInComponent } from '../SignInComponent/SignInComponent.jsx'; 

export function OptionComponent({ onSignInClick }) {
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    // checks if the sign in button is clicked
    function handleBtnClick() {
        setIsBtnClicked(true);
    }

    // wraps the function calls under a function (inline possible)
    function onClick() {
        // onSignInClick();
        handleBtnClick();
    }

    return (
        <>
            <div className = { isBtnClicked ? `${ styles.firstContainer } ${ styles.option }` :  `${ styles.firstContainer } ${ styles.option } ${ styles.active }` }> {/* Sign in or Log in */}
                <div className = { isBtnClicked ? styles.optionContent : `${ styles.optionContent } ${ styles.active }` }>
                    <p className = { styles.txtTitle }>Login</p>
                    <button className = { styles.btnSignIn } onClick = { onClick }>Sign in</button>
                    <p className = { styles.txtSubtitle }>OR</p>
                    <button className = { styles.btnGuest }><Link to = "/map">Guest Login</Link></button> 
                </div>
            </div>

            <SignInComponent verify = { isBtnClicked } />
        </>
    )
}