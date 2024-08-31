import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Option from './Components/OptionComponent/Option.jsx';
import SignIn from './Components/SignInComponent/SignIn.jsx';
import Greeting from './Components/GreetingComponent/Greeting.jsx';
import styles from './styles/signInModuleStyles.module.scss';

export function SignInModule() {

    // adds the className rootContainer to the #root and removes it once the component unmounts
    useEffect(function() {
        const root = document.getElementById('root');
        root.classList.add(styles.rootContainer);

        //removes the className once unmount
        return function() {
            root.classList.remove(styles.rootContainer);
        };
    }, []);

    // --------- Option Component ---------
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    // checks if the sign in button is clicked
    function handleBtnClick() {
        setIsBtnClicked(!isBtnClicked);
    }

    // wraps the function calls under a function (inline possible)
    function onClick() {
        // onSignInClick();
        handleBtnClick();
    }

    return(
        <>
            <div className = { styles.loginContainer }> {/* Main container for option and login form*/}
                <Option 
                    isBtnClicked = { isBtnClicked }
                    onClick = { onClick }
                />
                <SignIn 
                    isBtnClicked = { isBtnClicked } 
                    onClick = { onClick }    
                />
                
                <Greeting />
            </div>
        </>
    )
}