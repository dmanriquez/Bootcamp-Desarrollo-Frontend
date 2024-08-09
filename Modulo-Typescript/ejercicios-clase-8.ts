// restriccion :: [num] -> num
// calcula las edades de personas a partir de un arreglo de años
// ejemplo: resticcion([1996, 1981,2010,2000] devolverá [24, 31, 10, 20])

function restriccion(nacimientos: number[]): number[] {
  let edades : number [] = []
  for(let i = 0; i < nacimientos.length; i++){
    edades.push(2024 - nacimientos[i])
  }
  return edades
}

//console.log(restriccion([1996, 1981,2010,2000]))


// Ejercicio 1

// restringeAltura :: [num] -> [num]
// Altura minina de 1.50
// Ejemplo: restringeAltura [1.60, 1.70, 1.40, 1.90] devolverá [1.60, 1.70, 1.90]

function restringeAltura(altura: number[]): number[]{
  let alturaMinima = 1.50
  let alturaRestringida: number[]= []
  for(let i = 0; i < altura.length; i++){
    if(altura[i] >= alturaMinima){
      alturaRestringida.push(altura[i])
    }
  }
  return alturaRestringida
}

console.log(restringeAltura([1.60, 1.70, 1.40, 1.90]))

// Ejercicio 2
// aumentaNivel :: [num] -> [num]
// Aumenta el nivel y sube todas las estadisticas en 10%
// Ejemplo: [ 20, 100, 34, 90, 128] y devolverá [ 22, 110, 36, 100, 130]

function aumentarNivel(estadisticas: number[]): number[]{
  let estadisticasAumentadas: number[] =[]
  for(let i = 0; i < estadisticas.length; i++){
    estadisticasAumentadas.push(estadisticas[i] + (estadisticas[i] * 0.10))
  }
  return estadisticasAumentadas
}

console.log(aumentarNivel([20, 100, 34, 90, 128]))

// Ejercicio 3
// ventas :: [num] -> [num]
// 

function encontrarVentasMasAltas(ventas: number[]): number {
  // Inicializamos las ventas más altas con el primer elemento del arreglo
  let ventasMasAltas = ventas[0];
  // Iteramos sobre los elementos restantes en el arreglo
  for (let i = 0; i < ventas.length; i++) {
    // Si el elemento actual es mayor que las ventas más altas, actualizamos las ventas más altas
    if (ventas[i] > ventasMasAltas) {
      ventasMasAltas = ventas[i];
    }
  }

  // Retornamos las ventas más altas
  return ventasMasAltas;
}

// Ejemplo de uso
let ventasCanciones = [10, 15, 20, 5, 25];
let ventasMasAltas = encontrarVentasMasAltas(ventasCanciones);
console.log(
  `Las ventas más altas de las canciones dadas son ${ventasMasAltas} millones.`
);


// Ejercicio 4
// alimentosVencidos [num] -> [num]
// Más de 3 años = alimentos vencidos
// Ejemplo: [2022, 219, 2015, 2018, 2020, 2019] y retorne la cantidad de productos que tienen más de 3 años desde su fecha de elaboración

function alimentosVencidos(anios: number[]): number{
  let productosVencidos: number = 0
  for (let i = 0; i < anios.length; i++){
    if(anios[i] > 3){
      productosVencidos++
    }
  }
  return productosVencidos;
}

console.log(alimentosVencidos([2022, 219, 2015, 2018, 2020, 2019]));

// Ejercicio 5
// conversionFarenheitACelsius :: [num] -> [num]
// Conversion de Farenheit a Celsius
// Ejemplo: [ 32, 65, 90, 120, 180] y retorne la temperatura en Celsius

function conversionFarenheitACelsius(temperatura: number[]): number[]{
  let temperaturaCelsius: number[] = []
  for(let i = 0; i < temperatura.length; i++){
    temperaturaCelsius.push((temperatura[i] - 32) * 5/9)
  }
  return temperaturaCelsius
}

console.log(conversionFarenheitACelsius([32, 65, 90, 120, 180]))

// Ejercicio 6
// ingresos :: [num] -> [num]
// gastos :: [num] -> [num]
// Escriba dos funciones, una para obtener un arreglo de ingresos y otra para obtener un arreglo de gastos.
// ejemplo: ingresosGastos [233, 23113, -389, -28, 1500] y retorna ingresos [233, 23113, 1500] y gastos [-389, -28]

function obtenerGanacias(ingresos: number[]): number[]{
  let ganancia: number[] = []
  for(let i = 0; i < ingresos.length; i++){
    if(ingresos[i] > 0){
      console.log(ingresos[i])
      ganancia.push(ingresos[i])
    }
    }
  return ganancia;
}

function obtenerPerdidas(gastos: number[]): number[]{
  let perdida: number[] = []
  for(let i = 0; i < gastos.length; i++){
    if(gastos[i] < 0){
      perdida.push(gastos[i])
    }
  }
  return perdida;
}

let ganancia = [233, 323, -389, -28, -212];
let perdida = [233, 323, -389, -28, -212];

console.log(obtenerGanacias(ganancia))
console.log(obtenerPerdidas(perdida))


// ejercicio 7
// decimalesAEnteros :: [num] -> [num]
// Decimales a enteros
// Ejemplo: [ 1.5, 2.5, 3.5, 4.5, 5.5] y retorne [1, 2, 3, 4, 5]

function decimaAEnteros(numero: number[]): number[]{
  let entero: number[] = []
  for(let i = 0; i < numero.length; i++){
    entero.push(Math.floor(numero[i]))
  }
  return entero
}

console.log(decimaAEnteros([1.5, 2.5, 3.5, 4.5, 5.5]))

// Ejercicio 8
// duracionZaga :: [num] -> num
// Restar 10 a cada elemento de la lista
// Ejemplo: [100, 200, 300, 400, 500] reste 10 a cada elemento cree una nueva lista [90, 190, 290, 390, 490] y sume todos los elementos de la lista para obtener el total

function duracionZaga(pelicula: number[]): number{
  let sinCreditos: number[] = []
  let zagacompleta: number = 0
  
  for(let i = 0; i < pelicula.length; i++){
    sinCreditos.push(pelicula[i] - 10);
    zagacompleta += sinCreditos[i];
    }
  return zagacompleta 
}

let pelicula: number[] = [100, 200, 300, 400, 500];
let duracionTotal: number = duracionZaga(pelicula);
console.log("Duración total sin créditos:", duracionTotal);