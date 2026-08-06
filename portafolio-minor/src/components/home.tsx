import { useLanguage } from '../hooks/useLanguage';
import { heroData } from '../data/home';    

export function Home() {
    const { language } = useLanguage();

    return (
        <div className="hero" id="home">
            <h1 className='hero-title'>{heroData.greeting[language]}</h1>
            <h2 className='hero-role'>{heroData.role[language]}</h2>
            <p className='hero-tagline'>{heroData.tagline[language]}</p>
            <div className='hero-social-section'>
                {heroData.redes.map(({url, Icon, user}) => (
                <a 
                    key={url} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='social-link'
                >
                    <Icon className="social-icon" size={24}/>
                    {user}
                </a>
                ))}
            </div>

        </div>
    );
}

export default Home;