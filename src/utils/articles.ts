import matter from 'gray-matter';

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
  featured?: boolean;
  content: string;
  slug: string;
}

// Import all markdown files from content/articles
const articleFiles = import.meta.glob('/content/articles/*.md', { 
  query: '?raw',
  import: 'default'
});

let articlesCache: Article[] | null = null;

export async function loadArticles(): Promise<Article[]> {
  if (articlesCache) {
    return articlesCache;
  }

  const articles: Article[] = [];

  for (const path in articleFiles) {
    const loader = articleFiles[path] as () => Promise<string>;
    const fileContent = await loader();
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    
    articles.push({
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      author: data.author,
      date: data.date,
      readTime: data.readTime,
      image: data.image,
      featured: data.featured || false,
      content,
      slug
    });
  }

  // Sort by date (most recent first)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  articlesCache = articles;
  return articles;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  const articles = await loadArticles();
  return articles.find(article => article.id === parseInt(id));
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const articles = await loadArticles();
  return articles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

export async function getFeaturedArticle(): Promise<Article | undefined> {
  const articles = await loadArticles();
  return articles.find(article => article.featured);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('fr-FR', options);
}
