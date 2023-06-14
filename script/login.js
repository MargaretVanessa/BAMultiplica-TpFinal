const form = document.querySelector('form');
const correo = document.querySelector('#correo');
const btnDocente = document.querySelector('#btn-docente');
const btnEstudiante = document.querySelector('#btn-estudiante');
correo.focus();
form.addEventListener('click', function (e) {
    e.preventDefault();
    correo.focus();
    const correoValue = correo.value;
    // Validar correo electrónico
    if (! isValidEmail(correoValue)) {
        Swal.fire('Por favor, ingrese un correo electrónico válido.')
        return;
    }
    // Validar ingreso por perfil
    if (e.target === btnEstudiante && correoValue !== "estudiante@gmail.com") {
        Swal.fire('Lo sentimos, el correo electrónico ingresado no corresponde a un perfil de Estudiante.');
        return;
    }

    if (e.target === btnDocente && correoValue !== "docente@gmail.com") {
        Swal.fire('Lo sentimos, el correo electrónico ingresado no corresponde a un perfil de Docente.');
        return;
    }

    // Redireccionar a la página correspondiente
    if (e.target === btnDocente) {
        window.location.href = 'page/perfilDocente.html';
    } else if (e.target === btnEstudiante) {
        window.location.href = 'page/proyectos.html';
    }
});

function isValidEmail(email) { 
  // Expresión regular para validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}