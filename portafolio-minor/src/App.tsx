import './styles/App.css'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <h1 style={{color: 'var(--text-primary)'}}>Portafolio Minor</h1>
      <h1 style={{color: 'var(--text-primary)'}}>Tema actual: {theme}</h1>
      <button onClick={toggleTheme}
      style={{
        padding: '0.6rem 1.2rem',
        cursor: 'pointer',
        backgroundColor: 'var(--accent-primary)',
        color: 'var(--text-primary)',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1rem',
      }}>
        Cambiar a modo {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
}

export default App
