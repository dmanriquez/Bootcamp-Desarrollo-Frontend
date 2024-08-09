// Transforma un valor x de horas a minutos
function aMinutos(aHoras: number): number {
  let aMinutos = aHoras * 60;
  return aMinutos;
}
//console.log(aMinutos(4.5));

// Transforma un valor x de minutos a horas
function aHoras(minutos: number): number {
  let horas = Math.floor(minutos / 60);
  return horas;
}

// console.log(aHoras(123));

// Escribe una hora en formato HH:MM
function aHHMM(minutos: number): string {
  let mToH : number= minutos / 60
  let horas : number = Math.floor(mToH);
  let losMinutos : number = (mToH - horas) * 60;
  // Transforma la variable losMinutos de tipo number a string
  let losMinutosFormateada : string = losMinutos.toString();
  // Transforma la variable horas de tipo number a string
  let lasHorasFormateada : string = horas.toString();
  if (losMinutos < 10){
    losMinutosFormateada = '0' + losMinutosFormateada
  }
  if (horas < 10){
    lasHorasFormateada = '0' + lasHorasFormateada
  } 
  return `${lasHorasFormateada}:${losMinutosFormateada}`;
}

// console.log(aHHMM(330));

// function comparar(x: number, y: number) y que retorne -1 si x < y, 0 si x == y, 1 si x > y
function compararNumeros(x: number, y: number): number {
  if (x < y) {
    return -1;
  } else if (x == y) {
    return 0;
  } else {
    return 1;
  }
}

// console.log(compararNumeros(1, 1));
// console.assert(compararNumeros(1, 1) >= 0);


export { aHoras, aMinutos, aHHMM, compararNumeros };