let carrito = [];

const listaCarrito = document.getElementById("lista-carrito");
const pagosub = document.getElementById("subtotal");
const pagotot = document.getElementById("total");

function agregarAlCarrito(btn) {
    const productoDiv = btn.parentElement;
    const producto = {
        id: productoDiv.dataset.id,
        nombre: productoDiv.dataset.nombre,
        precio: parseFloat(productoDiv.dataset.precio)
    };

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - Bs. ${item.precio}`;
        listaCarrito.appendChild(li);
    });

    calcularTotales();
}

function calcularTotales() {
    const subtotal = carrito.reduce((suma, item) => suma + item.precio, 0);
    pagosub.textContent = subtotal;
    pagotot.textContent = subtotal;
}