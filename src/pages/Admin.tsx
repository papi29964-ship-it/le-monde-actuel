import { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    excerpt: '',
    category: 'Politique',
    author: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min de lecture',
    image: '',
    featured: false,
    content: ''
  });

  const categories = ['Politique', 'Économie', 'Société', 'Culture', 'Sport', 'International'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Générer le contenu du fichier Markdown
    const markdown = `---
id: ${formData.id}
title: "${formData.title}"
excerpt: "${formData.excerpt}"
category: "${formData.category}"
author: "${formData.author}"
date: "${formData.date}"
readTime: "${formData.readTime}"
image: "${formData.image}"
featured: ${formData.featured}
---

${formData.content}`;

    // Créer le nom du fichier
    const slug = formData.title
      .toLowerCase()
      .replace(/[éèê]/g, 'e')
      .replace(/[àâ]/g, 'a')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const fileName = `${slug}.md`;

    // Afficher le résultat
    alert(`Article prêt !\n\nNom du fichier: ${fileName}\n\nCopiez le contenu ci-dessous et créez ce fichier dans: content/articles/${fileName}`);
    
    // Copier dans le presse-papier si possible
    if (navigator.clipboard) {
      navigator.clipboard.writeText(markdown);
      alert('✅ Contenu copié dans le presse-papier !');
    }

    // Afficher dans la console pour copier facilement
    console.log('=== CONTENU À COPIER ===');
    console.log(markdown);
    console.log('========================');
    console.log(`Nom du fichier: ${fileName}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="admin-page">
      <div className="container">
        <h1>📝 Créer un nouvel article</h1>
        <p className="admin-info">
          Remplissez le formulaire ci-dessous. Le contenu sera généré pour que vous puissiez le copier 
          dans un nouveau fichier dans <code>content/articles/</code>
        </p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="id">ID de l'article *</label>
            <input
              type="number"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder="4"
            />
            <small>Numéro unique (dernier utilisé: 3)</small>
          </div>

          <div className="form-group">
            <label htmlFor="title">Titre *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Titre de votre article"
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Résumé *</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Un résumé court et accrocheur de l'article..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Catégorie *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="author">Auteur *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                placeholder="Nom de l'auteur"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date de publication *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="readTime">Temps de lecture</label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="5 min de lecture"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">URL de l'image *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              <span>Article à la une</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="content">Contenu de l'article *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={15}
              placeholder="Rédigez votre article en Markdown...

## Titre de section

Votre paragraphe ici...

### Sous-titre

- Point 1
- Point 2

**Texte en gras** et *texte en italique*"
            />
          </div>

          <button type="submit" className="submit-btn">
            🚀 Générer l'article
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
