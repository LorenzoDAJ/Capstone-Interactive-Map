import { useEffect } from 'react';
import Option from './Components/OptionComponent/Option.jsx';
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

    return(
        <>
            <div className = { styles.loginContainer }> {/* Main container for option and login form*/}
                <Option /> {/*SignInComponent is called within OptionComponent [Both share a single container]*/}
                <Greeting />
            </div>
        </>
    )
}