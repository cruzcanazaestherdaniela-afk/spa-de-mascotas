const usuario = "mascotitas";
const contra = "spa123";

let sesion_activa = false;  

const texto_user = document.getElementById("texto_usuario");
const texto_pass = document.getElementById("texto_contraseña");
const boton_ver = document.getElementById("boton_contraseña");
const mensaje = document.getElementById("msg");

document.getElementById("formulario-login").addEventListener("submit", function(e) {
    e.preventDefault();

    const u = texto_user.value.trim();
    const p = texto_pass.value.trim();

    if (u === usuario && p === contra) {
        sesion_activa = true;
        window.location.href = "PAGINA/principal.html?ok=1";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
    }
});

boton_ver.addEventListener("click", function() {
    if (texto_pass.type === "password") {
        texto_pass.type = "text";
        boton_ver.textContent = "Ocultar";
    } else {
        texto_pass.type = "password";
        boton_ver.textContent = "Mostrar";
    }
});