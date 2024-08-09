// Importar la clase Cancion
import { Cancion } from "./P3";

// Ejercicio 4
// Ejemplo: Nombre - Artistas separados por coma - Álbum - Duración
// Imprimir Canciones para Programar - Creada por Mr.X
// Ejemplo: Telephone - Lady Gaga, Beyoncé - The Fame Monster (3:40)

class Playlist {
  nombre: string;
  creador: string[];
  // Se deja como atributo opcional (Prueba.ts no lo pide en la instancia)
  canciones?: Cancion[];

  constructor(nombre: string, creador: string[], canciones?: Cancion[]) {
    this.nombre = nombre;
    this.creador = creador;
    this.canciones = canciones;
    // Inicializamos la variable como una lista vacia
    if (this.canciones == undefined) {
      this.canciones = [];
    }
  }
  // getCreadores :: -> string[]
  // Ejemplo: Canciones para Programar - Creada por Mr.X
  getCreadores(): string {
    let creadores = "";
    for (let i = 0; i < this.creador.length; i++) {
      creadores += this.creador[i];
      if (i < this.creador.length - 1) {
        creadores += ", ";
      }
    }
    return creadores;
  }

  // mostrarPlaylist :: -> void
  // Ejemplo: Imprimir Canciones para Programar - Creada por Mr.X
  // Telephone - Lady Gaga, BeyLineStyle - The Fame Monster (3:40)
  mostrarPlaylist() {
    console.log(
      `Canciones para programar  - Creada por ${this.getCreadores()}\n`
    );
    for (let i = 0; i < this.canciones.length; i++) {
      let cancion = this.canciones[i];
      console.log(`${i + 1}. ${cancion.getNombre()} - ${cancion.getArtista()} ${cancion.getAlbum()} ${cancion.getDuracion()}`);
    }
  }
  // getDuracionTotal :: canciones[] -> number
  // Ejemplo: (240)
  getDuracionTotal(): number {
    let duracionTotal = 0;
    for (let cancion of this.canciones) {
      duracionTotal += cancion.duracion;
    }
    return duracionTotal;
  }

  // getDuracionTotalFormateada :: -> String
  // Ejemplo: (3:40)
  getDuracionTotalFormateada(): string {
    let min: number = Math.floor(this.getDuracionTotal() / 60);
    let seg: number = this.getDuracionTotal() % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  }

  // agregarCancion :: canciones[] -> []
  // Ejemplo: [{ nombre: "Telephone", artista: "Lady Gaga, BeyLineStyle", album: "The Fame Monster", duracion: 240 }]
  agregarCancion(nuevaCancion: Cancion): void {
    let existeCancion = false;
    for (let cancion of this.canciones) {
      if (
        cancion.getNombre() == nuevaCancion.getNombre() &&
        cancion.getArtista() == nuevaCancion.getArtista()
      ) {
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

  // obtenerCancionMasLarga :: canciones[] -> Cancion | null
  // Ejemplo: [{ nombre: "Telephone", artista: "Lady Gaga, BeyLineStyle", album: "The Fame Monster", duracion: 240 }]
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
  static juntarPlaylists( nombre: string, playlistUno: Playlist, playlistDos: Playlist ): Playlist {
    // Se crea el creador de la nueva playlist a partir de los creadores de las dos playlists
    let creadorMerge: string[] = playlistUno.creador.concat(
      playlistDos.creador
    );
    // Juntamos las canciones de las dos playlists
    let cancionesMerge = [...playlistUno.canciones, ...playlistDos.canciones];
    // Se crea una variable temporal para no agregar canciones repetidas
    let cancionesMergeNoRepetidas = [];
    // Se crea una variable temporal para no agregar nombres de canciones repetidas
    let nombreCanciones = [];
    // Se recorren las canciones de la nueva playlist
    for (let i = 0; i < cancionesMerge.length; i++) {
      // Se guarda un string que contiene la cancion y el nombre de los artistas
      if (
        nombreCanciones.indexOf(
          cancionesMerge[i].nombre + cancionesMerge[i].artistas
        ) == -1
      ) {
        // Se agrega la clase cancion a la nueva lista
        cancionesMergeNoRepetidas.push(cancionesMerge[i]);
        // Se agrega el nombre de la cancion a la nueva lista temporal que contendra los nombres de las canciones
        nombreCanciones.push(
          cancionesMerge[i].nombre + cancionesMerge[i].artistas
        );
      }
    }
    // Se crea la nueva playlist
    let playlistMerge = new Playlist( nombre, creadorMerge, cancionesMergeNoRepetidas);
    // Se retorna la nueva playlist
    return playlistMerge;
  }
}

// Test
// Playlist Uno
let cancionesUno: Cancion[] = [
  new Cancion("Warriors", ["Imagine Dragons"], "Smoke + Mirrors", 151),
  new Cancion("Mr. Guantecillo", ["Hermanos Computadores de Paine"], "Ratoncitos", 141),
  new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225),
];
let playlistUno = new Playlist( "Canciones para Programar", ["Mr.X"], cancionesUno);
// Se agrega canción existente
let nuevaCancionUno = new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225);
playlistUno.agregarCancion(nuevaCancionUno);
// Se agrega canción NO existente
let nuevaCancionDos = new Cancion("Old Town Road", ["Lil Nas X", "Billy Ray Cyrus"], "7 EP", 157);
playlistUno.agregarCancion(nuevaCancionDos);
playlistUno.mostrarPlaylist();
console.log(`\n`);

// Se obtiene cancion mas larga
let laMasLarga = playlistUno.obtenerCancionMasLarga();
console.log( `La canción más larga es: ${laMasLarga?.getNombre()} - ${laMasLarga?.getArtista()} (${laMasLarga?.getDuracion()})\n`);
console.assert(`La canción más larga es: ${laMasLarga?.getNombre()} - ${laMasLarga?.getArtista()} (${laMasLarga?.getDuracion()})\n` === `La canción más larga es: Digital Love - Daft Punk (${225})\n`);

// Playlist Dos
let cancionesDos: Cancion[] = [
  new Cancion("Blinding Lights", ["The Weeknd"], "After Hours", 200),
  new Cancion("Take On Me", ["a-ha"], "Hunting High and Low", 227),
  new Cancion("Shape of You", ["Ed Sheeran"], "Divide", 233),
  new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225),
  new Cancion("Digital Love", ["Daft Punketa"], "Discovery", 225),
];

let playlistDos = new Playlist("Canciones para Programar", ["Mr.Wagyu"], cancionesDos);
playlistDos.mostrarPlaylist();

console.log(`\n`);
let newPlaylist: Playlist = Playlist.juntarPlaylists( "Nueva Playlist", playlistUno, playlistDos);
newPlaylist.mostrarPlaylist();

export { Playlist };
