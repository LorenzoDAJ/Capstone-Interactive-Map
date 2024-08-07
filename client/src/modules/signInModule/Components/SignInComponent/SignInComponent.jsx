/*
-- 07/29/2024 --
NOTE: Lines of codes in comments are related to MERN. 
      Not finished, only client side.

*/
import { Link } from "react-router-dom";

import styles from '../../styles/signInStyles.module.scss';
import React, { useState } from 'react';
// import axios from 'axios'

export function SignInComponent() {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // // const navigate = useNavigate()

    // async function handleSubmit(e) {
    //     e.preventDefault()
        
    //     try {
    //         await axios.post('http://localhost:3000/', {email, password})
    //     }
    //     catch(e) {
    //         console.log(e);
    //     }
    // }

    return (
        <div className = { styles.firstContainer }> {/* Login form */}      
            <p className = { styles.txtTitle }>Sign in</p>
            <form className = { styles.form } /* onSubmit = {handleSubmit} */ >
                <label htmlFor = "email">Email</label>
                <input 
                    autoComplete = "off"
                    name = "email"
                    type = "email" 
                    // required --> to be added back once backend is resolved
                    /* onChange = {(e) => setEmail(e.target.value)} */
                />

                <label htmlFor = "password">Password</label>
                <input 
                    autoComplete = "off"
                    name = "password"
                    type = "password" 
                    // required --> to be added back once backend is resolved
                    /* onChange = {(e) => setPassword(e.target.value)} */
                />
                {/* Change button names into general names */}
                <button className = { styles.btnGuest } type = "submit">
                    <Link to = "/map">Sign in</Link>
                </button>
            </form>
        </div>
    )
}