
const giocaBtn = document.getElementById("btn-play");

//Creazione numero random per Pc
let randomPc = Math.round(Math.random() * 100);
console.log("numero del pc:", randomPc );

//Creazione numero random per Utente
let randomPlayer = Math.round(Math.random() * 100);
console.log("numero del pc:", randomPlayer);

//Sommo i 2 numeri
const somma = randomPc + randomPlayer;
console.log("la somma dei 2 numeri è:", somma);

//Controllo se il numero è pari o dispari
function getPariDispari(num){

    /**
     * @param {number} num
     * @return {string}
     */

    if(isNaN(somma)){
        return;

    }else if(somma % 2 === 0){
        return "la sommma è un numero pari";

    }else{
        return "la sommma è un numero dispari";

    }
}


//Creo l'evento per verificare chi tra PC e Utente ha vinto

const myTextEl = document.getElementById("my-text");
const resultEljs = document.querySelector(".resultjs");















