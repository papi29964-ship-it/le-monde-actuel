import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Article.css';
import { getArticleById, loadArticles, formatDate } from '../utils/articles';
import type { Article as ArticleType } from '../utils/articles';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;
      
      try {
        const fetchedArticle = await getArticleById(id);
        setArticle(fetchedArticle || null);
        
        // Get related articles from the same category
        if (fetchedArticle) {
          const allArticles = await loadArticles();
          const related = allArticles
            .filter(a => a.category === fetchedArticle.category && a.id !== fetchedArticle.id)
            .slice(0, 3);
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="article-page"><div className="container">Chargement...</div></div>;
  }

  if (!article) {
    return <div className="article-page"><div className="container">Article non trouvé</div></div>;
  }

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
              <span className="date">{formatDate(article.date)}</span>
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
            <div className="article-content">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            
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

        {relatedArticles.length > 0 && (
          <div className="related-articles">
            <div className="container">
              <h2>Articles connexes</h2>
              <div className="related-grid">
                {relatedArticles.map(related => (
                  <Link key={related.id} to={`/article/${related.id}`} className="related-card">
                    <h3>{related.title}</h3>
                    <p>{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default Article;
