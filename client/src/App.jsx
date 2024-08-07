import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SignInModule } from './modules/signInModule/SignInModule.jsx';
import { MainPage } from './pages/MainPage.jsx';

import './styles/global.scss';

export function App() {
  return (    
    <Router>
      <Routes>
        <Route path = "/" element = { <SignInModule /> } />
        <Route path = "/map" element = { <MainPage /> } />
      </Routes>
    </Router>  
  )
}

