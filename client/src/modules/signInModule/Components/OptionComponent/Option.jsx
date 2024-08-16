/*
-- Files where Option is imported --
SignInModule.jsx
*/

import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './styles/optionStyles.module.scss';
import SignIn from '../SignInComponent/SignIn.jsx'; 

export default function Option({ onSignInClick }) {
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
                    <span className = { styles.txtTitle }>Login</span>
                    <button className = { styles.btnSignIn } onClick = { onClick }>Sign in</button>
                    <span className = { styles.txtSubTitle }>OR</span>
                    <button className = { styles.btnGuest }><Link to = "/map">Guest Login</Link></button> 
                </div>
            </div>

            <SignIn verify = { isBtnClicked } />
        </>
    )
}