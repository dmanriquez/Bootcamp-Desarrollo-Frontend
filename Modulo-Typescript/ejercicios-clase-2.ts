// A continuación, se detallarán una serie de instrucciones para familiarizarnos con TypeScript. Programe cada una de ellas para que se muestre lo pedido en el intérprete:

// Asigne a la variable m el valor de la expresión: 2 + 7 elevado a 3
let m: number = 2 + 7 * 7 * 7;

// Defina la variable n con un valor numérico a su elección
let n: number = 5;

// Muestre en pantalla el siguiente mensaje: “El resultado de m + n es: XXXX!”, en donde XXXX corresponde al resultado de la suma de los valores de m y n
let resultado: number = m + n;

// Mostrar resultado
console.log("El resultado de m + n es:" + resultado);
console.log(`El resultado de m + n es: ${m + n}`);


// Considere los programas listados a continuación. ¿Qué imprime el intérprete, o qué error arroja en cada caso? Corríjalos en caso de ser necesario.

// Agregar el tipo de variable
let Control1: number = 5.5;
let Control2: number = 4.1;
let Control3: number = 6.4;
let totalResultado: number = Control1 + Control2 + Control3;

// Falta la variable total
totalResultado = Control1 + Control2 + Control3;

// Los nombres deben ser iguales
let Promedio = Control1 + Control2 + Control3 / totalResultado;
console.log(Promedio);
let mascota: string = 'perritos';
let cantidad: number = 10;
let mensaje: any = "Yo tenia " + cantidad + " " + mascota;
console.log(mensaje);


// Escriba un programa que permita convertir dólares a pesos, de acuerdo con el tipo de cambio diario:

let dolar: number = 787.65;
let peso: number = 1000;
let conversion: number = peso/dolar;
console.log(conversion + " Pesos");


// Suponga que estamos generando una calculadora para calcular medidas geométricas con el siguiente código. ¿Qué imprime el código anterior?

let PI: number = 3.14;
let radio: number = 10;
let perimetro: number = 2 * PI * radio;
let area: number = PI * radio ** 2;
PI = 3.1415; //para una mejor precision
console.log(perimetro);
console.log(area);