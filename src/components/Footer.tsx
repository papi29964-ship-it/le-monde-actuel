import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Le Monde-Actuel</h3>
              <p>Journal en ligne indépendant d'information générale et d'analyse.</p>
              <p className="contact-info">
                <strong>📞 Contact:</strong> +235 69864054
              </p>
            </div>
            
            <div className="footer-section">
              <h3>Rubriques</h3>
              <ul>
                <li><Link to="/politique">Politique</Link></li>
                <li><Link to="/economie">Économie</Link></li>
                <li><Link to="/societe">Société</Link></li>
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/sport">Sport</Link></li>
                <li><Link to="/international">International</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>À propos</h3>
              <ul>
                <li><Link to="/equipe">Notre Équipe</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/mentions-legales">Mentions Légales</Link></li>
                <li><Link to="/politique-confidentialite">Politique de Confidentialité</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Suivez-nous</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Le Monde-Actuel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
