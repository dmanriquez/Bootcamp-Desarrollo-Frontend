// Ejercicio 1
// reemplazaCaracter :: string, string -> string
// reemplazar todas las apariciones de la letra i (Considerar las mayúsculas y las con acento)
// Ejemplo: ("Un arcoíris invernal viene aproximandose", "-" devuelve "Un arco-r-s -nvernal v-ene aprox-mándose")

function exulsarCarater(texto: string, caracter: string): string {
  // Creamos una variable para el texto formateado
  let textoFormateado = "";

  // Recorremos el texto con un ciclo
  for (let i = 0; i < texto.length; i++) {
    // Obtenemos el caracter indeseado
    let char = texto[i];

    // Se crea una condicion para reemplazar el caracter un todas las apariciones posibles
    if (char == "i" || char == "í" || char == "I" || char == "Í") {
      // Reemplazamos el caracter
      textoFormateado += caracter;
    } else {
      textoFormateado += char;
    }
  }
  // Devolvemos el texto formateado
  return textoFormateado;
}

// Ejemplo de uso
let textoInicial = "Un arcoíris invernal viene aproximandose";
let caracterDeReemplazo = "-";
let textoSalida = exulsarCarater(textoInicial, caracterDeReemplazo);
console.assert( textoSalida == "Un arco-r-s -nvernal v-ene aprox-mandose" );
console.log(textoSalida);
