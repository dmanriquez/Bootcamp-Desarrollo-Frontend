// Ejercicio 1

class Persona {
  nombre: string;
  edad: number;
  rut: string;
  
  constructor(
    nombre: string,
    edad: number,
    rut: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
  }
  
  saludar(){
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mi rut es ${this.rut}`);
  }
}

console.log(new Persona("Juan", 25, "12.134.567-8").saludar())


// Ejercicio 2

// Definir la clase
class Circulo {
  radio: number;
  perimetro: number;
  
  // Constructor
  constructor(radio: number) {
    this.radio = radio;
    this.perimetro = 2 * Math.PI * radio;
  }
  // getArea :: Circulo -> Float
  getArea() {
    return Math.PI * this.radio ** 2;
  }
  // Metodo para calcular el perimetro
  getPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}

// Instanciar la clase Circulo
let circuloInstance = new Circulo(5);

// Calcular e imprimir el área y el perímetro
console.log(`Área: ${circuloInstance.getArea()}`);
console.log(`Perímetro: ${circuloInstance.getPerimetro()}`);



// Ejercicio 3
// Clase CuentaBancaria :: [num] -> saldo :: [num]
// CuentaBancaria :: [num, num] -> CuentaBancaria
// getDepositar :: -> num
// getRetirar :: -> num

class CuentaBancaria{
  saldo: number;
  tope: number = 15000000;
  
  constructor(saldo: number){
    this.saldo = saldo;
  }
  
  getDepositar(deposito: number){
    if (this.saldo + deposito <= this.tope){
      this.saldo += deposito;
      console.log(`Se ha depositado ${deposito}, y el saldo actual es de: ${this.saldo}`); 
    }
    else{
      console.log("El monto supera el tope de la cuenta");
    }
    return this.saldo 
  }
  
  getRetirar(retiro: number){
    if (this.saldo >= retiro){
      this.saldo -= retiro;
      console.log(`Se ha retirado ${retiro} y el saldo actual es ${this.saldo}`);
    }
    else{
      console.log("No hay saldo suficiente");
    }
    return this.saldo
  }
}

const cuenta = new CuentaBancaria(900);
cuenta.getDepositar(1000000);
cuenta.getRetirar(1000);


// Ejercicio 4
