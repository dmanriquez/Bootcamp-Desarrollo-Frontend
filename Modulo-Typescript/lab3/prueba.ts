import { Cancion } from "./P3"; 
import { Playlist } from "./P4"; 

// Ejemplo de uso
let cancion1 = new Cancion("Warriors", ["Imagine Dragons"], "Smoke + Mirrors", 171);
let cancion2 = new Cancion("Mr. Guantecillo", ["Hermanos Computadores de Paine"], "Ratoncitos", 141);
let cancion3 = new Cancion("Digital Love", ["Daft Punk"], "Discovery", 225);
let cancion4 = new Cancion("Harder, Better, Faster, Stronger", ["Daft Punk"], "Discovery", 224);
let cancion5 = new Cancion("Blinding Lights", ["The Weeknd"], "After Hours", 200);
let cancion6 = new Cancion("Take On Me", ["a-ha"], "Hunting High and Low", 227);
let cancion7 = new Cancion("Shape of You", ["Ed Sheeran"], "Divide", 233);
let cancion8 = new Cancion("Bohemian Rhapsody", ["Queen"], "A Night at the Opera", 354);
let cancion9 = new Cancion("Old Town Road", ["Lil Nas X", "Billy Ray Cyrus"], "7 EP", 157);
let cancion10 = new Cancion("Telephone", ["Lady Gaga", "Beyoncé"], "The Fame Monster", 220);

let playlist1 = new Playlist("Canciones para Programar", ["Mr. X"]);
playlist1.agregarCancion(cancion1);
playlist1.agregarCancion(cancion2);
playlist1.agregarCancion(cancion3);
playlist1.agregarCancion(cancion9);

let playlist2 = new Playlist("Música Electrónica", ["Dj ShaniniMix"]);
playlist2.agregarCancion(cancion4);
playlist2.agregarCancion(cancion5);
playlist2.agregarCancion(cancion6);
playlist1.agregarCancion(cancion9);
playlist2.agregarCancion(cancion10);

let playlist3 = new Playlist("Pop Hits", ["Le MusiPop"]);
playlist3.agregarCancion(cancion7);
playlist3.agregarCancion(cancion8);
playlist1.agregarCancion(cancion9);

let nuevaPlaylist = Playlist.juntarPlaylists("Mix para Programar y Bailar", playlist1, playlist2);
let superPlaylist = Playlist.juntarPlaylists("Super Mix", nuevaPlaylist, playlist3);
superPlaylist.mostrarPlaylist();