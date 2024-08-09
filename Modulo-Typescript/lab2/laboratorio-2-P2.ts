// edadHumana :: [num] -> [num]

// Formula𝐸𝑑𝑎𝑑 𝐸𝑞𝑢𝑖𝑣𝑎𝑙𝑒𝑛𝑡𝑒 𝐻𝑢𝑚𝑎𝑛𝑎 = 16 · 𝑙𝑛(𝐸𝑑𝑎𝑑 𝐶𝑟𝑜𝑛𝑜𝑙ó𝑔𝑖𝑐𝑎 𝑃𝑒𝑟𝑟𝑢𝑛𝑎) + 31
// Escriba una función que reciba un arreglo de edades cronológicas y retorne otro arreglo con sus equivalentes en años humanos


// Función para calcular el logaritmo en cualquier base 
// function logBase(x: number, base: number): number { return Math.log(x) / Math.log(base); } 
// Ejemplo: calcular el logaritmo base 3 de un número const numeroBase3: number = 27; const base3: number = 3; const logaritmoBase3: number = logBase(numeroBase3, base3); console.log(`El logaritmo base ${base3} de ${numeroBase3} es ${logaritmoBase3}`); 
// Ejemplo: calcular el logaritmo base 10 de un número const numeroBase10: number = 100; const base10: number = 10; const logaritmoBase10: number = logBase(numeroBase10, base10); console.log(`El logaritmo base ${base10} de ${numeroBase10} es ${logaritmoBase10}`);

function edadHumana(edades: number[]): number[] {
  let edadesHumana: number[] = [];
  for (let i = 0; i < edades.length; i++) {
    let edadHumana: number = (Math.round(16*(Math.log(edades[i]) + 31)));
    edadesHumana.push(edadHumana);
  }
  return edadesHumana;
}

// Testing
console.assert()
console.log(edadHumana([1, 2, 3, 4, 5]));


// edadPerro :: [str[], num[]] -> [str, num]

