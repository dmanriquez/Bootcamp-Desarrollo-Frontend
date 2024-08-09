// Pregunta 1

let descuentoPorViaje = 0.05; // 5% de descuento
let precioViaje = 730; // Precio actual del pasaje en horario valle
let resto:number ;

 // Imprimir cabecera
console.log("**Precios de Pasajes**");
for (let i = 1; i <= 30; i++) {
  if (i % 5 == 0) {
    precioViaje *= 1 - descuentoPorViaje;
    let precioFormateado = (precioViaje * 100) / 100;
    console.log(`Viaje ${i}: $ ${precioFormateado - precioFormateado%1} ¡Descuento aplicado!`);
  } else {
    console.log(`Viaje ${i}: $ ${precioViaje - precioViaje%1}`);
  }
}



// pregunta 4
let numFilas = 10;

for (let i = 1; i <= numFilas; i++) {
  let patron = "";
  for (let j = 0; j < i; j++) {
    console.log(j);
    patron += "*";
  }
  // console.log(patron);
}
