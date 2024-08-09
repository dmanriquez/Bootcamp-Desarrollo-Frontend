let ladoTerreno: number = 50;
let ladoEdificio: number = 25;

// let areaTerreno: number = ladoTerreno **2;
// let areaEdificio: number = ladoEdificio **2;
// let areaTotal: number = areaTerreno - areaEdificio;
// console.log(areaTotal);

function calcularArea(ladoA: number, ladoB: number) {
  let areaJardin = (ladoA **2) - (ladoB **2);
  return areaJardin
}

// console.log(`se deben comprar ${calcularArea(50, 25)} cuadrados de pasto`);

// Test de la función. Si está bien no muestra nada en la consola. Si no, el test muestra el mensaje "Assertion failed".
console.assert(calcularArea(50, 25) === 1875);