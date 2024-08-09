// const zonaRosada = document.getElementById("item");
// const mensaje = document.getElementById("mensaje");

// mensaje.innerText = "Estas fuera de cuadro interior";

// zonaRosada.addEventListener("mouseover", () => {
//     mensaje.innerText = "Estas dentro de cuadro interior";
// });

// zonaRosada.addEventListener("mouseout", () => {
//     mensaje.innerText = "Estas fuera de cuadro interior";
// });

// zonaRosada.addEventListener("dblclick", () => {
//     mensaje.innerText = "Doble click";
// });

// Obtengo el elemento item
const zonaRosada = document.getElementById("item");
// Obtengo el elemento mensaje
const mensaje = document.getElementById("mensaje");
// Función para agregar eventos que recibe dos parametros, el evento y el texto de mensaje
function eventosMouse(evento, texto) {
    // Agrego el evento
    zonaRosada.addEventListener(evento, () => {
        // Agrego el texto
        mensaje.innerText = texto;
    });
}
// Llamo a la función para interactuar con el elemento item
eventosMouse("mouseover", "Estás dentro de cuadro interior");
eventosMouse("mouseout", "Estás fuera de cuadro interior");
eventosMouse("dblclick", "Doble click");
