const form = document.getElementById('formulario');

function validarFormulario() {
    const nombre = document.getElementById('username');
    const contrasena = document.getElementById('password');
    
    form.addEventListener('submit', function(event) {
        if (!nombre.value.trim() || !contrasena.value.trim()) {
            alert('Por favor, complete todos los campos');
            event.preventDefault();
        } else {
            console.log('Username:', nombre.value);
            console.log('Password:', contrasena.value);
            alert('Formulario enviado con éxito');
        }
    })
}

validarFormulario();

// document.querySelector('form').addEventListener('submit', function(event) {
//         // funcion de validación
//         const username = event.target.username.value.trim();
//         const password = event.target.password.value.trim();
        
//         if (!username || !password) {
//             alert('Por favor, complete todos los campos');
//             event.preventDefault();
//         } else {
//             console.log('Username:', username);
//             console.log('Password:', password);
//             alert('Formulario enviado con éxito');
//         }
//     });