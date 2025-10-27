import { useParams, Link } from 'react-router-dom';
import './Article.css';

const Article = () => {
  const { id } = useParams<{ id: string }>();

  // Mock article data
  const article = {
    id: id,
    title: 'Le développement économique au Tchad : Perspectives et défis',
    category: 'Économie',
    author: 'Ibrahim Youssouf',
    date: '27 Octobre 2025',
    readTime: '8 min de lecture',
    image: 'https://via.placeholder.com/1200x600/c41e3a/ffffff?text=Image+Article',
    content: `
      <p>Le Tchad connaît actuellement une période de transformation économique importante. Les efforts de diversification et de modernisation de l'économie nationale ouvrent de nouvelles perspectives pour le développement du pays.</p>
      
      <h2>Une économie en mutation</h2>
      <p>Après des années de dépendance aux ressources pétrolières, le Tchad s'engage résolument dans la diversification de son économie. Cette stratégie vise à créer des sources de revenus alternatives et à renforcer la résilience économique du pays face aux fluctuations des cours mondiaux.</p>
      
      <p>Les secteurs prioritaires identifiés incluent l'agriculture, l'élevage, le tourisme et les technologies de l'information. Ces domaines présentent un potentiel considérable et bénéficient d'investissements croissants, tant publics que privés.</p>
      
      <h2>Les défis à relever</h2>
      <p>Malgré ces avancées encourageantes, plusieurs obstacles persistent. L'infrastructure limitée, notamment en termes de routes et d'électricité, constitue un frein majeur au développement économique. Les zones rurales, en particulier, souffrent d'un manque d'accès aux services essentiels.</p>
      
      <p>Le système éducatif nécessite également des réformes pour mieux préparer la jeunesse aux exigences du marché du travail moderne. La formation professionnelle et technique doit être renforcée pour répondre aux besoins des secteurs en croissance.</p>
      
      <h2>Des opportunités prometteuses</h2>
      <p>Le potentiel agricole du Tchad demeure largement sous-exploité. Avec des conditions climatiques favorables dans certaines régions et des terres arables étendues, le pays pourrait devenir un acteur majeur de la production alimentaire en Afrique centrale.</p>
      
      <p>Le secteur numérique représente également une opportunité exceptionnelle. L'adoption croissante des technologies mobiles et l'amélioration de la connectivité Internet créent un terreau fertile pour l'innovation et l'entrepreneuriat.</p>
      
      <h2>La voie vers un développement durable</h2>
      <p>Pour capitaliser sur ces opportunités, une approche coordonnée impliquant le gouvernement, le secteur privé et la société civile est essentielle. Les investissements dans l'éducation, l'infrastructure et la gouvernance constituent les piliers d'une croissance économique durable et inclusive.</p>
      
      <p>L'avenir économique du Tchad dépendra de la capacité du pays à surmonter ces défis tout en exploitant son potentiel considérable. Avec une planification stratégique et des investissements ciblés, le Tchad peut aspirer à une prospérité partagée par tous ses citoyens.</p>
    `
  };

  return (
    <div className="article-page">
      <article className="article">
        <div className="article-header">
          <div className="container">
            <Link to={`/${article.category.toLowerCase()}`} className="category-badge">
              {article.category}
            </Link>
            <h1>{article.title}</h1>
            <div className="article-meta-header">
              <span className="author">Par {article.author}</span>
              <span className="separator">•</span>
              <span className="date">{article.date}</span>
              <span className="separator">•</span>
              <span className="read-time">{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-body">
          <div className="container article-container">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            
            <div className="article-footer">
              <div className="share-section">
                <h3>Partager cet article</h3>
                <div className="share-buttons">
                  <button className="share-btn">Facebook</button>
                  <button className="share-btn">Twitter</button>
                  <button className="share-btn">WhatsApp</button>
                  <button className="share-btn">Email</button>
                </div>
              </div>
              
              <div className="author-section">
                <h3>À propos de l'auteur</h3>
                <p><strong>{article.author}</strong> - Journaliste spécialisé en économie</p>
              </div>
            </div>
          </div>
        </div>

        <div className="related-articles">
          <div className="container">
            <h2>Articles connexes</h2>
            <div className="related-grid">
              <Link to="/article/2" className="related-card">
                <h3>Innovation technologique locale</h3>
                <p>Des jeunes entrepreneurs lancent des startups...</p>
              </Link>
              <Link to="/article/3" className="related-card">
                <h3>Le sport tchadien à l'honneur</h3>
                <p>Les athlètes nationaux brillent lors des compétitions...</p>
              </Link>
              <Link to="/article/4" className="related-card">
                <h3>Festival culturel à N'Djamena</h3>
                <p>Un événement majeur célèbre la richesse...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
