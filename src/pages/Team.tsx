import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Amadou Diallo',
    role: 'Directeur de Publication',
    bio: 'Journaliste chevronné avec plus de 20 ans d\'expérience dans les médias. Il supervise la ligne éditoriale et assure la qualité du contenu publié.',
    image: 'https://via.placeholder.com/200x200/1a1a2e/ffffff?text=AD'
  },
  {
    id: 2,
    name: 'Fatima Nguena',
    role: 'Rédactrice en Chef',
    bio: 'Experte en journalisme d\'investigation, elle coordonne l\'équipe de rédaction et veille à la pertinence des articles publiés.',
    image: 'https://via.placeholder.com/200x200/c41e3a/ffffff?text=FN'
  },
  {
    id: 3,
    name: 'Moussa Borohoul',
    role: 'Secrétaire de Rédaction',
    bio: 'Responsable de l\'organisation administrative et de la coordination entre les différentes équipes de la rédaction.',
    image: 'https://via.placeholder.com/200x200/0f3460/ffffff?text=MB'
  },
  {
    id: 4,
    name: 'Sarah Mahamat',
    role: 'Journaliste - Politique',
    bio: 'Spécialiste des questions politiques et institutionnelles, elle couvre l\'actualité gouvernementale et parlementaire.',
    image: 'https://via.placeholder.com/200x200/1a1a2e/ffffff?text=SM'
  },
  {
    id: 5,
    name: 'Ibrahim Youssouf',
    role: 'Journaliste - Économie',
    bio: 'Expert en économie et finance, il analyse les tendances économiques et les enjeux du développement.',
    image: 'https://via.placeholder.com/200x200/c41e3a/ffffff?text=IY'
  },
  {
    id: 6,
    name: 'Aïcha Abdoulaye',
    role: 'Journaliste - Société',
    bio: 'Couvre les questions sociales, l\'éducation et la santé avec un regard empathique et professionnel.',
    image: 'https://via.placeholder.com/200x200/0f3460/ffffff?text=AA'
  },
  {
    id: 7,
    name: 'Hassan Mahamat',
    role: 'Journaliste - Sport',
    bio: 'Passionné de sport, il suit de près les performances des athlètes nationaux et les compétitions internationales.',
    image: 'https://via.placeholder.com/200x200/1a1a2e/ffffff?text=HM'
  },
  {
    id: 8,
    name: 'Rachelle Djebet',
    role: 'Journaliste - Culture',
    bio: 'Spécialiste de la culture et des arts, elle met en lumière la richesse du patrimoine culturel tchadien.',
    image: 'https://via.placeholder.com/200x200/c41e3a/ffffff?text=RD'
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <div className="team-header">
        <div className="container">
          <h1>Notre Équipe</h1>
          <p className="team-intro">
            Rencontrez les professionnels dévoués qui font vivre Le Monde-Actuel, 
            votre source d'information indépendante et fiable.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="leadership-section">
          <h2 className="section-title">Direction</h2>
          <div className="leadership-grid">
            {teamMembers.slice(0, 3).map(member => (
              <div key={member.id} className="team-card leadership">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="journalists-section">
          <h2 className="section-title">Équipe de Rédaction</h2>
          <div className="journalists-grid">
            {teamMembers.slice(3).map(member => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <h2 className="section-title">Rejoignez-nous</h2>
          <p className="contact-text">
            Vous êtes journaliste ou souhaitez contribuer à notre journal ? 
            Contactez-nous au <strong>+235 69864054</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Team;
