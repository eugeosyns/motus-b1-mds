/* initialisation des mots*/
const dictionnaire = ["login","cache","input","debug","stack","array","param","token","logic"];
/*choix du mot aleatoire*/
const motAleatoire = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];

/*fonction qui renvoie un tableau avec chaque lettre du mot*/
function decomposerMot(mot) {
  return mot.split('');
}

const lettres = decomposerMot(motAleatoire);
let nbEssaie = 0;

function recupererMot() {
  const input = document.getElementById('monInput');
  const mot = input.value;
  return mot;
}


const bouton = document.getElementById('bouton');
const corpsTableau = document.getElementById('corpsTableau');
const messageDiv = document.getElementById('message');
tentativeDiv = document.getElementById('tentative')
const input = document.getElementById('monInput');


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
    essaie.forEach((lettre, i) => {

        const cellule = document.createElement('td');
        cellule.textContent = lettre;


        if (lettre === lettres[i]) {
            cellule.classList.add('correct');
            console.log(lettre + " - Bonne position");
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

    corpsTableau.appendChild(nouvelleLigne);

    if (toutCorrect) {
        messageDiv.textContent = "🎉 Bravo ! Vous avez trouvé le mot !";
        bouton.disabled = true;
        input.disabled = true;

    } else {
        messageDiv.textContent = "Essayez encore !";
        messageDiv.style.color = "#666";
    }
    
    // Vider l'input
    input.value = '';

})


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        bouton.click();
    }
});
