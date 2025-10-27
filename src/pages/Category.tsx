import { useParams, Link } from 'react-router-dom';
import './Category.css';

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

const mockArticles = [
  {
    id: 101,
    title: 'Analyse approfondie de la situation actuelle',
    excerpt: 'Un regard détaillé sur les développements récents et leurs implications pour l\'avenir...',
    date: '27 Octobre 2025',
    author: 'Jean Dupont'
  },
  {
    id: 102,
    title: 'Les enjeux majeurs du moment',
    excerpt: 'Une exploration des défis et opportunités qui se présentent dans ce domaine...',
    date: '26 Octobre 2025',
    author: 'Marie Martin'
  },
  {
    id: 103,
    title: 'Perspectives d\'avenir et solutions',
    excerpt: 'Des experts partagent leur vision sur les solutions possibles et les perspectives...',
    date: '25 Octobre 2025',
    author: 'Paul Bernard'
  },
  {
    id: 104,
    title: 'Impact sur la communauté locale',
    excerpt: 'Comment ces développements affectent-ils directement la vie quotidienne des citoyens...',
    date: '24 Octobre 2025',
    author: 'Sophie Leclerc'
  },
  {
    id: 105,
    title: 'Débat et opinions contradictoires',
    excerpt: 'Différents points de vue s\'affrontent sur cette question d\'actualité brûlante...',
    date: '23 Octobre 2025',
    author: 'Ahmed Hassan'
  }
];

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const categoryInfo = category ? categoryData[category] : null;

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

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <h1>{categoryInfo.title}</h1>
          <p className="category-description">{categoryInfo.description}</p>
        </div>
      </div>

      <div className="container">
        <div className="articles-list">
          {mockArticles.map(article => (
            <article key={article.id} className="article-item">
              <div className="article-content">
                <h2>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span className="author">Par {article.author}</span>
                  <span className="date">{article.date}</span>
                </div>
              </div>
              <Link to={`/article/${article.id}`} className="read-more-btn">
                Lire l'article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
