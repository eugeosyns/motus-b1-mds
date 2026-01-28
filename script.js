// initialisation des mots
const dictionnaire = ["login", "cache", "input", "debug", "stack", "array", "param", "token", "logic"];
//choix du mot aleatoire
const motAleatoire = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];

// fonction qui renvoie un tableau avec chaque lettre du mot 
const decomposerMot = (mot) => {
    return mot.toUpperCase().split('');
};

let nbEssaie = 0;
const bouton = document.getElementById('bouton');
const corpsTableau = document.getElementById('corpsTableau');
const messageDiv = document.getElementById('message');
const lettres = decomposerMot(motAleatoire);
const tentativeDiv = document.getElementById('tentative');
let tableau = [];
const lignes = document.querySelectorAll("#corpsTableau tr");

function estUneLettre(caractere) {
    return /^[a-zA-Z]$/.test(caractere);
}

document.addEventListener("keydown", (event) => {
    const nomTouche = event.key;
    // Supprimer la dernière lettre
    if (nomTouche === "Backspace" || nomTouche === "Delete") {
        tableau.pop();
    }

    if (tableau.length < 5) {
        if (estUneLettre(nomTouche) == true) {
            tableau.push(nomTouche.toUpperCase());
        }
    }

    // Récupérer les tds de la ligne ACTUELLE
    let tds = lignes[nbEssaie].querySelectorAll("td");

    for (let i = 0; i < 5; i++) {
        if (tableau[i] !== undefined) {
            tds[i].textContent = tableau[i];
        } else {
            tds[i].textContent = "";
        }
    }
});

const verifie = (tableau, lettres) => {
    let somme = 0;
    // Récupérer les tds de la ligne ACTUELLE
    let tds = lignes[nbEssaie - 1].querySelectorAll("td");

    tableau.forEach((lettre, i) => {
        console.log(lettre, lettres[i]);

        if (lettre === lettres[i]) {
            tds[i].classList.add("correct");
            somme++;
        } else {
            if (lettres.includes(lettre)) {
                tds[i].classList.add("present");
            } else {
                tds[i].classList.add("absent");
            }
        }
    });

    if (somme === tableau.length) {
        messageDiv.textContent = "vous avez gagné, le mot était : " + motAleatoire;
        bouton.disabled = true;
    } else if (nbEssaie >= 6) {
        messageDiv.textContent = "vous avez utilisé tous vos essais ! le mot était : " + motAleatoire;
        bouton.disabled = true;
    } else {
        messageDiv.textContent = "essayez encore !";
    }
};

//lance le script
bouton.addEventListener('click', () => {
    if (nbEssaie >= 6) {
        messageDiv.textContent = "vous avez utilisé tous vos essais ! le mot était : " + motAleatoire;
        bouton.disabled = true;
        return;
    }

    if (tableau.length !== 5) {
        messageDiv.textContent = "⚠️ Le mot doit contenir 5 lettres !";
        messageDiv.style.color = "#c9b458";
        return;
    }

    //incrémente le nombre d'essaie et l'affiche
    nbEssaie = nbEssaie + 1;
    tentativeDiv.textContent = "tentative numéro " + nbEssaie + " sur 6";
    console.log(tableau);
    console.log("Mot à trouver:", lettres);

    verifie(tableau, lettres);
    tableau = [];
});







document.addEventListener("keydown", (event) => {
    const touche = event.key;
    // Validation avec Entrée
    if (touche === "Enter") {
        bouton.click();
    }
});