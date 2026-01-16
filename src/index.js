let nomeHeroi = "Anderson Lima"
let xpHeroi = 8000;
let nivel;

if (xpHeroi < 1000 ) {
    nivel = "Ferro";
}

else if (xpHeroi <= 1001) {
    nivel = "Bronze";
} 

else if (xpHeroi <= 2001) {
    nivel = "Prata";
}

else if (xpHeroi <= 5001) {
    nivel = "Ouro";
}

else if (xpHeroi >= 7001) {
    nivel = "Platina";
}



//saída
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);