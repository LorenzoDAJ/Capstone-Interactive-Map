import React, { useState, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import dropdownStyles from './Components/UserDropdownComponent/styles/userDropdownStyles.module.scss';
import navListItemsStyles from './Components/NavListComponent/styles/navListItemsStyles.module.scss';

// ------- Navigation Components Section -------
import NavBar from './Components/NavBarComponent/NavBar.jsx'
import NavList from './Components/NavListComponent/NavList.jsx'
import UserDropdown from './Components/UserDropdownComponent/UserDropdown.jsx'

// ------- NavList Items Section -------
import ContactUsComponent from './Components/NavListComponent/SubComponent/ContactUsComponent/ContactUs.jsx'
import AboutUsComponent from './Components/NavListComponent/SubComponent/AboutUsComponent/AboutUs.jsx'
import NewsAndEvents from './Components/NavListComponent/SubComponent/newsAndEventsModule/Components/NewsAndEvents.jsx'
import SubmitFeedback from './Components/NavListComponent/SubComponent/FeedbackComponent/SubmitFeedback.jsx'

export default function NavigationModule () {

// ------- Global -------

    // Checks if the user clicked outside of the active modal
    // Checks if the user clicked outside of the user dropdown
    // Checks if the user clicked outside of the navList
    function handleClickOutside(e) {
        if (currentModal && !document.getElementById(currentModal).contains(e.target)) {
            setCurrentModal(null);
        } else if (isDropClicked && !document.getElementById("dropdown").contains(e.target) && !document.getElementById("userIcon").contains(e.target)) {
            setIsDropClicked(!isDropClicked);
        }
        else if (!isNavListClosed && !document.getElementById("navigationList").contains(e.target) && !document.querySelector("#navBar").contains(e.target)) {
            handleNavClick();
        }
    }

// ------- NavBar Logic Section -------
    const [isHamClicked, setIsHamClicked] = useState(false);

    //check is hamburger is clicked, change bool value whenever it is clicked
    function handleNavClick() {
        setIsHamClicked(!isHamClicked);
        setIsNavListClosed(!isNavListClosed); 
        console.log(isHamClicked)
    }

// ------- NavList Logic Section -------  
    const nodeRef = useRef(null)
    
    const [isNavListClosed, setIsNavListClosed] = useState(true);
    const [currentModal, setCurrentModal] = useState(null);

    // fetch which modal is clicked from the navList (Applied for every modal within the navList)
    function captureNavListClick (modal) {
        setCurrentModal(modal);
    }
    
// ------- UserDropdown Logic Section -------

    // separate nodeRef is used to avoid returning null value after fade-enter className
    // null happends because of the nature of the original nodeRef 
    const dropdownNodeRef = useRef(null);

    const [isDropClicked, setIsDropClicked] = useState(false);

    function handleDropClick() {
        setIsDropClicked(!isDropClicked);
    }

    return (
        <>
            {/* ------- Navigation Components Section ------- */}
                <NavBar 
                    isHamClicked = { isHamClicked } 
                    isNavListClosed = { isNavListClosed }
                    handleNavClick = { handleNavClick } 
                    handleDropClick = { handleDropClick }
                />
    
                <NavList 
                    handleClickOutside = { handleClickOutside }
                    isHamClicked = { isHamClicked } 
                    isNavListClosed = { isNavListClosed }
                    handleNavClick = { handleNavClick } 
                    captureNavListClick = { captureNavListClick }  
                />
                
                <CSSTransition
                in = { isDropClicked }
                timeout = { 1000 }
                nodeRef = { dropdownNodeRef }
                unmountOnExit
                classNames = {{
                    enter: dropdownStyles["fade-enter"],
                    enterActive: dropdownStyles["fade-enter-active"],
                    exit: dropdownStyles["fade-exit"],
                    exitActive : dropdownStyles["fade-exit-active"]
                }}
                >
                    <UserDropdown
                        handleClickOutside = { handleClickOutside }
                        isDropClicked = { isDropClicked }
                        nodeRef = { dropdownNodeRef }
                    />
                </CSSTransition>

                <div className = { navListItemsStyles.modalContainer }>
                    {/* ------- ContactUs Component Section ------- */}
                    <CSSTransition
                        in = { currentModal === 'contactUs' }
                        timeout = { 400 }
                        unmountOnExit
                        classNames = {{
                            enter: navListItemsStyles['modal-enter'],
                            enterActive: navListItemsStyles['modal-enter-active'],
                            exit: navListItemsStyles['modal-exit'],
                            exitActive: navListItemsStyles['modal-exit-active']
                        }}
                        nodeRef = { nodeRef }
                    >
                        <ContactUsComponent 
                            setCurrentModal = { setCurrentModal }
                            currentModal = { currentModal }
                            handleClickOutside = { handleClickOutside }
                            nodeRef = { nodeRef }
                        />
                            
                    </CSSTransition>

                    {/* ------- AboutUs Component Section ------- */}
                    <CSSTransition
                        in = { currentModal === 'aboutUs'}
                        timeout = { 400 }
                        unmountOnExit
                        classNames = {{
                            enter: navListItemsStyles['modal-enter'],
                            enterActive: navListItemsStyles['modal-enter-active'],
                            exit: navListItemsStyles['modal-exit'],
                            exitActive: navListItemsStyles['modal-exit-active']
                        }}
                        nodeRef = { nodeRef }
                    >
                        <AboutUsComponent 
                            setCurrentModal = { setCurrentModal }
                            currentModal = { currentModal }
                            handleClickOutside = { handleClickOutside }
                            nodeRef = { nodeRef }
                        
                        />
                    </CSSTransition>
                    
                    {/* ------- NewsAndEvents Component Section ------- */}
                    <CSSTransition
                        in = { currentModal === 'newsAndEvents'}
                        timeout = { 400 }
                        unmountOnExit
                        classNames = {{
                            enter: navListItemsStyles['modal-enter'],
                            enterActive: navListItemsStyles['modal-enter-active'],
                            exit: navListItemsStyles['modal-exit'],
                            exitActive: navListItemsStyles['modal-exit-active']
                        }}
                        nodeRef = { nodeRef }
                    >
                        <NewsAndEvents 
                            setCurrentModal = { setCurrentModal }
                            currentModal = { currentModal }
                            handleClickOutside = { handleClickOutside }
                            nodeRef = { nodeRef }
                        />
                    </CSSTransition>
                    
                    {/* ------- SubmitFeedback Component Section ------- */}
                    <CSSTransition
                        in = { currentModal === 'submitFeedback'}
                        timeout = { 400 }
                        unmountOnExit
                        classNames = {{
                            enter: navListItemsStyles['modal-enter'],
                            enterActive: navListItemsStyles['modal-enter-active'],
                            exit: navListItemsStyles['modal-exit'],
                            exitActive: navListItemsStyles['modal-exit-active']
                        }}
                        nodeRef = { nodeRef }
                    >
                        <SubmitFeedback 
                            setCurrentModal = { setCurrentModal }
                            currentModal = { currentModal }
                            handleClickOutside = { handleClickOutside }
                            nodeRef = { nodeRef }
                        />
                    </CSSTransition>
                </div>
            
        </>
    )
}