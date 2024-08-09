// contrasenaValida :: string -> boolean
// Ejemplo: Devuelve true si el string es "jjbFsuj" o "eoZiugBf&g9"
// De lo contrario, devuelve false

function contrasenaValida(contrasena: string): boolean{
  if (contrasena == "jjbFsuj" || contrasena == "eoZiugBf&g9"){
    return true
  } else {
    return false
  }
}

console.assert(contrasenaValida("jjbFsuj") == true);
console.assert(contrasenaValida("eoZiugBf&g9") == true);
console.assert(contrasenaValida("hola") == false)

console.log(contrasenaValida("eoZiugBf&g")); 

// calcularImpuestos :: number, number -> number
// Si edad > 18 y los ingresos son iguales o mayores que 1000 debe retornar ingresos*40%
// De lo contrario debe retornar 0

function calcularImpuestos(edad: number, ingresos: number): number{
    if(edad => 18 && ingresos == 0 || ingresos >= 1000){
        return ingresos*0.4
    } else{
        return 0
    }
}

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

function bmi(peso: number, altura:number): string{
  let imc = peso / (altura * altura)
  if(imc <= 18.5){
    return "Bajo de peso"
  } else if(imc >= 18.6 && imc <= 24.9){
    return "Normal"
  } else if(imc >= 25 && imc <= 29.9){
    return "Sobrepeso"
  } else if(imc >= 30){
    return "Obeso"
  }
  return "Error"
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"