**Objectif**

Créer un jeu Motus où l'utilisateur doit deviner un mot de 5 lettres en 6 tentatives maximum.

**Fonctionnalités obligatoires**

**1. Interface utilisateur**

- Zone d'affichage du mot avec 5 cases
- Champ de saisie pour entrer une tentative
- Bouton "Valider" pour soumettre la tentative
- Affichage du nombre de tentatives restantes
- Bouton "Nouvelle partie" pour recommencer

**2. Logique de jeu**

- **Dictionnaire** : Tableau de minimum 20 mots de 5 lettres
- **Sélection aléatoire** : Choisir un mot au hasard avec ⁠Math.random()

**Validation des entrées** :

- **Validation des entrées** :
- Vérifier que l'entrée fait exactement 5 lettres
- Convertir en majuscules pour la comparaison
- Afficher un message d'erreur si non valide

**3. Système de couleurs**

- **Vert** : Lettre correcte à la bonne position
- **Orange** : Lettre correcte mais mal placée
- **Gris** : Lettre absente du mot

**4. Conditions de fin**

- **Victoire** : Mot trouvé → afficher message de félicitation
- **Défaite** : 6 tentatives écoulées → révéler le mot

---

**Structure obligatoire du projet**

```
mon-projet/
├── index.html
├── style.css
├── script.js
└── README.md
```

**Design de l’application**

- Carte blanche tant que cela correspond aux attentes
- Un bon design sera toujours valorisé sur la note finale

**Exigences techniques JavaScript**

- **Variables** : Utiliser exclusivement ⁠let et ⁠const (pas de ⁠var)
- **Fonctions** : Minimum 3 fonctions fléchées ⁠const maFonction = () => {}
- **DOM** : Utiliser ⁠querySelector ou ⁠getElementById pour sélectionner les éléments
- **Événements** : Minimum 2 types d'événements différents (⁠click, ⁠submit, ⁠keyup, etc.)
- **Tableaux** : Utiliser au moins une méthode de tableau (⁠push, ⁠filter, ⁠forEach, etc.)

**Exigences Git**

- **Commits** : Minimum 5 commits avec messages explicites
- **Repository** : Créer un repository GitHub public
- **README** : Fichier avec instructions d'utilisation

**Critères de qualité**

- Code indenté et commenté
- Console sans erreurs à l'ouverture
- Variables et fonctions nommées clairement
- Gestion des erreurs utilisateurs