const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
  prompt("Adivina el nÃºmero secreto entre el 1 al 10")
);


console.log(`Este es tu numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto){
    console.log("Ganaste el juego");
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es mas alto, intenta nuevamente");
} else {
    console.log("El numero es mas bajo, intenta nuevamente")
}
