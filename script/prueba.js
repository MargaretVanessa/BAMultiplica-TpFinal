var myHeaders = new Headers();
       myHeaders.append("Accept", "application/json");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders
      };
      fetch(`https://team-2-back.onrender.com/users/check-email?email=${username}`, requestOptions)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
         throw new Error("verifica tu user")
          }
        })
        .then(result => {
          if (rol.checked && result.rol === 'student') {
            window.location.href ="./pages/carga-video.html"
          } else if(!rol.checked && result.rol === 'teacher') {
            window.location.href ="./pages/inicio-docente.html"
          } else {
        throw new Error("verifica tu user")
          }})



        
  if (e.target === btnEstudiante && correoValue !== "m@gmail.com") {
    Swal.fire('Lo sentimos, el correo electrónico ingresado no corresponde a un perfil de Estudiante.');
    return;
  }

  if (e.target === btnDocente && correoValue !== "s@gmail.com") {
    Swal.fire('Lo sentimos, el correo electrónico ingresado no corresponde a un perfil de Docente.');
    return;
  }

  // Redireccionar a la página correspondiente
  if (e.target === btnDocente) {
    window.location.href = 'page/perfilDocente.html';
  } else if (e.target === btnEstudiante) {
    window.location.href = 'page/proyectos.html';
  }