// Obtener todos los elementos de proyecto
const proyectos = document.querySelectorAll('.box');

// Función para mostrar solo el proyecto seleccionado y ocultar el resto
function mostrarProyectoSeleccionado(proyectoSeleccionado) {
    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i] === proyectoSeleccionado) {
            proyectos[i].style.display = 'flex';
        } else {
            proyectos[i].style.display = 'none';
        }
    }
}

// filtro por proyecto
document.getElementById("filtrarProyectos").addEventListener("change", filtrarProyectos);
function filtrarProyectos() {
    var valorSeleccionado = document.getElementById("filtrarProyectos").value;

    for (var i = 0; i < proyectos.length; i++) {
        var proyecto = proyectos[i];

        if (valorSeleccionado === "todos" || valorSeleccionado === proyecto.getAttribute("data-proyecto")) {
            proyecto.style.display = "flex";
        } else {
            proyecto.style.display = "none";
        }
    }
}

// Obtener todos los botones de evaluación
const botonesEvaluacion = document.querySelectorAll('.formulario__btn');

// Agregar el evento de clic a cada botón de evaluación
botonesEvaluacion.forEach((boton) => {
    boton.addEventListener('click', mostrarPopupEvaluacion);
});

// Función para mostrar el popup de evaluación
function mostrarPopupEvaluacion(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón

    const proyectoSeleccionado = this.parentNode;
    // Obtener el elemento contenedor del botón evaluación

    // Mostrar solo el proyecto seleccionado y ocultar el resto
    mostrarProyectoSeleccionado(proyectoSeleccionado);

    // Función para abrir la ventana emergente
    window.open("../page/popupEvaluacion.html", "popup", "width=800,height=450");
}

document.getElementById("btnCerrarSesion").addEventListener("click", function () {
    window.location.href = "../index.html";
});
