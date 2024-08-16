// act as the mapModule page. Temporary

import { NavigationModule } from '../modules/navigationModule/NavigationModule.jsx';
import ContactUsModule from '../modules/contactUsModule/ContactUsModule.jsx';

export function MainPage() {
    return (
        <>
            <NavigationModule />
            <ContactUsModule />
        </>
    )
}