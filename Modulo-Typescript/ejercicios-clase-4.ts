//////////// EJERCICIO 1 ////////////

// Declaramos la variable n
let N: number = 4;
let final: number = 1;

// Ciclo para creacion del factorial
for (let i: number = 1; i <= N; i++) {
  final *= i;
}
console.log(final);

//////////// EJERCICIO 2 ////////////

// Declaramos la variable
let numeroMultiplica: number = 1;
// Ciclo para mostrar la tabla del 1 al 12
while (numeroMultiplica >= 1 && numeroMultiplica <= 12) {
  console.log(`Tabla de multiplicar del ${numeroMultiplica}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${numeroMultiplica} x ${i} = ${numeroMultiplica * i}`);
  }
  numeroMultiplica++;
}

//////////// EJERCICIO 3 ////////////
let cuentaNumero: number = 4545;
let cuentaDigitos: number = 0;

let temporal: number = cuentaNumero;
while (temporal > 0) {
  temporal = (temporal / 10) | 0; // Truncamos hacia abajo utilizando la operación | 0
  cuentaDigitos++;
}
console.log(`Cantidad de dígitos es: ${cuentaDigitos}`);

//////////// EJERCICIO 4 ////////////
const x: number = 4;

let suma = 0;
for (let i = 2; i <= x * 2; i += 2) {
  suma += i;
}
console.log("La suma de los primeros", x, "números pares es:", suma);

//////////// EJERCICIO 5 ////////////
