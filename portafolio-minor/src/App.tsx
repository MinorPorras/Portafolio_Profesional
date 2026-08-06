import './styles/App.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/aboutMe.css'
import { MainNavbar } from './components/navbar';
import Home from './components/home';
import { AboutMe } from './components/aboutMe';

function App() {

  return (
    <>
      <MainNavbar/>
      <div className="app-content">
        <Home/>
        <AboutMe/>
      </div>
    </>
  );
}

export default App
