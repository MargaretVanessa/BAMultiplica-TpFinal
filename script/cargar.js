document.getElementById("btnCargar").addEventListener("click", function () {
    window.open("../page/cargaVideo.html");
});

document.getElementById("btnCerrarSesion").addEventListener("click", function () {
    window.location.href = "../index.html";
});

document.getElementById("btnResultado").addEventListener("click", function () {
    window.open("../page/popupResultados.html", "popup", "width=800,height=500");
});
