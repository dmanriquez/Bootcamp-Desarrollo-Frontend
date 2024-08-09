// A partir de dos números A y B, escriba el resultado de operarlos de todas las formas posibles siguiendo el diálogo:

let A:number = 10;
let B: number = 5;
let resultadoSuma = A + B;
let resultadoResta = A - B;
let resultadoMultipicacion = A * B;
let resultadoDivision = A / B;
let resultadoPotencia = A ^ B;
let resultadoPorcentaje = A % B;

console.log("El resultado de A + B es igual a: " + resultadoSuma);
console.log("El resultado de A - B es igual a: " + resultadoResta);
console.log("El resultado de A * B es igual a: " + resultadoMultipicacion);
console.log("El resultado de A / B es igual a: " + resultadoDivision);
console.log("El resultado de A ^ B es igual a: " + resultadoPotencia);
console.log("El resultado de A % B es igual a: " + resultadoPorcentaje);


// Cree un programa que tome un número de 2 dígitos e invierta sus dígitos. Por ejemplo:

let miNumero: number = 45;
let primerDigito: number = miNumero % 10;
let segundoDigito: number = Math.floor(miNumero / 10);
let invertido: number = (primerDigito * 10) + segundoDigito;
console.log(invertido);


// En base a lo visto en la pregunta anterior, adapte su programa para que invierta un número de 3 dígitos:
let miNumeroInvertido: number = 453;
let primerDigitoInvertido: number = miNumeroInvertido % 10;
let segundoDigitoInvertido: number = Math.floor(miNumeroInvertido / 10) % 10;
let tercerDigitoInvertido: number = Math.floor(miNumeroInvertido / 100);
let invertido2: number = (primerDigitoInvertido * 100) + (segundoDigitoInvertido * 10) + tercerDigitoInvertido;
console.log(invertido2);


// Calculadora de bacterias
let poblacionInicial: number = 100;
let minutos: number = 5;
let cantidadTiempo: number = minutos**60;
let poblacionFinal: number = poblacionInicial * cantidadTiempo + 20;
console.log(`Población inicial: ${poblacionInicial} bacterias. Luego de ${cantidadTiempo} minutos: ${poblacionFinal} bacterias`);


// Expresiones 1
let a = 2;

let pasoUno: number = (4 + 5);
let pasoDos: number = pasoUno * a;
let pasotres: number = 20/50;
let pasoCuatro: number = pasoDos - pasotres;
let pasoCinco: number = pasoCuatro ** (a/5);
console.log(`Resultado de Expresión 1 = ${pasoCinco}`);


// Expresion 2
let numerador: number = 45 + (10**5) - 55;
let denominador: number = (30 * 8) - a;
let expresionDos: number = numerador / denominador - (a**5/4);
console.log("Resultado de Expresión 2 = " + expresionDos);

//Expresion 3
let stepOne: number = (1.5 -35);
let stepTwo: number = stepOne **2;
let stepThree: number = a**3;
let stepFour: number = stepThree / 15;
let expresiontres: number = stepTwo + stepFour;
console.log("Resultado de Expresión 3 = " + expresiontres);