// Si un número determinado es par.
let numeroPar: number = 3
if (numeroPar % 2 == 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}

// Si una persona es mayor de edad.
let personaEdad: number = 15;
if (personaEdad >= 18){
  console.log('Es mayor de edad')
} else {
  console.log("Es menor de edad")
}

// Si un número es divisible por otro.
// PISTA: Recuerda que un número es divisible por otro si el resto (%) de su división es cero.
let numeroDivisible: number = 11;
if (numeroDivisible % 2 == 0) {
  console.log("El numero es divisible por 2");
} else {
  console.log("El numero no es divisible por 2");
}

// Comprobar si una letra es una vocal.
// PISTA: El operador de comparación (==) también sirve para strings.

// Verificar si un número está en un rango determinado. Por ejemplo, entre 10 y 20.
let elNumero = 15;
let rangoMinimo = 10;
let rangoMaximo = 20;

if (elNumero >= rangoMinimo && elNumero <= rangoMaximo) {
  console.log(`El número ${elNumero} está dentro del rango.`);
} else {
  console.log(`El número ${elNumero} está fuera del rango.`);
}

// Determinar cuál es el menor de 4 números

/////////// EJERCICIO 2 ////////////

let numeroLoteria = 15;

if(numeroLoteria % 2 == 0) {
  console.log("Gana $500");
} else if (numeroLoteria % 7 == 0) {
  console.log("Gana $700");
} else if (numeroLoteria % 2 == 0) {
  console.log("Gana $100");
} else if (numeroLoteria.toString().length == 2) {
  console.log("Gana $300");
} else if (numeroLoteria.toString().length == 1) {
  console.log("Gana $600");
} else {
  console.log("No hay premio");
}