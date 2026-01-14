/* initialisation des mots*/
const dictionnaire = ["login","cache","input","debug","stack","array","param","token","logic"];
/*choix du mot aleatoire*/
const motAleatoire = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];

const recupererMot = () => {
  const input = document.getElementById('monInput');
  return input.value;
};

/* fonction qui renvoie un tableau avec chaque lettre du mot */
const decomposerMot = (mot) => {
  return mot.toUpperCase().split('');
};

const verifierEssai = (essaie, lettres, nouvelleLigne) => {
    let toutCorrect = false;

    essaie.forEach((lettre, i) => {
        const cellule = document.createElement('td');
        cellule.textContent = lettre;

        if (lettre === lettres[i]) {
            cellule.classList.add('correct');
            console.log(lettre + " - Bonne position");
            toutCorrect = true;
        } else if (lettres.includes(lettre)) {
            cellule.classList.add('present');
            console.log(lettre + " - Mauvaise position mais dans le mot");
            toutCorrect = false;
        } else {
            cellule.classList.add('absent');
            console.log(lettre + " - Pas dans le mot");
            toutCorrect = false;
        }

        nouvelleLigne.appendChild(cellule);
    });
    if (toutCorrect == true) {
        messageDiv.textContent = "🎉 Bravo ! Vous avez trouvé le mot !";
        bouton.disabled = true;
        input.disabled = true;

    } else {
        messageDiv.textContent = "Essayez encore !";
        messageDiv.style.color = "#666";
    }
    
};

let nbEssaie = 0;
let tentativeDiv = document.getElementById('tentative')
const bouton = document.getElementById('bouton');
const corpsTableau = document.getElementById('corpsTableau');
const messageDiv = document.getElementById('message');
const lettres = decomposerMot(motAleatoire);
const input = document.getElementById('monInput');

/* fonction qui récupère le mot contenu dans l'input */




bouton.addEventListener('click', () => {
    
    const motSaisi = recupererMot();
    console.log(motSaisi);
    if (nbEssaie >= 6) {
        messageDiv.textContent = "vous avez utilisez tout vos essaie ! le mot etait : " + motAleatoire;
        bouton.disabled = true;
        input.disabled = true;
        return;
    }
    if (motSaisi.length !== 5) {
        messageDiv.textContent = "⚠️ Le mot doit contenir 5 lettres !";
        messageDiv.style.color = "#c9b458";
        return;
    }
    nbEssaie = nbEssaie + 1 ;
    tentativeDiv.textContent = "tentative numéro" + nbEssaie + "sur 6";
    console.log(nbEssaie)

    const essaie = decomposerMot(motSaisi);

    console.log("Mot à trouver:", lettres);
    console.log("Essai:", essaie);

    const nouvelleLigne = document.createElement('tr');
    
    let toutCorrect = true;
    verifierEssai(essaie, lettres, nouvelleLigne)

    corpsTableau.appendChild(nouvelleLigne);

    // Vider l'input après chaque essaie
    input.value = '';

})


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        bouton.click();
    }
});
