// Obtener referencia al botón "Guardar"
var guardarBtn = document.querySelector('.formulario__btn');

// Agregar evento click al botón "Guardar"
guardarBtn.addEventListener('click', function() {
  // Validar que al menos una opción esté seleccionada en cada lista
  var listas = document.querySelectorAll('.Lista1, .Lista2, .Lista3, .Lista4');
  var algunaOpcionSeleccionada = true;

  listas.forEach(function(lista) {
    var opcionesSeleccionadas = lista.querySelectorAll('input[type="checkbox"]:checked');
    if (opcionesSeleccionadas.length === 0) {
      algunaOpcionSeleccionada = false;
    }
  });

  // Mostrar mensaje de error si alguna lista no tiene opciones seleccionadas
  if (!algunaOpcionSeleccionada) {
    Swal.fire('Debes seleccionar al menos una opción de cada lista');
    return; // Detener la ejecución si hay error
  }

  // Obtener todas las opciones seleccionadas
  var opcionesSeleccionadas = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function(checkbox) {
    opcionesSeleccionadas.push(checkbox.nextElementSibling.textContent);
  });

  // Crear un objeto JSON con la información seleccionada
  var proyectoSeleccionado = "Proyecto A"; // Reemplaza esto con la lógica para obtener el proyecto seleccionado
  var json = {
    proyecto: proyectoSeleccionado,
    opciones: opcionesSeleccionadas
  };

  // Convertir el objeto JSON a una cadena de texto
  var jsonString = JSON.stringify(json);

  // Mostrar mensaje de éxito al usuario
  Swal.fire('¡Guardado con éxito!');

  // Limpiar las opciones seleccionadas
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });

  // Enviar el JSON al servidor o almacenarlo en el almacenamiento local, según tus necesidades
  // Aquí puedes agregar la lógica para enviar o almacenar el JSON

  // Esperar 2 segundos y luego redirigir al usuario a la pantalla principal
  setTimeout(function() {
    window.close();
  }, 3000); // 36000 milisegundos = 3 segundos
});

document.getElementById("btnCerrarSesion").addEventListener("click", function() {
  window.location.href = "../index.html";
});