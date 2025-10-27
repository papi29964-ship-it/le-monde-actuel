# Guide de rédaction d'articles

## Comment créer un nouvel article

1. Créez un nouveau fichier `.md` dans le dossier `content/articles/`
2. Nommez le fichier avec un slug descriptif (ex: `mon-nouvel-article.md`)
3. Ajoutez les métadonnées en haut du fichier (frontmatter)
4. Rédigez votre contenu en Markdown

## Format du fichier

Chaque article doit commencer par un bloc de métadonnées entre `---` :

```markdown
---
id: 4
title: "Titre de votre article"
excerpt: "Un résumé court et accrocheur de l'article..."
category: "Économie"
author: "Nom de l'auteur"
date: "2025-10-27"
readTime: "5 min de lecture"
image: "URL de l'image principale"
featured: false
---

Votre contenu commence ici...
```

## Champs obligatoires

- **id**: Numéro unique pour l'article (incrémentez le dernier numéro utilisé)
- **title**: Le titre principal de l'article
- **excerpt**: Résumé court (2-3 phrases max)
- **category**: Une des catégories : Politique, Économie, Société, Culture, Sport, International
- **author**: Nom de l'auteur
- **date**: Format YYYY-MM-DD (ex: 2025-10-27)
- **image**: URL de l'image principale
- **featured**: true pour l'article à la une, false sinon (un seul article peut être featured)

## Champs optionnels

- **readTime**: Temps de lecture estimé (ex: "5 min de lecture")

## Syntaxe Markdown

### Titres
```markdown
## Titre de section
### Sous-titre
```

### Paragraphes
Écrivez simplement votre texte. Laissez une ligne vide entre les paragraphes.

### Mise en forme
- **Gras**: `**texte en gras**`
- *Italique*: `*texte en italique*`

### Listes
```markdown
- Premier élément
- Deuxième élément
- Troisième élément
```

### Citations
```markdown
> Ceci est une citation
```

### Liens
```markdown
[Texte du lien](https://example.com)
```

## Exemples

Consultez les fichiers existants dans `content/articles/` pour voir des exemples concrets.

## Après avoir créé un article

1. Sauvegardez le fichier `.md`
2. Testez localement avec `npm run dev`
3. Committez les changements avec Git
4. Déployez avec `netlify deploy --prod`

## Bonnes pratiques

- Utilisez des titres descriptifs et accrocheurs
- Rédigez un excerpt qui donne envie de lire
- Choisissez des images de qualité et pertinentes
- Un seul article "featured" à la fois
- Vérifiez l'orthographe avant de publier
- Structurez votre contenu avec des sous-titres
