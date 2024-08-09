// importamos la función
import { acceso, aHHMM} from "./P1-acceso";

// entraAEdificio :: [string] -> num
// hora en variable HORA_ACTUAL
// Cantidad de personas que pudierton entrar al Edificio

// Ejemplo: const HORA_ACTUAL = 1523 //Las 15:23
// let credenciales: string[] = ["oro","plata","estandar","oro","platino"]
// console.log(permitidos)
// muestra 3

function entraAEdificio(credenciales: string[]): number {
  // inicializamos la variable
  let permitidos: number = 0;
  // se crea ciclo
  for (let i: number = 0; i < credenciales.length; i++) {
    // se crea condicion para comprobar la hora
    if (acceso(credenciales[i], HORA_ACTUAL)) {
      // se incrementa la variable segun cumpla la condicion
      permitidos++;
    }
  }
  // se retorna la variable con los permitidos
  return permitidos;
}

// Definimos la hora
let HORA_ACTUAL: number = 1523;
// Definimos en una variable el arreglo con el tipo de credencial
let credenciales: string[] = ["oro", "plata", "estandar", "oro", "platino"];
// definimos una variable para comprobar el resultado esperado
let resultadoEsperado: number = 3;
// Test
console.log(`Entraron: ${entraAEdificio(credenciales)} personas a las ${aHHMM(HORA_ACTUAL)} horas`);
console.assert(entraAEdificio(credenciales) == resultadoEsperado);
