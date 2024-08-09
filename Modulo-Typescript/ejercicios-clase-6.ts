import { aMinutos, aHHMM } from "./tiempo";

//Funcion que calcule la suma y la diferencia de tiempos, mostrando el resultado en formato HH:MM

// Tiempo 1 es 01:00
// Tiempo 2 es 04:30

// Imprima en consola: La suma es 05:30 y la resta es 03:30

function calculaTiempo(tiempo1: number, tiempo2: number): string {
  let tiempo1Minutos: number = aMinutos(tiempo1);
  let tiempo2Minutos: number = aMinutos(tiempo2);

  let suma: number = tiempo1Minutos + tiempo2Minutos;
  let resta: number = tiempo1Minutos - tiempo2Minutos;
  if(resta < 0){
    console.log("No se puede restar un tiempo negativo y se invertiran las horas");
    resta = tiempo2Minutos - tiempo1Minutos;
  }
  return aHHMM(suma) + " y la diferencia es " + aHHMM(resta);
}

console.log(calculaTiempo( 11 , 3))