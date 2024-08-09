// const operacion = ["sumar", "restar", "multiplicar", "dividir"];

// function calculadora(a: number, b: number, op: string) {
//   if (!operacion.includes(op)) return "Operacion no definida";
//   if (op === "sumar") return a + b;
//   if (op === "restar") return a - b;
//   if (op === "multiplicar") return a * b;
//   if (op === "dividir") {
//     if (b === 0) return "No se puede dividir por cero";
//     return a / b;
//   } 
// }

// console.log(calculadora(5, 0, "multiplicar"));

function calculadora ( a: number, b: number, op: 'sumar' | 'restar' | 'multiplicar' | 'dividir'){
  if (op === 'sumar') return a + b;
  if (op === 'restar') return a - b;
  if (op === 'multiplicar') return a * b;
  if (op === 'dividir'){
    if (b === 0) return 'No se puede dividir por cero';
  } return a / b;
}
console.log(calculadora(5, 8, "sumar"));