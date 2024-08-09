let valores: number[] = [18, 12, 1, 15, 10, 9, 5];
//Sumamos los valores
let sumaNumeros: number = 0;
for (let i: number = 0; i < valores.length; i++) {
  sumaNumeros += valores[i];
}
//Para cada valor, calculamos su porcentaje
let porcentajes: number[] = [];
for (let i: number = 0; i < valores.length; i++) {
  porcentajes[i] = Math.round((valores[i] / sumaNumeros) * 100);
}
//Mostramos los resultados
for (let i: number = 0; i < valores.length; i++) {
  // console.log(`${valores[i]} \t ${porcentajes[i]}%`);
}


// Tabla o matriz
let T: string[][] = [
  ["L", "O", "K", "I"],
  ["O", "G", "R", "O"],
  ["G", "A", "T", "O"],
  ["P", "A", "T", "O"],
];
//console.log(T[1][2]); // Muestra el elemento de índice 2, de la lista 1: "R"
for (let i in T) {
  // Muestra cada lista en una línea: ["L", "O", "K", "I"]
  // console.log(T[i]);
  // Imprime el segundo array y el cuarto elemento de la lista 
  //console.log(T[2][3])
}

// Escriba un programa tal que dada una línea de texto definida en una variable, imprima en pantalla cada palabra con su frecuencia
//Linea de ejemplo
let linea: string = "la casa esta en la zona de la casa rosada";
//Arreglos para palabras y frecuencias
let palabras: string[] = [];
let frecuencias: string[] = [];
//Lista de palabras de la linea
let tokens: string[] = linea.split(" ");


// Ejercicio 1
// Defina un arreglo de números como el siguiente: L = [5,8,4,3,6,9]

let L: number[] = [5, 8, 4, 3, 6, 9];
for (let i in L) {
  console.log(`Elemento en índice ${i} es ${L[i]}`);
}


// Escriba una función que reciba un arreglo L y retorne la suma de todos sus elementos.
 function sumarElementos(L: number[]): number {
   let total = 0;
   for (let elemento of L) {
     total += elemento;
   }
   return total;
 }

 console.log(sumarElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

 // Escriba una función que reciba un arreglo L y retorne el promedio de todos sus elementos
 function promedioElementos( L: number[]): number{
   return sumarElementos(L) / L.length;
 }

 console.log(promedioElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

 // Escriba una función que reciba un arreglo L y retorne el valor mínimo del arreglo
 function valorMinimo( L: number[]): number{
   return Math.min(...L);
 }

 // Escriba una función en typescript que reciba un arreglo L y retorne el valor mínimo del arreglo

 function encuentraNumeroMenor(L: number[]): number {
  let numeroMenor: number = L[0];

  for (let elemento of L) {
    if (elemento < numeroMenor) {
      numeroMenor = elemento;
    }
  }

  return numeroMenor;
 }

 console.log(encuentraNumeroMenor([1, 200, 3, 4, 5, 603, 7, 8, 9, 10]));

 function encuentraNumeroMayor(L: number[]): number {
   let numeroMayor: number = L[0];

   for (let i = 0; i < L.length; i++) {
     if (L[i] > numeroMayor) {
       numeroMayor = L[i];
     }
   }
   return numeroMayor;
 }

 console.log(encuentraNumeroMayor([1, 200, 3, 4, 5, 603, 7, 8, 9, 10]));

 //Escriba una función que reciba dos arreglos e indique si son iguales o no en un booleano.

function sonArreglosIguales(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false; // Los arreglos tienen diferentes tamaños, por lo que no pueden ser iguales
  }
  // Ordenamos los arreglos para comparar sus elementos
  let sortedArr1 = arr1.slice().sort();
  let sortedArr2 = arr2.slice().sort();

  // Comparamos los elementos uno a uno
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false; // Los elementos difieren, los arreglos no son iguales
    }
  }

  return true; // Los arreglos son iguales
}

let array1 = [1, 2, 3];
let array2 = [3, 2, 1];
console.log(sonArreglosIguales(array1, array2)); // Debería imprimir true


export {encuentraNumeroMayor, encuentraNumeroMenor};