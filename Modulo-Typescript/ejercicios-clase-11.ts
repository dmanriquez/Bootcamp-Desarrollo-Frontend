// Definir clase Personaje
// Atributos del personaje: nombre, puntos de vida, mochila

class Personaje {
  nombre: string;
  vida: number;
  mochila: (string | number)[];

  constructor(nombre: string, vida: number) {
    this.nombre = nombre;
    this.vida = vida;
    this.mochila = [];
  }

  getNombre() : string {
    return this.nombre;
  }

  getVida(): number {
    return this.vida;
  }

  getMochila(): ( string | number )[] {
    return this.mochila;
  }

  agregarArmaAMochila(arma: Arma): void {
    this.mochila.push(arma.getNombre(), arma.getAtaque(), arma.getDefensa(), arma.getUso());
  }

  atacar(personaje: Personaje): void {
    personaje.vida -= this.vida;
  }

  mostrarEstadisticas(): void {
    console.log(`Nombre: ${this.getNombre()}`);
    console.log(`Vida: ${this.getVida()}`);
    console.log(`Mochila: ${this.getMochila()}`);
  }
}

// Definir clase Arma
// Atributos del arma: nombre, puntos de ataque, puntos de defensa, uso
class Arma {
  nombre: string;
  ataque: number;
  defensa: number;
  uso: number;

  constructor(nombre: string, ataque: number, defensa: number, uso: number) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.defensa = defensa;
    this.uso = uso;
  }

  getNombre(): string {
    return this.nombre;
  }

  getAtaque(): number {
    return this.ataque;
  }

  getDefensa(): number {
    return this.defensa;
  }

  getUso(): number {
    return this.uso;
  }

  atacar(personaje: Personaje): void {
    personaje.vida -= this.ataque;
  }

  mostrarEstadisticas(): void {
    console.log(`Nombre: ${this.getNombre()}`);
    console.log(`Ataque: ${this.getAtaque()}`);
    console.log(`Defensa: ${this.getDefensa()}`);
    console.log(`Uso: ${this.getUso()}`);
  }
}

// Crear armas
//new Arma(Nombre, Ataque, Defensa, Usos)
let espada: Arma = new Arma("Espada", 50, 20, 10);
let escudo: Arma = new Arma("Escudo", 10, 50, 15);
let arco: Arma = new Arma("Arco", 40, 10, 8);
let hacha: Arma = new Arma("Hacha", 60, 15, 5);

// Crear personajes
//new Personaje(Nombre, Puntos de Salud)
let heroe: Personaje = new Personaje("Héroe", 100);
let villano: Personaje = new Personaje("Villano", 120);

// Agregar armas a la mochila de los personajes
heroe.agregarArmaAMochila(espada);
heroe.agregarArmaAMochila(escudo);
villano.agregarArmaAMochila(arco);
villano.agregarArmaAMochila(hacha);

//¡Comienza la pelea!
heroe.atacar(villano); //Villano recibe 35 puntos de daño (50 - 15)
villano.mostrarEstadisticas() //Villano con 85 puntos de salud (...)

console.log(heroe.getMochila());