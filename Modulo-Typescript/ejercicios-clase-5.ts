// Ejercicio 1

function factorial(n: number): number {
  if (n == 0) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
}

console.log(factorial(4));


// Ejercicio 2
function masaCorporal(peso: number, altura: number): string {
  let masa = peso / (altura * altura);
  if (masa <= 18.5) {
    return("Bajo peso");
  }
  else if (masa >= 18.6 && masa <= 24.9) {
    return("Peso normal");
  }
  else if (masa >= 25 && masa <= 29.9) {
    return("Sobrepeso");
  }
  else if (masa >= 30) {
    return("Obesidad");
  }
}

console.log(masaCorporal(80, 1.80));

// Ejercicio 3
function convertirFecha(fecha: string): string {
  let dia = "";
  let mes = "";
  let anio = "";

  // Extraer el día
  for (let i = 0; i < 2; i++) {
    dia += fecha[i];
  }

  // Extraer el mes
  for (let i = 2; i < 4; i++) {
    mes += fecha[i];
  }

  // Extraer el año
  for (let i = 4; i < fecha.length; i++) {
    anio += fecha[i];
  }

  return anio + mes + dia;
}

// Ejemplo de uso
let fecha1 = "15052022";
let fecha2 = "25042021";

let fechaConvertida1 = convertirFecha(fecha1);
let fechaConvertida2 = convertirFecha(fecha2);

console.log(`Fecha 1 en formato AAAAMMDD: ${fechaConvertida1}`);
console.log(`Fecha 2 en formato AAAAMMDD: ${fechaConvertida2}`);

// Comparar las fechas
if (fechaConvertida1 > fechaConvertida2) {
  console.log("Fecha 1 es mayor que Fecha 2");
} else if (fechaConvertida1 < fechaConvertida2) {
  console.log("Fecha 2 es mayor que Fecha 1");
} else {
  console.log("Ambas fechas son iguales");
}

// Ejercicio 4
function parteEntera( numeroUno: number, numeroDos: number): number{
  let resultadoDivision: number = numeroUno / numeroDos;
  let parteEntera: number = resultadoDivision - resultadoDivision%1;
  return parteEntera;
}

console.log(parteEntera(10, 3));

// Ejercicio 5

function calcularBilletes(retiro: number): void {
  let billete20000 = 20000;
  let billete10000 = 10000;
  let billete5000 = 5000;
  let billete2000 = 2000;
  let billete1000 = 1000;

  console.log(`El cliente desea retirar ${retiro} pesos`);

  let cantidad20000 = (retiro / billete20000) - (retiro / billete20000)%1;
  console.log(`Le corresponden ${cantidad20000} billetes de ${billete20000}`);
  retiro %= billete20000;

  let cantidad10000 = (retiro / billete10000) - (retiro / billete10000)%1;
  console.log(`Le corresponden ${cantidad10000} billetes de ${billete10000}`);
  retiro %= billete10000;

  let cantidad5000 = (retiro / billete5000) - (retiro / billete5000)%1;
  console.log(`Le corresponden ${cantidad5000} billetes de ${billete5000}`);
  retiro %= billete5000;

  let cantidad2000 = (retiro / billete2000) - (retiro / billete2000)%1;
  console.log(`Le corresponden ${cantidad2000} billetes de ${billete2000}`);
  retiro %= billete2000;

  let cantidad1000 = (retiro / billete1000) - (retiro / billete1000)%1;
  console.log(`Le corresponden ${cantidad1000} billetes de ${billete1000}`);
}

// Ejemplo de uso
let montoRetiro = 123000;
calcularBilletes(montoRetiro);
