import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Home.css';
import { loadArticles, getFeaturedArticle, formatDate } from '../utils/articles';
import type { Article } from '../utils/articles';

const Home = () => {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const allArticles = await loadArticles();
        const featured = await getFeaturedArticle();
        
        setFeaturedArticle(featured || allArticles[0] || null);
        setNewsArticles(allArticles.filter(a => !a.featured).slice(0, 6));
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);

  if (loading) {
    return <div className="home"><div className="container">Chargement...</div></div>;
  }
  return (
    <div className="home">
      {featuredArticle && (
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
                  <span className="date">{formatDate(featuredArticle.date)}</span>
                </div>
                <Link to={`/article/${featuredArticle.id}`} className="read-more">
                  Lire l'article complet →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  <span className="date">{formatDate(article.date)}</span>
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
