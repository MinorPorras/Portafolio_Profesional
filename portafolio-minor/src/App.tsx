import './styles/App.css'
import './styles/navbar.css'
import { MainNavbar } from './components/navbar';

function App() {

  return (
    <>
      <MainNavbar></MainNavbar>
      <div className="app-content">
        <h1>Portafolio Minor</h1>
      </div>
    </>
  );
}

export default App
