const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    title: /^[a-zA-ZÀ-ÿ-Z0-9\s\-\.\,\;\:\!\¡\¿\?]+$/, // Letras y espacios, pueden llevar acentos.
    description: /^[a-zA-ZÀ-ÿ-Z0-9\s\-\.\,\;\:\!\¡\¿\?]+$/, // Letras y espacios, pueden llevar acentos.
    lider: /^[a-zA-ZÀ-ÿ\s]{1,99}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    title: false,
    description: false,
    lider: false,
	correo: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "title":
			validarCampo(expresiones.title, e.target, 'title');
		break;

        case "description":
			validarCampo(expresiones.description, e.target, 'description');
		break;

        case "lider":
			validarCampo(expresiones.lider, e.target, 'lider');
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.title && campos.description && campos.lider && campos.correo){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

function agregarVideo() {
	const link = document.getElementById('youtube-link').value;
	
	// Expresión regular para validar enlaces de YouTube
	const regex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
	
	// Si el enlace es válido
	if (regex.test(link)) {
	  // Extraemos el ID del video
	  const videoID = link.split('v=')[1];
	  
	  // Creamos el iframe para insertar el video en la página
	  const iframe = document.createElement('iframe');
	  iframe.setAttribute('src', `https://www.youtube.com/embed/${videoID}`);
	  
	  iframe.setAttribute('frameborder', '0');
	  
	  // Insertamos el iframe en la página
	  const container = document.getElementById('video-container');
	  container.innerHTML = '';
	  container.appendChild(iframe);
	} else {
	  // Si el enlace no es válido, mostramos un mensaje de error
	  Swal.fire('Por favor, ingresa un enlace de YouTube válido');
	}
  }

document.getElementById("btnCerrarSesion").addEventListener("click", function() {
    window.location.href = "../index.html";
});

// Obtén una referencia al botón "buttonAtras"
const btnAtras = document.getElementById('btnAtras');

// Agrega un evento de clic al botón
btnAtras.addEventListener('click', function() {
  // Redirige a la página inicial en la pestaña anterior
  window.history.go(-1);

  // Opcionalmente, cierra la pestaña actual
  window.close();
});