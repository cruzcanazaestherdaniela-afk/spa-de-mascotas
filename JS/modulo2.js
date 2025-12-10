const formulario = document.getElementById("formulario-agenda");
const msg = document.getElementById("mensaje-agenda");
const lista = document.getElementById("lista-agenda");

let servicios = [];

function actualizarLista() {
    lista.innerHTML = "";
    if (servicios.length === 0) {
        lista.innerHTML = "<li>No hay servicios agendados.</li>";
        return;
    }

    servicios.forEach(function(serv) {
        const item = document.createElement("li");
        item.textContent = `${serv.fecha} ${serv.hora} - Mascota: ${serv.mascota} - Servicio: ${serv.tipo}`;
        lista.appendChild(item);
    });
}

actualizarLista();

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const fecha = document.getElementById("agenda-fecha").value;
    const hora = document.getElementById("agenda-hora").value;
    const mascota = document.getElementById("agenda-mascota").value;
    const tipo = document.getElementById("agenda-servicio").value;
    const nuevo = {
        fecha: fecha,
        hora: hora,
        mascota: mascota,
        tipo: tipo
    };

    servicios.push(nuevo);
    actualizarLista();
    msg.textContent = "Servicio agendado.";
    formulario.reset();
});