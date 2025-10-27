# 🧪 Tester l'interface d'administration en local

## Ce que vous allez voir

Une interface d'administration complète pour créer des articles **SANS AVOIR BESOIN DE CONNEXION** (juste pour tester).

## 📝 Étapes pour tester

### 1. Démarrer le serveur local

```powershell
npm run dev
```

Attendez que le message apparaisse : `Local: http://localhost:5173`

### 2. Ouvrir l'interface d'administration

Ouvrez votre navigateur et allez sur :

```
http://localhost:5173/admin/
```

### 3. Que va-t-il se passer ?

Vous allez voir une **interface visuelle** avec :

- ✅ **Liste de vos 3 articles existants**
- ✅ **Bouton "New Articles"** pour créer un nouvel article
- ✅ **Formulaire avec tous les champs** :
  - ID
  - Titre
  - Résumé
  - Catégorie (menu déroulant)
  - Auteur
  - Date
  - Image
  - Article à la une (oui/non)
  - Contenu (éditeur de texte riche)

### 4. Créer un article de test

1. Cliquez sur **"New Articles"**
2. Remplissez le formulaire :
   - **ID** : 4
   - **Titre** : "Mon premier article de test"
   - **Résumé** : "Ceci est un test de l'interface"
   - **Catégorie** : Choisissez "Politique"
   - **Auteur** : Votre nom
   - **Date** : Aujourd'hui
   - **Temps de lecture** : "3 min de lecture"
   - **Image** : https://via.placeholder.com/1200x600/c41e3a/ffffff?text=Test
   - **Contenu** : Écrivez quelques paragraphes

3. Cliquez sur **"Save"** (en haut à droite)

### 5. Vérifier que ça marche

Le fichier sera créé dans : `content/articles/mon-premier-article-de-test.md`

Allez sur votre site : http://localhost:5173

➡️ Votre nouvel article devrait apparaître !

## 🎯 Ce que ça montre

### En mode TEST (maintenant)
- ❌ Pas de connexion nécessaire
- ✅ Modifications sauvegardées directement dans vos fichiers
- ✅ Vous voyez exactement comment l'interface fonctionne

### En mode PRODUCTION (après déploiement)
- ✅ Connexion obligatoire (email + mot de passe)
- ✅ Seuls les membres invités peuvent accéder
- ✅ Toutes les modifications sont trackées sur Git

## 🔄 Passer en mode production plus tard

Quand vous serez prêt à mettre en ligne avec sécurité :

1. Dans `public/admin/config.yml`, remplacez :
   ```yaml
   backend:
     name: test-repo
   ```
   
   Par :
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

2. Suivez les étapes dans `SECURITE.md`

## ❓ Questions ?

**Q: Les modifications en mode test sont-elles permanentes ?**
R: Oui ! Elles créent de vrais fichiers `.md` dans votre dossier `content/articles/`

**Q: Dois-je être connecté à Internet ?**
R: Non, tout fonctionne en local sur votre machine

**Q: Puis-je tester la suppression d'articles ?**
R: Oui, mais attention : en mode test, la suppression est réelle !

## 🚀 C'est parti !

Lancez `npm run dev` et allez sur http://localhost:5173/admin/
