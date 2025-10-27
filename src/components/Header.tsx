import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-info">
            <span className="contact">📞 +235 69864054</span>
            <span className="tagline">Journal en ligne indépendant</span>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <h1>Le Monde-Actuel</h1>
            <p className="subtitle">Information Générale et Analyse</p>
          </Link>
        </div>
      </div>
      
      <nav className="nav">
        <div className="container">
          <ul className="nav-list">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/politique">Politique</Link></li>
            <li><Link to="/economie">Économie</Link></li>
            <li><Link to="/societe">Société</Link></li>
            <li><Link to="/culture">Culture</Link></li>
            <li><Link to="/sport">Sport</Link></li>
            <li><Link to="/international">International</Link></li>
            <li><Link to="/equipe">Notre Équipe</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
