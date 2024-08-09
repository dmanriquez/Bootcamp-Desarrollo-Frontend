//////////// EJERCICIO 1 ////////////

let imc: number = 15;

if (imc <= 18.5) {
  console.log("Bajo peso");
} else if (imc >= 18.6 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30) {
  console.log("Obesidad");
}

//////////// EJERCICIO 2 ////////////

let esBisiesto: number = 2008;
esBisiesto % 4 === 0 && (esBisiesto % 100 !== 0 || esBisiesto % 400 === 0);

//////////// EJERCICIO 3 ////////////
let piedra: string = "piedra";
let papel: string = "papel";
let tijera: string = "tijera";

let jugadaUsuario: string = "x";

if (jugadaUsuario == piedra) {
  console.log("Gana papel");
} else if (jugadaUsuario == papel) {
  console.log("Gana tijera");
} else if (jugadaUsuario == tijera) {
  console.log("Gana piedra");
} else {
  console.log("Jugada inválida");
}

//////////// EJERCICIO 4 ////////////
let sideA: number = 9;
let sideB: number = 3;
let sideC: number = 5;

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  if (sideA == sideB && sideB == sideC) {
    console.log("Equilátero");
  } else if (sideA == sideB || sideB == sideC || sideC == sideA) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log("No es un triángulo");
}
