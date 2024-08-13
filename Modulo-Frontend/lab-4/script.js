document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos la data para los posts desde la API
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((dataJSON) => {
      // Se obtienen los elementos del DOM que se van a utilizar. En este caso el contenedor de los posts, los botones de paginación y el paginador
      const contenedor = document.getElementById("posts");
      const btnAnterior = document.getElementById("anterior");
      const btnSiguiente = document.getElementById("siguiente");
      const paginador = document.getElementById("paginador");
      // Se crea una variable para saber cuantos posts hay en total
      const totalPosts = dataJSON.length;
      // Se crea una variable para mostrar cuantos posts habrán por página
      const postsPorPagina = 5;
      // Se crea un contador para saber en que página se encuentra el usuario
      let contador = 0;
      
      // Función personalizada para calcular el número total de páginas
      function calcularTotalPaginas(totalPosts, postsPorPagina) {
        return totalPosts % postsPorPagina === 0 ? totalPosts / postsPorPagina : totalPosts / postsPorPagina + 1;
      }

      const totalPaginas = calcularTotalPaginas(totalPosts, postsPorPagina);

      // Función para mostrar los posts en el contenedor
      function mostrarPosts() {
        // Calcular el inicio y el fin de los posts a mostrar
        const inicio = contador * postsPorPagina;
        const fin = inicio + postsPorPagina;
        const posts = dataJSON.slice(inicio, fin);
        // Se limpia el contenedor antes de mostrar los posts nuevos. Esto evita que se acumulen los posts
        contenedor.innerHTML = "";

        // Se itera sobre los posts y se crea un item para recibir el título y el cuerpo del post
        posts.forEach((item) => {
          // Se crea un div contenedor
          const card = document.createElement("div");
          // Se le asigna la clase al div creado
          card.classList.add("item");
          // Se crean los elementos h1 y p para el título y el cuerpo del post
          const title = document.createElement("h1");
          const body = document.createElement("p");
          // Se asigna el texto a los elementos creados
          title.textContent = item.title;
          body.textContent = item.body;
          // Se añaden los elementos al div contenedor
          card.appendChild(title);
          card.appendChild(body);
          // Se añade el div contenedor al contenedor principal
          contenedor.appendChild(card);
        });

        // Deshabilitar el botón "anterior" cuando se está en la primera página
        btnAnterior.classList.toggle("disable", contador === 0);

        // Deshabilitar el botón "siguiente" cuando no hay más posts
        if (contador >= totalPaginas - 1) {
          btnSiguiente.classList.add("disable");
        } else {
          btnSiguiente.classList.remove("disable");
        }

        // Mostrar el número de página actual
        paginador.textContent = `Página ${contador + 1} de ${totalPaginas}`;
      }

      // Evento para el botón "anterior"
      btnAnterior.addEventListener("click", () => {
        if (contador > 0) {
          contador--;
          mostrarPosts();
        }
      });

      // Evento para el botón "siguiente"
      btnSiguiente.addEventListener("click", () => {
        if (contador < totalPaginas - 1) {
          contador++;
          mostrarPosts();
        }
      });

      // Llamamos a la función para que muestre los posts en la página
      mostrarPosts();
    })
    .catch((error) => {
      // Mostrar un mensaje de error en caso de que falle la carga del json
      const errorMessage = document.createElement("div");
      errorMessage.classList.add("error");
      errorMessage.textContent =
        "Error al obtener los posts. Por favor, inténtalo de nuevo más tarde.";
      document.body.appendChild(errorMessage);
    });
});
