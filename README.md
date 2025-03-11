# 🌐 TP3 - Interfaces A & B

## 📖 Description
Ce projet est une implémentation moderne et optimisée de deux interfaces web (**Interface A et Interface B**) utilisant **Webpack** pour la gestion des dépendances, l’optimisation des fichiers CSS et JS, et le développement rapide en local.

L’objectif est de garantir **une meilleure structure du code, un chargement plus rapide et une séparation claire des ressources**.

---

## 🚀 Installation et Configuration

### **1️⃣ Prérequis**
Avant de commencer, il est nécessaire d’avoir installé :
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- [npm](https://www.npmjs.com/) (installé avec Node.js)

### **2️⃣ Installation des dépendances**
Dans le répertoire du projet, exécuter la commande suivante pour installer toutes les dépendances requises :
```bash
npm install
```

Cela installera **Webpack, Babel, les loaders CSS et les plugins essentiels**.

---

## 🛠️ **Utilisation de Webpack**

### **3️⃣ Construire le projet (`npm run build`)**
Pour générer une version optimisée et prête pour la production, exécuter :
```bash
npm run build
```
✅ Cette commande génère les fichiers compilés dans `/dist/`, en produisant :
- `index.html` (Interface A) avec `interfaceA.bundle.js` et `interfaceA.css`
- `interfaceB.html` (Interface B) avec `interfaceB.bundle.js` et `interfaceB.css`

Ces fichiers sont **prêts à être déployés** sur un serveur ou un service d’hébergement statique.

---

### **4️⃣ Lancer le serveur de développement (`npm start`)**
En mode développement, Webpack Dev Server permet un **rechargement automatique et un accès local rapide** :
```bash
npm start
```
📌 Cette commande démarre un serveur accessible à l’adresse suivante :
```
http://localhost:8080/
```

---

## 🌍 **Accéder aux interfaces**
### 🔹 **Interface A (Page principale)**
Accéder à :
```bash
http://localhost:8080/
```
✅ Cette URL charge `index.html` avec `interfaceA.css` et `interfaceA.bundle.js`.

### 🔹 **Interface B (Page secondaire)**
Accéder à :
```bash
http://localhost:8080/interfaceB.html
```
✅ Cette URL charge `interfaceB.html` avec `interfaceB.css` et `interfaceB.bundle.js`.

---

## 📂 **Structure du projet**
```
/src
  /assets
    interfaceA.css
    interfaceB.css
  /js
    interfaceA.js
    interfaceB.js
  interfaceA.html
  interfaceB.html
/dist              (Fichiers générés après `npm run build`)
.gitignore
package-lock.json
package.json
webpack.config.js
README.md
```
📌 **Chaque page HTML charge uniquement son propre CSS et JS pour une meilleure optimisation.**

---

## 🛠 **Technologies utilisées**
- **Webpack** (Optimisation et gestion des fichiers)
- **Babel** (Transpilation ES6 en JavaScript compatible)
- **MiniCssExtractPlugin** (Séparation des fichiers CSS pour un chargement plus efficace)
- **Webpack Dev Server** (Développement rapide avec Hot Reload)

---

## ⚠️ **Dépannage et FAQ**
**1️⃣ Les styles ne s'appliquent pas ?**
- Vérifier que **`npm run build`** a bien été exécuté.
- S’assurer que les fichiers CSS sont bien référencés dans les pages HTML générées.
- Vider le cache du navigateur avec **`Ctrl + Shift + R`**.

**2️⃣ Webpack ne démarre pas ?**
- Vérifier que **Node.js** et **npm** sont bien installés.
- Réinstaller les dépendances avec :
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

**3️⃣ Modifier l’interface par défaut ?**
- Dans `webpack.config.js`, modifier l’ordre des **HtmlWebpackPlugin** pour ouvrir **`interfaceB.html`** par défaut.

---

## 📢 **Auteur & Contact**
📧 Contact : 
- [maim3689@usherbrooke.ca](mailto:maim3689@usherbrooke.ca) | (https://github.com/MateoESEO & https://github.com/Magalios09)
- [temt8767@usherbrooke.ca](mailto:temt@usherbrooke.ca) | (https://github.com/terrytmps)

📌 Projet **absolument pas** sous licence MIT.