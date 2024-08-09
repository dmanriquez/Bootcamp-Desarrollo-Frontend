let s: string = "hola como estan en el planeta tierra";

console.log(s.indexOf("la"))
// devuelve la posicion 2
// La cadena de caracteres considera espacios y tipos de espacios
console.log(s.substring(0, 5)); // devuelve "hola"

console.log(s.replace("hola", "chao")); // devuelve "hello como estan en el planeta tierra" 

console.log(s.split(" ")); // devuelve ["hola", "como", "estan", "en", "el", "planeta", "tierra"]
// considera los espacios para separar las palabras y devuelve un arreglo


// Funcion que cuente el numero de apariciones de un caracter
// Frecuencia :: str str -> number
// Ejemplo: Frecuencia("a", "hola como estan en el planeta tierra") == 5
function frecuencia(caracter: string, texto: string): number {
  let cuenta: number = 0;
  // Convertimos el caracter y el texto a minúsculas para normalizarlos
  let caracterMin: string = caracter.toLowerCase();
  let textoMin: string = texto.toLowerCase();
  // Recorremos el texto
  for (let i: number = 0; i < textoMin.length; i++) {
    // Si el caracter coincide con el de la cadena
    if (textoMin[i] == caracterMin) {
      // Incrementamos la cuenta
      cuenta++;
    }
  }
  // Devolvemos la cuenta
  return cuenta;
}

console.assert(frecuencia("a", "abracadabra") == 5); // Imprime 5
console.assert(frecuencia("a", "abrAcadabra") == 5); // Imprime 5


// esAlfa :: str -> boolean
// Ejemplo: esAlfa("hola") == true
function esAlfa(cadena: string): boolean {
  // Verificamos que la cadena sea de tipo string
  return typeof cadena == "string";
}

//console.assert(esAlfa("hOla") == false); // Imprime true


// Ejercicio 1
// snakeCase :: string -> string
// Ejemplo: snakeCase("hola como estan en el planeta tierra") == "hola_como_estan_en_el_planeta_tierra"
function snakeCase(texto: string) : string {
  // textoSnakeCase :: string
  let textoSnakeCase: string = "";
  // Recorremos el texto
  for (let i: number = 0; i < texto.length; i++) {
    // encontramos el texto con una condicion
    if (texto[i] == " ") {
      // lo reemplazamos
      textoSnakeCase += "_";
    } else {
      // lo copiamos
      textoSnakeCase += texto[i];
    }
  }
  // Devolvemos el texto
  return textoSnakeCase;
}

console.assert(snakeCase("hola como estan en el planeta tierra") == "hola_como_estan_en_el_planeta_tierra");

// Ejercicio 2
// ordenadoAlfabetico :: string  -> string
// Ejemplo: ["a", "b", "c"] == true
function ordenadoAlfabetico(texto: string[]): boolean {
  // Recorremos el texto hasta el penúltimo elemento del arreglo. Si no lo hacemos hasta el peñultimo elemento el programa fallará ya que el compararía el último con uno que NO existe
  for (let i: number = 0; i < texto.length - 1; i++) {
    // Si el texto en la posicion i es mayor que el de la siguiente posicion devolvemos falso. 
    // Además normalizamos el texto a minúsculas
    if (texto[i].toLowerCase() > texto[i + 1].toLowerCase()) {
      return false;
    }
  }
  // Si no, devolvemos verdadero
  return true;
}

//console.assert(ordenadoAlfabetico(["amigo", "burro", "carretera"]) == true);
console.assert(ordenadoAlfabetico(["amigo", "burro", "Marraqueta"]) == true);
//console.assert(ordenadoAlfabetico(["Git", "Universidad", "Marraqueta"]) == false);


// Ejercicio 3
// costoMensaje :: string -> number
// Cada letra vale 10
// Caracter especial vale 30
// Numeros valen 20
// Ejemplo: "H@la" == 60
function costoMensaje(mensaje: string) : number{
    return 
  }

console.log(costoMensaje("H@la"));


// Ejercicio 4
// esPangrama :: string -> boolean
// Ejemplo: esPangrama("hola como estan en el planeta tierra") == true
// function esPangrama(texto: string) : boolean{
//   let esPangrama: boolean = true
//   for (let i: number = 0; i < texto.length; i++) {
//     switch (texto[i]) {
//       case 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z':
//       esPangrama = false
//       break
//     }
//   }
//   return esPangrama
// }

function esPangrama( texto:string) : boolean{
  // Se genera variable para almacenar el abecedario
  let abecedario: string = "abcdefghijklmnñopqrstuvwxyz"
  // Ciclo para recorrer el abecedario
  for(let i = 0; i < abecedario.length; i++){
    // Condicion para comprobar si el texto contiene el abecedario
    if(texto.indexOf(abecedario[i]) == -1){
      // Si no contiene el abecedario, se retorna falso
      return false
    }
  }
  // Si contiene el abecedario, se retorna verdadero
  return true
}

console.assert(esPangrama("Cada vez que trabajo, Felix me paga un whisky.") == true);
//console.log(esPangrama("Cada vez que trabajo, Felix me paga un vino."));


// Ejercicio 5
// validarPatente :: string[] number[] -> boolean
// No puede tener vocales
// Las letras Ñ y Q no pueden ser usadas
// Ejemplo: validarPatente HPRK-32 == true

function validarPatente (letras: string, numeros: number) : boolean {
  let vocales: string = "AEIOU"
  let caracteresNoPermitidos: string = "ÑQ"
  for(let i = 0; i< letras.length; i++){
    if(vocales.indexOf(letras[i]) != -1){
      return false
    }
    if(caracteresNoPermitidos.indexOf(letras[i]) != -1){
      return false
    }
    if (numeros >= 100){
      return false
    }
  }
  return true
}

console.assert(validarPatente("HPRK",21) == true);
console.assert(validarPatente("HPRQ",21) == false);
console.assert(validarPatente("APRQ",21) == false);
console.assert(validarPatente("APRQ",210) == false);

// Ejercicio 6
