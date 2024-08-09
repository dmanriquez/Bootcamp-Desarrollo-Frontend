// acceso :: (string, int) -> bool
// Recibe un tipo de credencial y un horario en formato entero y retorna un booleano indicando si la persona puede entrar o no.
// Credencial ["Estandar", "Plata", "Oro, Platino"]
// Horario [1000, 1030, 1500, 2000]
// Ejemplo, acceso(“estandar”, 1500) retorna False, pero acceso(“estandar”, 1030)retorna True.

// Generamos la funcion
function acceso(credencial: string, horario: number): boolean {
  // condición de acceso para credencial estandar
  if (credencial === "estandar" && horario >= 1000 && horario <= 1200) {
    return true;
  // condición de acceso para credencial plata
  } else if (credencial === "plata" && horario >= 800 && horario <= 1500) {
    return true;
  // condición de acceso para credencial oro
  } else if (credencial === "oro" && horario >= 800 && horario <= 1800) {
    return true;
  // condición de acceso para credencial platino
  } else if (credencial === "platino") {
    return true;
  // condición de acceso para credencial invalida
  } else {
    return false;
  }
}

// Testing
console.assert(acceso("estandar", 1100));

// Funcion para convertir el la hora al formato requerido
// aHHMM :: number -> number
// Recibe un horario en formato HHMM y retorna un horario en formato HH:MM
// Ejemplo: aHHMM(1523) == "15:23" 

// generamos la funcion
function aHHMM(horario: number): string {
  // Transformamos el horario a HH:MM
  return horario.toString().slice(0, 2) + ":" + horario.toString().slice(2);
}

// Testing 
console.assert(aHHMM(1523) == "15:23")

export { acceso, aHHMM };