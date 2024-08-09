// Ejercicio 1

// La clave 1581 NO es válida, dado que se repite el número 1.
// La clave 3479 NO es válida, dado que todos los números se encuentran en orden ascendente.
// La clave 9237 SI es válida, dado que ningún número se repite, y hay al menos un número que no está en orden ascendente

// Escriba una función que permita determinar si una clave ingresada es o no válida en un booleano.

function tieneDigitosRepetidos(numero: number): boolean {
    let n = numero;
    let digitosUnicos = new Set<number>();

    // Extraer los dígitos individualmente
    while (n > 0) {
        let digito = n % 10;
        digitosUnicos.add(digito);
        n = Math.floor(n / 10);
    }

    // Verificar si hay dígitos repetidos
    return digitosUnicos.size !== 4;
}

// Ejemplos de uso:
console.log(tieneDigitosRepetidos(1234)); // false (no hay dígitos repetidos)
console.log(tieneDigitosRepetidos(1223)); // true (dígitos repetidos)
console.log(tieneDigitosRepetidos(1111)); // true (todos los dígitos son iguales)



function esCadenaAscendente(cadena: string): boolean {
    let digitoAnterior: number | null = null;
    for (let i = 0; i < cadena.length; i++) {
        let digitoActual = cadena.charCodeAt(i) - 48; // Restamos 48 para convertir el carácter a su valor numérico
        if (digitoAnterior !== null && digitoActual <= digitoAnterior) {
            return false;
        }
        digitoAnterior = digitoActual;
    }
    return true;
}

// Ejemplo de uso:
let cadenaEjemplo = "12345";
console.log(esCadenaAscendente(cadenaEjemplo)); // Debería imprimir true