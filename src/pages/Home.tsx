import { Link } from 'react-router-dom';
import './Home.css';

// Mock data for articles
const featuredArticle = {
  id: 1,
  title: "Le développement économique au Tchad : Perspectives et défis",
  excerpt: "Une analyse approfondie des opportunités de croissance économique et des obstacles à surmonter pour le développement du pays...",
  category: "Économie",
  author: "Rédaction",
  date: "27 Octobre 2025",
  image: "https://via.placeholder.com/800x450/c41e3a/ffffff?text=Article+Principal"
};

const newsArticles = [
  {
    id: 2,
    title: "Nouvelle réforme éducative annoncée",
    excerpt: "Le gouvernement dévoile un plan ambitieux pour moderniser le système éducatif...",
    category: "Société",
    date: "26 Octobre 2025"
  },
  {
    id: 3,
    title: "Le sport tchadien à l'honneur",
    excerpt: "Les athlètes nationaux brillent lors des compétitions internationales récentes...",
    category: "Sport",
    date: "26 Octobre 2025"
  },
  {
    id: 4,
    title: "Festival culturel à N'Djamena",
    excerpt: "Un événement majeur célèbre la richesse du patrimoine culturel tchadien...",
    category: "Culture",
    date: "25 Octobre 2025"
  },
  {
    id: 5,
    title: "Relations diplomatiques renforcées",
    excerpt: "Des accords bilatéraux importants signés avec plusieurs pays partenaires...",
    category: "International",
    date: "25 Octobre 2025"
  },
  {
    id: 6,
    title: "Débat sur la transition énergétique",
    excerpt: "Les experts discutent des solutions pour un avenir énergétique durable...",
    category: "Politique",
    date: "24 Octobre 2025"
  },
  {
    id: 7,
    title: "Innovation technologique locale",
    excerpt: "Des jeunes entrepreneurs lancent des startups prometteuses dans le secteur tech...",
    category: "Économie",
    date: "24 Octobre 2025"
  }
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="featured-article">
            <img src={featuredArticle.image} alt={featuredArticle.title} />
            <div className="featured-content">
              <span className="category-badge">{featuredArticle.category}</span>
              <h2>{featuredArticle.title}</h2>
              <p className="excerpt">{featuredArticle.excerpt}</p>
              <div className="article-meta">
                <span className="author">{featuredArticle.author}</span>
                <span className="date">{featuredArticle.date}</span>
              </div>
              <Link to={`/article/${featuredArticle.id}`} className="read-more">
                Lire l'article complet →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-news">
        <div className="container">
          <h2 className="section-title">Dernières Actualités</h2>
          <div className="news-grid">
            {newsArticles.map(article => (
              <article key={article.id} className="news-card">
                <span className="category-badge">{article.category}</span>
                <h3>{article.title}</h3>
                <p className="excerpt">{article.excerpt}</p>
                <div className="card-footer">
                  <span className="date">{article.date}</span>
                  <Link to={`/article/${article.id}`} className="read-link">
                    Lire plus →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Explorer par Rubrique</h2>
          <div className="categories-grid">
            <Link to="/politique" className="category-card">
              <h3>Politique</h3>
              <p>Actualités politiques et gouvernance</p>
            </Link>
            <Link to="/economie" className="category-card">
              <h3>Économie</h3>
              <p>Économie et développement</p>
            </Link>
            <Link to="/societe" className="category-card">
              <h3>Société</h3>
              <p>Vie sociale et éducation</p>
            </Link>
            <Link to="/culture" className="category-card">
              <h3>Culture</h3>
              <p>Arts, culture et patrimoine</p>
            </Link>
            <Link to="/sport" className="category-card">
              <h3>Sport</h3>
              <p>Sports nationaux et internationaux</p>
            </Link>
            <Link to="/international" className="category-card">
              <h3>International</h3>
              <p>Actualités internationales</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
