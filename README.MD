# 💋 Téléphone Rose IA — Projet Pédagogique RGPD-Compliant

## 📚 Objectifs pédagogiques

1. ✅ Respecter les bonnes pratiques RGPD (cookies, gestion de session, suppression des données)
2. ✅ Créer une UI RGPD-Compliant d’une bannière cookie (ConsentBanner visible sur toutes les pages)
3. ✅ Créer une logique de backend de gestion de session (JWT + Cookie sécurisé, gestion de logout)
4. ✅ Créer une logique de frontend de gestion de token (stockage local sécurisé, contrôle d’accès aux routes protégées)
5. ✅ Cartographier les traitements opérés sur les données du SI (voir ci-dessous)

---



## 🛠️ Technologies utilisées

* **Backend** : Node.js + Express + Sequelize (MySQL/MariaDB)
* **Frontend** : React + Vite + TailwindCSS
* **IA** : Ollama (modèle `llama3`) lancé localement (voir plus bas)

---

## 🔐 RGPD et Sécurité

* Bannière cookie visible sur toutes les pages ✅
* Consentement explicite demandé ✅
* Token JWT signé (expire en 2h) ✅
* Cookie httpOnly utilisé pour renforcer la sécurité ✅
* Suppression des données de conversation à la déconnexion ✅

---

## 🗺️ Cartographie des traitements opérés sur les données

| Données traitées        | Classification     | Rôle associé     | Source                   | Base légale                              | Conservation / Destruction                    |
| ----------------------- | ------------------ | ---------------- | ------------------------ | ---------------------------------------- | --------------------------------------------- |
| Pseudo (username)       | Donnée personnelle | Utilisateur      | Formulaire d’inscription | Consentement explicite                   | Supprimable à la demande utilisateur          |
| Mot de passe (hashé)    | Donnée sensible    | Utilisateur      | Formulaire d’inscription | Consentement explicite                   | Non récupérable (hashé), suppression possible |
| Historique conversation | Donnée temporaire  | Utilisateur / IA | API IA (Ollama)          | Consentement implicite (service de chat) | Supprimé à la déconnexion                     |
| Token JWT               | Donnée de session  | Utilisateur      | Généré par le backend    | Nécessaire pour la fourniture du service | Expire après 2h ou à la déconnexion           |

---

## 🚀 Installation et Lancement

### 1️⃣ Installer Ollama et le modèle IA

1. Télécharger et installer [Ollama](https://ollama.com/) (supporte Windows, Linux, Mac)
2. Télécharger le modèle :

```bash
ollama pull llama3
```

3. Lancer le serveur Ollama :

```bash
ollama serve
```

Le serveur sera accessible sur : `http://localhost:11434`

### 2️⃣ Backend

```bash
cd telephone-rose-backend
npm install
cp .env.example .env  # renseigner les variables (DB, JWT_SECRET)
npm start
```

### 3️⃣ Frontend

```bash
cd telephone-rose-frontend
npm install
npm run dev
```

Accéder au site sur : `http://localhost:5173`

---

## 💾 Fonctionnalités principales

✅ Inscription et connexion (token JWT + cookie sécurisé)

✅ Chat avec IA sexy (conversation sauvegardée temporairement)

✅ Suppression de l’historique à la déconnexion

✅ Bannière de consentement RGPD

✅ Route privée protégée par le token JWT

---

## 🎬 Démo rapide

```text
1. Page de connexion
2. Bannière RGPD en bas
3. Une fois connecté → accès au Chat IA Téléphone Rose 💋
4. Déconnexion → suppression des conversations sauvegardées
```

---

## 🏁 Conclusion

Ce projet couvre l’ensemble des objectifs pédagogiques demandés :

✅ RGPD, UI conforme, gestion de token/session, nettoyage des données.

Le projet est totalement autonome, exécutable en local avec un simple serveur Ollama (pas besoin de Python !).

---

💋 *Projet réalisé par Joker* — 2025
