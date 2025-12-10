const datos = new URLSearchParams(window.location.search);
const acceso = datos.get("ok");
if (acceso !== "1") {
    window.location.href = "../index.html";
}
const boton_salir = document.getElementById("boton_cerrar");
boton_salir.addEventListener("click", function () {
    window.location.href = "../index.html";
});