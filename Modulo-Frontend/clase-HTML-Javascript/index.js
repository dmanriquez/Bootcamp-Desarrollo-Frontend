const formulario = document.getElementById('form');

function validarFormulario(){
    const campo = document.getElementById('username');
    
    formulario.addEventListener('submit', (event) => {
        if(campo.value.trim() === ''){
            alert('El campo esta vacio')
            event.preventDefault();
        } else{
            localStorage.setItem("Nombre", campo.value);
            sessionStorage.setItem("Nombre", campo.value);
            localStorage.removeItem("dicc_parlamentarios");
            console.log(`Estimado ${campo.value}, el formulario ha sido enviado`)
            event.preventDefault();
        }
        
        if (localStorage.getItem("usuario") !== null) {
            console.log("El usuario es: ", localStorage.getItem("usuario"));
        } else {
            console.log("No hay usuario");
        }
        
        let miUsuario = {
            Nombre: "David",
            Apellido: "Manriquez",
            Edad: 45,
        };
        
        localStorage.setItem("usuario", JSON.stringify(miUsuario));
    })
}

validarFormulario()

// Mapas y LocalStorage
let miMapa = new Map();

// Estructura para guerdar valores
miMapa.set("clave1", "valor1");
miMapa.set("clave2", "valor2");
miMapa.set("clave3", "valor3");
miMapa.set("clave4", "valor4");

// Pregunta si existe una elemento. Devuelve true o false.
miMapa.has("clave1");

// Se obtiene con un .get
miMapa.get("clave1");

console.log(miMapa)

// La llave DEBE ser de tipo string
localStorage.setItem("usuario", "David Manriquez");
sessionStorage.setItem("usuario", "Mankekez");
localStorage.getItem("clave1");
localStorage.removeItem("clave1")

document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.getElementById("form");
    
    formulario.addEventListener("submit", validarFormulario)
    
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then(infoJSON => {
        console.log("El servicio web ha sido cargado con éxito");
        let contenedor = document.getElementById("contenedor");
        
        // Tomar solo los primeros 10 elementos
        let primerosDiez = infoJSON.slice(0, 10);
        
        primerosDiez.forEach((photos) => {
            let subContenedor = document.createElement("div");
            let parrafoTitulo = document.createElement("p");
            let parrafoId = document.createElement("p");
            let imagen = document.createElement("img");
            
            parrafoTitulo.textContent = photos.title;
            parrafoId.textContent = photos.id;
            
            imagen.src = photos.thumbnailUrl;
            imagen.height = 100;
            imagen.width = 100;
            
            subContenedor.appendChild(parrafoTitulo);
            subContenedor.appendChild(parrafoId);
            
            subContenedor.appendChild(imagen);
            contenedor.appendChild(subContenedor);
        });
    })
});