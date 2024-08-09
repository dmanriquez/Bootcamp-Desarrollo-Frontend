//Definimos los valores (a mano por ahora)
let tangananica: number = 100;
let tanganana: number = 200;

//Calculamos los porcentaje
let total: number = tangananica + tanganana;
let porcentajeTangananica: number = (tangananica / total) * 100;
let porcentajeTanganana: number = 100 - porcentajeTangananica;

// Mostramos los resultados
console.log("Tangananica: " + porcentajeTangananica + "%");
console.log(`Tanganana: ${porcentajeTanganana}%`);
