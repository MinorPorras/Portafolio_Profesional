import './styles/App.css'
import './styles/navbar.css'
import { MainNavbar } from './components/navbar';
import Home from './components/home';

function App() {

  return (
    <>
      <MainNavbar/>
      <div className="app-content">
        <Home/>
      </div>
    </>
  );
}

export default App
