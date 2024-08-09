const formulario = document.getElementById('form')
const campo = document.getElementById('username');

function validarFormulario(){
    formulario.addEventListener('submit', (event) => {
        if(campo.value ===''){
            alert('El campo está vacio')
        } else{
            alert(`Estimado ${campo.value} El formulario ha sido enviado`)
        }
    })
};

validarFormulario()