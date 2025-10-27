import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p className="contact-intro">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
            suggestion ou collaboration.
          </p>
        </div>
      </div>

      <div className="container contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Informations de Contact</h2>
            
            <div className="info-item">
              <h3>📞 Téléphone</h3>
              <p><strong>+235 69864054</strong></p>
              <p>Disponible du lundi au vendredi, 8h-18h</p>
            </div>

            <div className="info-item">
              <h3>📧 Email</h3>
              <p><strong>contact@lemonde-actuel.td</strong></p>
              <p>redaction@lemonde-actuel.td</p>
            </div>

            <div className="info-item">
              <h3>📍 Adresse</h3>
              <p><strong>Le Monde-Actuel</strong></p>
              <p>N'Djamena, Tchad</p>
            </div>

            <div className="info-item">
              <h3>⏰ Horaires</h3>
              <p>Lundi - Vendredi: 8h00 - 18h00</p>
              <p>Samedi: 9h00 - 14h00</p>
              <p>Dimanche: Fermé</p>
            </div>

            <div className="social-media">
              <h3>Suivez-nous</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envoyez-nous un Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
