// Ejercicio 1
// Escriba una función que retorne un arreglo con los n primeros números pares. Por ejemplo: listaPares(5) entrega el arreglo [2,4,6,8,10].

function numerosPares(L: number): number[] {
  const pares: number[] = [];
  for (let i: number = 1; i <= L; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
}

let N = 10;
console.log(numerosPares(N));

// Ejercicio 2
// Escriba una función que calcule el promedio de todos los números impares de un arreglo

function promedioImpares(L: number[]): number {
  let total: number = 0;
  let cont: number = 0;
  for (let i: number = 0; i < L.length; i++) {
    if (L[i] % 2 !== 0) {
      total += L[i];
      cont++;
    }
  }
  return total / cont;
}

let prom: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(promedioImpares(prom));