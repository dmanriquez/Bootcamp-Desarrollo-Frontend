// Ejercicio 3
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
  // getNombre :: Cancion -> string
  // Ejemplo: Telephone
  getNombre(): string {
    return this.nombre;
  }

  // getArtista :: Cancion -> string[]
  // Ejemplo: Lady Gaga, BeyLineStyle
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

  // getAlbum :: Cancion -> string
  // Ejemplo: The Fame Monster
  getAlbum(): string {
    return this.album;
  }

  // getDuracion :: Cancion -> string
  // Ejemplo: 3:40
  getDuracion(): string {
    let min: number = Math.floor(this.duracion / 60);
    let seg: number = this.duracion % 60;
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
  }

  // participaArtista :: Cancion -> boolean
  // Ejemplo: true
  participaArtista(nombreArtista: string): boolean {
    return this.artistas.includes(nombreArtista);
  }

  // compararDuracion :: Cancion -> number
  // Ejemplo: 1
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

// Testing
let cancion: Cancion = new Cancion("Telephone", ["Lady Gaga", "Beyonce", "Drake"], "The Fame Monster", 120);
console.log(`${cancion.getNombre()} - ${cancion.getArtista()} ${cancion.getAlbum()} ${cancion.getDuracion()}`);
console.assert(cancion.participaArtista("Eminem") == false);

let cancionUno = new Cancion("Cancion 1", ["Artista 1"], "Album 1", 15);
let cancionDos = new Cancion("Cancion 2", ["Artista 2"], "Album 2", 10);
console.assert(cancionUno.compararDuracion(cancionDos) == 1);

let elResultado = cancionUno.compararDuracion(cancionDos);
console.log(elResultado);

// Exportar la clase Cancion para usarla en archivo P4 (para clase Playlist)
export { Cancion };