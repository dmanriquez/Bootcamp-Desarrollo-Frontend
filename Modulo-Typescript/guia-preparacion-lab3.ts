// Ejercicio 1
// limpiarTexto() :: str -> str
// Limpar tildes y espacios
// Ejemplo; limpiarTexto(" rápido ") devuelve el string "rapido", 
// Ejemplo: limpiarTexto("_rectángulo -") devuelve el string "rectangulo".

function limpiarTexto(texto: string): string {
  // creamos la variable para el texto limpio
  let textoLimpio: string = "";
  // creamos una variable que contengan los acentos en las vocales
  let acentos: string = "áéíóú"
  // Recorremos el texto
  for (let i: number = 0; i < texto.length; i++) {
    // Si el texto no es un espacio, un guion, un guion bajo o un acento  
    if (texto[i] != " " && texto[i] != "_" && texto[i] != "-" && !acentos.includes(texto[i])) {
      // Lo copiamos
      textoLimpio += texto[i];
      // Si es un acento
    } else if( acentos.includes(texto[i]) ) {
      // Lo reemplazamos
      if (texto[i] == "á") {
        textoLimpio += "a";
      } else if (texto[i] == "é") {
        textoLimpio += "e";
      } else if (texto[i] == "í") {
        textoLimpio += "i";
      } else if (texto[i] == "ó") {
        textoLimpio += "o";
      } else if (texto[i] == "ú") {
        textoLimpio += "u";
      }
    }
  }
  // Devolvemos el texto limpio
  return textoLimpio; 
}

console.log(limpiarTexto(" Fabían Vergara"));
console.log(limpiarTexto("_rectángulo -"));

// Ejercicio 2
// getFormatoTipo() :: number number number -> string
// getFormatoTipo(1,2,2022)
// "1/2/2022" 

class Fecha{
  dia: number;
  mes: any;
  anio: number;
  
  constructor(dia: number, mes: any, anio: number){
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
  }
  // getFormatoTipoUno() :: number number number -> string
  // Ejemplo: getFormatoTipoUno(1,2,2022) y devolvera "1 de febrero de 2022"
  getFormatoTipoUno(): string {
    if(this.dia >=1 && this.dia <=9){
      return "0" + this.dia + " de " + this.mes + " de " + this.anio;
    }
    else{
      return this.dia + " de " + this.mes + " de " + this.anio;
    }
  }
  
  // getFormatoTipoDos() :: number number number -> string
  // Ejemplo: getFormatoTipoDos(1,2,2022) y devolvera "1/2/2022"
  getFormatoTipoDos(): string {
    if(this.mes >= 1 && this.mes <= 9){
      return this.dia + "/" + "0" + this.mes + "/" + this.anio;
    }
    else{
      return this.dia + "/" + this.mes + "/" + this.anio;
    }
  }
  
  rangoFechas(): number {
    return this.anio - 2024;
  }
  
  getFormatoFechaAAAAMMDD(): string {
    return this.anio +"-"+ this.mes +"-"+ this.dia;
  }
}

let date = new Fecha(7,'julio',2024);
let newDate = new Fecha(27,7,2024);

console.log(date.getFormatoTipoUno());
console.log(newDate.getFormatoTipoDos());



// Ejercicio 3
class Reservacion{
  nombre: string;
  entrada: Fecha;
  salida: Fecha;
  
  // Se define los atributos de entrada y de salida tipo "Fecha" (Nombre de la clase Fecha usada anteriormente) para obtener lodos los métodos utilizados en  la clase Fecha
  constructor(nombre: string,entrada: Fecha, salida: Fecha){
    this.nombre = nombre;
    this.entrada = entrada;
    this.salida = salida;
  }
  
  // getFormatoReservacion() :: string -> string
  // Ejemplo: getFormatoReservacion("Juan Perez") y devolvera "Juan Perez: Desde 1/2/2022 hasta 27/7/2022"
  getFormatoReservacion(): string {
    return this.nombre + ": Desde "  + this.entrada.getFormatoTipoDos() + " hasta " + this.salida.getFormatoTipoDos();
  }
  // Se crea a metodo setter para cambiar la fecha de salida
  // Este recibe como parametro un objeto de tipo Fecha
  setSalidaReservacion(newSalida: Fecha) {
    this.salida = newSalida;
  }
  // getDuracionReservacion() :: number -> number
  // Ejemplo: getDuracionReservacion() y devolvera 26
  getDuracionReservacion():number{
    let fechaInicial: any = new Date(this.entrada.getFormatoFechaAAAAMMDD());
    let fechaFinal: any = new Date(this.salida.getFormatoFechaAAAAMMDD());
    let tiempo = fechaFinal - fechaInicial;
    let transformaADias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    return transformaADias
  }
}

// Se crea la instacia de la clase reservación
// Los atributos entrada y salida deben ser de tipo Fecha // infoReserva es un OBJETO instanciado de la clase Reservacion.
let infoReserva = new Reservacion("Juan Perez", new Fecha(27, 7, 2024), new Fecha(27,8,2024));
console.log(infoReserva.getFormatoReservacion());

infoReserva.setSalidaReservacion(new Fecha(29,12,2026));
console.log(infoReserva.getFormatoReservacion());

console.log(infoReserva.getDuracionReservacion());
//console.log(Reflect.ownKeys(infoReserva));


// Ejercicio 4
class Articulo {
  nombre: string;
  codigo: number;
  categoria: string;
  
  constructor(nombre: string, codigo: number, categoria: string) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.categoria = categoria;
  }
}

// Ejemplo de uso
const articulo1 = new Articulo("Avengers: Endgame", 1001, "Película");
const articulo2 = new Articulo("The Legend of Zelda: Breath of the Wild", 2001, "Videojuego");

// Imprime los atributos de los artículos
console.log(
  `Artículo 1: ${articulo1.nombre}, Código: ${articulo1.codigo}, Categoría: ${articulo1.categoria}`
);
console.log(
  `Artículo 2: ${articulo2.nombre}, Código: ${articulo2.codigo}, Categoría: ${articulo2.categoria}`
);

function filtrarArticulosPorCategoria(
  articulos: Articulo[],
  categoria: string
): Articulo[] {
  return articulos.filter((articulo) => articulo.categoria === categoria);
}

// Ejemplo de uso
const articulos: Articulo[] = [
  new Articulo("Avengers: Endgame", 1001, "Película"),
  new Articulo("The Legend of Zelda: Breath of the Wild", 2001, "Videojuego"),
  new Articulo("Inception", 3001, "Película"),
  new Articulo("Super Mario Odyssey", 2002, "Videojuego"),
];

// Filtra los artículos por la categoría "Película"
const películasDisponibles = filtrarArticulosPorCategoria(
  articulos,
  "Película"
);
console.log("\nPelículas disponibles:");
películasDisponibles.forEach((artículo) => console.log(`- ${artículo.nombre}`));

// Filtra los artículos por la categoría "Videojuego"
const videojuegosDisponibles = filtrarArticulosPorCategoria(
  articulos,
  "Videojuego"
);
console.log("\nVideojuegos disponibles:");
videojuegosDisponibles.forEach((artículo) =>
  console.log(`- ${artículo.nombre}`)
);