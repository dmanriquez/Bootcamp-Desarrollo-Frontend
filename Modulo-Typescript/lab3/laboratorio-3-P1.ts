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
// let textoInicial = "Un arcoíris invernal viene aproximandose";
// let caracterDeReemplazo = "-";
// let textoSalida = exulsarCarater(textoInicial, caracterDeReemplazo);
// console.assert( textoSalida == "Un arco-r-s -nvernal v-ene aprox-mandose" );
// console.log(textoSalida);

// Ejercicio 4
// Ejemplo: Nombre - Artistas separados por coma - Álbum - Duración

// Imprimir Canciones para Programar - Creada por Mr.X
// Telephone - Lady Gaga, Beyoncé - The Fame Monster (3:40)

class Cancion {
  nombre: string;
  artistas: string[];
  album: string;
  duracion: number;

  constructor(
    nombre: string,
    artistas: string[],
    album: string,
    duracion: number
  ) {
    this.nombre = nombre;
    this.artistas = artistas;
    this.album = album;
    this.duracion = duracion;
  }

  getNombre(): string {
    return this.nombre;
  }

  getArtista(): string {
    let artistasString = "";
    for (let i = 0; i < this.artistas.length; i++) {
      artistasString += this.artistas[i];
      if (i < this.artistas.length - 1) {
        artistasString += ", ";
      }
    }
    return artistasString;
  }

  getAlbum(): string {
    return this.album;
  }

  getDuracion(): string {
    let min: number = Math.floor(this.duracion / 60);
    let seg: number = this.duracion % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  }

  participaArtista(nombreArtista: string): boolean {
    return this.artistas.includes(nombreArtista);
  }

  compararDuracion(otraCancion: Cancion): number {
    if (this.duracion > otraCancion.duracion) {
      return 1;
    } else if (this.duracion < otraCancion.duracion) {
      return -1;
    } else {
      return 0;
    }
  }
}

let cancion: Cancion = new Cancion( "Telephone", ["Lady Gaga", "Beyonce", "Drake"], "The Fame Monster", 120);
console.log( `${cancion.getNombre()} - ${cancion.getArtista()} ${cancion.getAlbum()} ${cancion.getDuracion()}`);
console.assert(cancion.participaArtista("Eminem") == false);

let cancionUno = new Cancion("Cancion 1", ["Artista 1"], "Album 1", 15);
let cancionDos = new Cancion("Cancion 2", ["Artista 2"], "Album 2", 10);
console.assert(cancionUno.compararDuracion(cancionDos) == 1);

let elResultado = cancionUno.compararDuracion(cancionDos);
console.log(elResultado);

// Ejercicio 4
// Ejemplo: Nombre - Artistas separados por coma - Álbum - Duración

// Imprimir Canciones para Programar - Creada por Mr.X
// Telephone - Lady Gaga, Beyoncé - The Fame Monster (3:40)
class Playlist {
  nombre: string;
  creador: string;
  canciones: Cancion[];

  constructor(nombre: string, creador: string, canciones: Cancion[]) {
    this.nombre = nombre;
    this.creador = creador;
    this.canciones = canciones;
  }
  // metodo :: Playlist -> String
  // Ejemplo: Imprimir Canciones para Programar - Creada por Mr.X
  // Telephone - Lady Gaga, Beyoncé - The Fame Monster (3:40)
  mostrarListadoCanciones() {
    console.log(`Canciones para programar  - Creada por ${this.creador}\n`);
    for (let i = 0; i < this.canciones.length; i++) {
      let cancion = this.canciones[i];
      console.log(
        `${
          i + 1
        }. ${cancion.getNombre()} - ${cancion.getArtista()} ${cancion.getAlbum()} ${cancion.getDuracion()}`
      );
    }
  }
  // metodo :: canciones -> number
  // Ejemplo: (240)
  getDuracionTotal(): number {
    let duracionTotal = 0;
    for (let cancion of this.canciones) {
      duracionTotal += cancion.duracion;
    }
    return duracionTotal;
  }

  // metodo :: canciones -> String
  // Ejemplo: (3:40)
  getDuracionTotalFormateada(): string {
    let min: number = Math.floor(this.getDuracionTotal() / 60);
    let seg: number = this.getDuracionTotal() % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  }
  // metodo :: canciones[] -> canciones[]
  // Ejemplo: (3:40)
  agregarCancion(nuevaCancion: Cancion): void {
    let existeCancion = false;
    for (let cancion of this.canciones) {
      if (cancion.getNombre() == nuevaCancion.getNombre() && cancion.getArtista() == nuevaCancion.getArtista()) {
        existeCancion = true;
        //console.log("Canción ya existe");
        break;
      }
    }
    if (!existeCancion) {
      //console.log("Canción agregada");
      this.canciones.push(nuevaCancion);
    }
  }

  obtenerCancionMasLarga(): Cancion | null {
    let masLarga: Cancion | null = null;
    for (let cancion of this.canciones) {
      if (masLarga === null || cancion.duracion > masLarga.duracion) {
        masLarga = cancion;
      }
    }
    return masLarga;
  }

  // Generamos metodo estatico para juntar dos playlists
  static juntarPlaylists(nombre: string, playlistUno: Playlist, playlistDos: Playlist): Playlist {
    // Se crea el creador de la nueva playlist a partir de los creadores de las dos playlists
    let creadorMerge = playlistUno.creador + " y " + playlistDos.creador;
    // Juntamos las canciones de las dos playlists
    let cancionesMerge = [ ...playlistUno.canciones, ...playlistDos.canciones ];
    // Se crea una variable temporal para no agregar canciones repetidas
    let cancionesMergeNoRepetidas = [];
    // Se crea una variable temporal para no agregar nombres de canciones repetidas
    let nombreCanciones = [];
    // Se recorren las canciones de la nueva playlist
    for(let i = 0; i < cancionesMerge.length; i++){
      // Se guarda un string que contiene la cancion y el nombre de los artistas
      if(nombreCanciones.indexOf(cancionesMerge[i].nombre + cancionesMerge[i].artistas) == -1){
        // Se agrega la clase cancion a la nueva lista
        cancionesMergeNoRepetidas.push(cancionesMerge[i])
        // Se agrega el nombre de la cancion a la nueva lista temporal que contendra los nombres de las canciones
        nombreCanciones.push(cancionesMerge[i].nombre + cancionesMerge[i].artistas);
      }
    }
    // Se crea la nueva playlist
    let playlistMerge = new Playlist(nombre, creadorMerge, cancionesMergeNoRepetidas);
    // Se retorna la nueva playlist
    return playlistMerge;
  }
}

// Test
// Playlist Uno
let cancionesUno: Cancion[] = [
  new Cancion("Warriors", ["Imagine Dragons"], "Smoke + Mirrors", 151),
  new Cancion("Mr. Guantecillo",["Hermanos Computadores de Paine"],"Ratoncitos",141),
  new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225),
];
let playlistUno = new Playlist("Canciones para Programar", "Mr.X", cancionesUno);
// Se agrega canción existente
let nuevaCancionUno = new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225);
playlistUno.agregarCancion(nuevaCancionUno);
// Se agrega canción NO existente
let nuevaCancionDos = new Cancion("Old Town Road", ["Lil Nas X", "Billy Ray Cyrus"], "7 EP", 157);
playlistUno.agregarCancion(nuevaCancionDos);
// Se obtiene cancion mas larga
let laMasLarga = playlistUno.obtenerCancionMasLarga();

playlistUno.mostrarListadoCanciones();

console.log(`\n`);
console.log(`La canción más larga es: ${laMasLarga?.getNombre()} - ${laMasLarga?.getArtista()} (${laMasLarga?.getDuracion()})\n`);

// Playlist Dos
let cancionesDos: Cancion[] = [
  new Cancion("Blinding Lights", ["The Weeknd"], "After Hours", 200),
  new Cancion("Take On Me", ["a-ha"], "Hunting High and Low", 227),
  new Cancion("Shape of You", ["Ed Sheeran"], "Divide", 233),
  new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225),
  new Cancion("Digital Love", ["Daft Punketa"], "Discovery", 225),
];

let playlistDos = new Playlist("Canciones para Programar", "Mr.Wagyu", cancionesDos);
playlistDos.mostrarListadoCanciones();

console.log(`\n`);
let newPlaylist: Playlist = Playlist.juntarPlaylists("Nueva Playlist", playlistUno, playlistDos);
newPlaylist.mostrarListadoCanciones();

export { Cancion, Playlist };