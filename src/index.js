let nomeHeroi = "Anderson Lima"
let xpHeroi = 0;
let nivel;

for (let i = 0; i < 10; i++) {

    xpHeroi += 1500; // A cada rodada, ganha +1500 de XP

    if (xpHeroi < 1000) {
        nivel = "Ferro";
    }

    else if (xpHeroi <= 2000) {
        nivel = "Bronze";
    }

    else if (xpHeroi <= 5000) {
        nivel = "Prata";
    }

    else if (xpHeroi <= 7000) {
        nivel = "Ouro";
    }

    else if (xpHeroi <= 8000) {
        nivel = "Platina";
    }

    else if (xpHeroi <= 9000) {
        nivel = "Ascendente";
    }

    else if (xpHeroi <= 10000) {
        nivel = "Imortal";
    }

    else if (xpHeroi >= 10001) {
        nivel = "Radiante";
    }


    //saída
    console.log("O Herói de nome " + nomeHeroi + " (XP: " + xpHeroi + ") está no nível de " + nivel);
}