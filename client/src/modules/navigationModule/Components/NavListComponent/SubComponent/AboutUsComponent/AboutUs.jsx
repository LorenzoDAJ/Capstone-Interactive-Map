import { useEffect } from 'react'

import styles from './styles/aboutUsStyles.module.scss'
import images from '../../../../../../assets/images/Images.jsx'
import icons from '../../../../../../assets/icons/Icons.jsx'

export default function AboutUs({ setCurrentModal, handleClickOutside, currentModal, nodeRef, ...props }) {

    // closes the modal box if the user clicked outside (anywhere in the screen except the modal box)
    useEffect(function() {
        if (currentModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [currentModal]);

    return (
        <>
            <div id = "aboutUs" ref = { nodeRef } className = { `${ styles.aboutUsContainer } ${ props.className }` }>
                <div className = { styles.aboutUsContent }>
                    <div className = { styles.close } onClick = { function() { setCurrentModal(null); }}>
                        <img src = { icons.close } alt = "Close" />
                    </div>
                    <div className = { styles.firstSubContainer }>
                        <div className = { styles.firstSubGroup }>
                            <span className = { styles.txtTitle }>About Us</span>
                            <p className = { styles.txtSubTitle }>Lorem Espasol</p>
                        </div>
                        <div className = { styles.secondSubGroup }>
                            <img className = { styles.highlightImg } src = { images.Pigs }alt = "Image Highlight"></img>
                        </div>
                    </div>
                    
                    <div className = { styles.secondSubGroup }>
                        <span className = { styles.txtTitle}>Historical Background</span>
                        <p className = { styles.txtSubTitle}>Lorem Espasol</p>
                    </div>
                </div>
            </div>
        </>
    )
}