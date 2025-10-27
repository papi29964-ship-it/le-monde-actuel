# 🔒 Configuration de la sécurité - Netlify CMS

## Configuration actuelle

✅ Interface d'administration prête : `/admin/`
✅ Configuration CMS complète : `public/admin/config.yml`
✅ Scripts d'authentification ajoutés

## 📋 Étapes pour activer la sécurité

### 1. Déployer le site sur Netlify

```bash
# Première fois - Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Ou déployer directement
netlify deploy --prod
```

### 2. Activer Netlify Identity

1. Allez sur votre dashboard Netlify : https://app.netlify.com
2. Sélectionnez votre site
3. Allez dans **Settings** → **Identity**
4. Cliquez sur **Enable Identity**

### 3. Configurer Git Gateway

1. Dans **Settings** → **Identity** → **Services**
2. Cliquez sur **Enable Git Gateway**
3. Cela permet au CMS d'écrire directement dans votre repo GitHub

### 4. Configurer les inscriptions (Registration)

Dans **Settings** → **Identity** → **Registration preferences** :

**Option A : Invitations uniquement (Recommandé)**
- Sélectionnez **Invite only**
- Seuls les membres invités pourront publier

**Option B : Ouverte avec approbation**
- Sélectionnez **Open**
- Puis activez **Require manual approval**

### 5. Inviter les membres de votre équipe

1. Dans **Identity** tab
2. Cliquez sur **Invite users**
3. Entrez les emails de vos rédacteurs
4. Chaque membre recevra un email d'invitation

### 6. Définir les rôles (Optionnel)

Dans **Identity** → **Settings** → **Roles** :
- `admin` : Peut tout faire
- `editor` : Peut publier et modifier
- `contributor` : Peut créer des brouillons

Puis dans `public/admin/config.yml`, ajoutez :
```yaml
# Exemple de contrôle d'accès par rôle
publish_mode: editorial_workflow  # Active le workflow brouillon → révision → publié
```

## 🚀 Utilisation

### Pour les administrateurs

1. Allez sur `https://votre-site.netlify.app/admin/`
2. Cliquez sur **Log in with Netlify Identity**
3. Utilisez vos identifiants invités
4. Créez/éditez des articles via l'interface

### Workflow de publication

1. **Créer un article** : Cliquez sur "New Articles"
2. **Remplir le formulaire** : Titre, catégorie, contenu, etc.
3. **Sauvegarder** : L'article est committé sur Git
4. **Publication automatique** : Le site se rebuild automatiquement

## 🔐 Sécurité renforcée

### Activer 2FA (Authentification à deux facteurs)

1. Dans Identity settings
2. Activez **External providers** (Google, GitHub, etc.)
3. Ou activez **MFA** pour un second facteur

### Restrictions d'accès

Dans `public/admin/config.yml`, vous pouvez limiter les actions :

```yaml
# Empêcher la suppression
collections:
  - name: "articles"
    delete: false  # Les utilisateurs ne peuvent pas supprimer
```

## 📞 Support

- **Netlify Identity Docs** : https://docs.netlify.com/visitor-access/identity/
- **Netlify CMS Docs** : https://www.netlifycms.org/docs/
- **Contact** : +235 69864054

## ⚠️ Important

- **N'oubliez pas de déployer** après ces modifications : `netlify deploy --prod`
- **Testez l'accès admin** avant d'inviter l'équipe
- **Sauvegardez les credentials** des comptes administrateurs
