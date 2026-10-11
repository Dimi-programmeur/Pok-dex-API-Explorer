# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🔴 Pokédex API Explorer

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-API-5A29E4?logo=axios&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

Un **Pokédex moderne** développé en React qui consomme l'API publique [PokéAPI](https://pokeapi.co) pour afficher dynamiquement les Pokémon avec leurs statistiques (taille, poids, XP de base). Interface sombre élégante avec cartes interactives, animations au survol et design responsive.

---

## ✨ Aperçu

![Aperçu du Pokédex](./screenshots/apercu.png)

---

## 🚀 Fonctionnalités

- 🔄 **Récupération dynamique** des Pokémon via Axios
- 🎨 **Design sombre moderne** : fond bleu nuit, cartes arrondies et accents colorés
- 🖱️ **Effets au survol** : bordure dorée et animations fluides sur les cartes
- 📊 **Affichage des stats** : taille, poids et XP de base pour chaque Pokémon
- 🖼️ **Images officielles** des Pokémon via PokéAPI
- 📱 **Responsive** : grille flexible avec Flexbox et Tailwind
- ⚡ **Chargement optimisé** avec `useEffect` et `useState`
- 🌙 **Thème sombre** élégant au style "Pokédex"

---

## 🛠️ Technologies utilisées

| Technologie     | Rôle                          |
| --------------- | ----------------------------- |
| **React**       | Bibliothèque UI               |
| **Vite**        | Bundler ultra-rapide          |
| **Tailwind CSS**| Framework CSS utilitaire      |
| **Axios**       | Requêtes HTTP vers l'API      |
| **PokéAPI**     | Source de données des Pokémon |

---

## 📦 Installation

### Prérequis

- Node.js ≥ 18
- npm ou yarn

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/Dimi-programmeur/Pok-dex-API-Explorer.git
cd Pok-dex-API-Explorer

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

### Build de production

```bash
npm run build
npm run preview
```

---

## 🌐 API utilisée

**Endpoint principal :**

```
GET https://pokeapi.co/api/v2/pokemon?limit=20
```

**Puis pour chaque Pokémon :**

```
GET https://pokeapi.co/api/v2/pokemon/{id}
```

**Exemple de réponse (PokéAPI) :**

```json
{
  "id": 1,
  "name": "bulbasaur",
  "height": 7,
  "weight": 69,
  "base_experience": 64,
  "sprites": {
    "other": {
      "official-artwork": {
        "front_default": "https://..."
      }
    }
  }
}
```

📚 Documentation complète : [pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

---

## 📂 Structure du projet

```
Pokedex-API-Explorer/
├── public/
├── screenshots/
│   └── apercu.png
├── src/
│   ├── assets/
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles Tailwind
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🎨 Palette de couleurs

| Couleur          | Hex         | Utilisation                     |
| ---------------- | ----------- | ------------------------------- |
| 🔴 Rouge Pokédex | `#EF4444`   | Titre principal                 |
| 🔵 Bleu nuit     | `#1E293B`   | Fond de la page                 |
| ⚫ Bleu ardoise  | `#334155`   | Cartes des Pokémon              |
| 🟡 Or / Jaune    | `#FACC15`   | XP Base & bordure au survol     |
| ⚪ Blanc cassé   | `#F8FAFC`   | Texte principal                 |

---

## 🔮 Améliorations futures

- [ ] 🔍 Barre de recherche par nom
- [ ] 🎯 Filtres par type (Feu, Eau, Plante...)
- [ ] 📄 Pagination ou scroll infini
- [ ] 🌍 Page de détail par Pokémon (stats, évolutions, capacités)
- [ ] ⏳ Skeleton loader pendant le chargement
- [ ] ❌ Gestion des erreurs API
- [ ] 🌙/☀️ Toggle dark/light mode
- [ ] 🔊 Effet sonore "cri" du Pokémon au clic

---

## 🤝 Contribution

Les contributions sont les bienvenues !

```bash
# 1. Fork le projet
# 2. Créer une branche
git checkout -b feature/ma-fonctionnalite

# 3. Commit
git commit -m "feat: ajout de ma fonctionnalité"

# 4. Push
git push origin feature/ma-fonctionnalite

# 5. Ouvrir une Pull Request
```

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- [PokéAPI](https://pokeapi.co) pour les données
- [Nintendo & Game Freak](https://www.pokemon.com) pour cet univers légendaire 🔴
- La communauté React & Tailwind

---

<div align="center">

**⭐ Si ce projet t'a plu, n'hésite pas à lui donner une étoile ! ⭐**

Fait avec ❤️ et beaucoup de Poké Balls

</div>
