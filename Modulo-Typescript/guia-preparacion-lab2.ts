// Ejercicio 1
// num[] :: [num] -> num
// devuelve arreglo con los pares e impares
// ejemplo: L = [15,46,92,78,32,65,17], retornara los arreglos pares = [46,92,78,32] e impares =[15,65,17].

function clasificaParesImpares(L: number[]): number[][] {
  let pares: number[] = [];
  let impares: number[] = [];
  for (let i: number = 0; i < L.length; i++) {
    if (L[i] % 2 == 0) {
      pares.push(L[i]);
    } else {
      impares.push(L[i]);
    }
  }
  return [pares, impares];
}

console.log(clasificaParesImpares([15, 46, 92, 78, 32, 65, 17]));

// Ejercicio 2
// calificación superior a 35 puntos pasan
// NOMBRES[] :: [str] -> str
// PUNTAJES[] :: [num] -> num

// Mostrar al Mejor Jugador: nombre con xx puntajes
// mostrar al Peor Jugador: nombre con xx puntaje

function clasificarPuntajesYParticipantes(
  puntajes: number[],
  nombres: string[]
): [number[], string[]] {
  const puntajesClasificados: number[] = [];
  const participantesClasificados: string[] = [];

  for (let i = 0; i < puntajes.length; i++) {
    if (puntajes[i] > 35) {
      puntajesClasificados.push(puntajes[i]);
      participantesClasificados.push(nombres[i]);
    }
  }

  return [puntajesClasificados, participantesClasificados];
}

// Función para encontrar al mejor jugador
function encontrarMejorJugador(nombres: string[], puntajes: number[]): string {
    let mejorPuntaje = Math.max(...puntajes);
    let mejorJugador = nombres[puntajes.indexOf(mejorPuntaje)];
    // retorna el nombre del mejor jugador
    return mejorJugador;
}

// Función para encontrar al peor jugador
function encontrarPeorJugador(nombres: string[], puntajes: number[]): string{
    let peorPuntaje = Math.min(...puntajes);
    let peorJugador = nombres[puntajes.indexOf(peorPuntaje)];
    // retorna el nombre del peor jugador
    return peorJugador;
}

// Nombres y puntajes de los participantes
let NOMBRES: string[] = ["Beatriz", "Armando", "Marcela", "Nicolás", "Catalina"];
let PUNTAJES: number[] = [30, 68, 40, 39, 41];

// Obtener los resultados
let [puntajes, participantes] = clasificarPuntajesYParticipantes(PUNTAJES, NOMBRES);
let mejorJugador = encontrarMejorJugador(NOMBRES, PUNTAJES);
let peorJugador = encontrarPeorJugador(NOMBRES, PUNTAJES);

// Imprimir los resultados con el formato requerido
console.log("CLASIFICADOS");
for (let i = 0; i < participantes.length; i++) {
    console.log(`${participantes[i]} \t ${puntajes[i]} puntos`);
}

// Imprimir el mejor jugador
console.log(`Mejor Jugador: ${mejorJugador} con ${Math.max(...puntajes)} puntos.`);
// Imprimir el peor jugador
console.log(`Peor Jugador: ${peorJugador} con ${Math.min(...puntajes)} puntos.`);




// Ejercicio 3

// Si la edad del libro es divisible por 10, el descuento es precisamente esa cantidad de años. Por ejemplo, si un libro fue publicado en 1994, entonces el descuento es de un 30%.
// Si la edad del libro termina en 7, se le hace un 15% de descuento. Por ejemplo, si el libro fue publicado en 2007, entonces se le descuenta un 15%.
// Todo libro publicado antes de 1930 tiene un descuento adicional de 20%.
// Considere que el tope de descuento de un libro es de un 95%.

// descuentos :: [] -> [string, number]

let libros: (string | number)[][] = [
  ["Papelucho", 1947],
  ["La casa de los espíritus", 1982],
  ["Cien años de soledad", 1967],
  ["Pedro Páramo", 1955],
  ["Rayuela", 1963],
];

// Función para encontrar el descuento
function esDivisiblePor10(edadLibro: number): number {
  // Se inicia la variable con 0 para definir el descuento
  let descuento: number = 0;
  if (edadLibro % 10 == 0) {
    // Aplica descuento del 30%
    descuento = 30;
  }
  return descuento;
}

function terminaEn7(edadLibro: number): number{
  let descuento: number = 0;
  if (edadLibro % 10 == 7) {
    // Aplica descuento del 15%
    descuento = 15;
  }
  return descuento;
}

function antesDe1930(edadLibro: number): number{
  let descuento: number = 0;
  if (edadLibro < 1930) {
    // Aplica descuento del 20%
    descuento = 20;
  }
  return descuento;
}

function descuento(libros: []) {
  let sale: number = 0
  let anio: number = 0
    esDivisiblePor10(anio) + terminaEn7(anio) + antesDe1930(anio);
  if (sale > 95) {
    return 95;
  } else {
    return sale;
  }
}

for (let i = 0; i < libros.length; i++) {
  console.log(libros[i][1])
  //let descuentoLibro: number = descuento(libros[i]);
  // console.log(descuentoLibro);
}