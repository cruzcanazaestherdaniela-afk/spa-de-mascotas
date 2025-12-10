const msgDueño = document.getElementById("mensaje-dueño");
const msgMascota = document.getElementById("mensaje-mascota");

document.getElementById("formulario-dueño").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("dueño-nombre").value;
    const telefono = document.getElementById("dueño-telefono").value;
    const correo = document.getElementById("dueño-correo").value;

    msgDueño.textContent = "Datos del dueño registrados.";
});

document.getElementById("formulario-mascota").addEventListener("submit", function(e){
    e.preventDefault();

    const nomMascota = document.getElementById("mascota-nombre").value;
    const especie = document.getElementById("mascota-especie").value;
    const raza = document.getElementById("mascota-raza").value;

    msgMascota.textContent = "Datos de la mascota registrados.";
});