import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Category.css';
import { getArticlesByCategory, formatDate } from '../utils/articles';
import type { Article } from '../utils/articles';

const categoryData: { [key: string]: { title: string; description: string } } = {
  politique: {
    title: 'Politique',
    description: 'Actualités politiques, gouvernance et institutions'
  },
  economie: {
    title: 'Économie',
    description: 'Économie, finance et développement'
  },
  societe: {
    title: 'Société',
    description: 'Vie sociale, éducation et santé'
  },
  culture: {
    title: 'Culture',
    description: 'Arts, culture et patrimoine'
  },
  sport: {
    title: 'Sport',
    description: 'Sports nationaux et internationaux'
  },
  international: {
    title: 'International',
    description: 'Actualités internationales et relations diplomatiques'
  }
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  
  const categoryInfo = category ? categoryData[category] : null;

  useEffect(() => {
    async function fetchCategoryArticles() {
      if (!category) return;
      
      try {
        const categoryArticles = await getArticlesByCategory(category);
        setArticles(categoryArticles);
      } catch (error) {
        console.error('Error loading category articles:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchCategoryArticles();
  }, [category]);

  if (!categoryInfo) {
    return (
      <div className="category-page">
        <div className="container">
          <h2>Catégorie non trouvée</h2>
          <Link to="/">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="category-page">
        <div className="container">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1>{categoryInfo.title}</h1>
          <p className="category-description">{categoryInfo.description}</p>
        </div>
      </div>

      <div className="container">
        {articles.length === 0 ? (
          <p className="no-articles">Aucun article dans cette catégorie pour le moment.</p>
        ) : (
          <div className="articles-list">
            {articles.map(article => (
              <article key={article.id} className="article-item">
                <div className="article-content">
                  <h2>
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h2>
                  <p className="excerpt">{article.excerpt}</p>
                  <div className="article-meta">
                    <span className="author">Par {article.author}</span>
                    <span className="date">{formatDate(article.date)}</span>
                  </div>
                </div>
                <Link to={`/article/${article.id}`} className="read-more-btn">
                  Lire l'article →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
