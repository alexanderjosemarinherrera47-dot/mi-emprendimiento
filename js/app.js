const PRECIO_KILO = 7000;

function calcularDesdeKilos() {
  const kilos = parseFloat(document.getElementById("calc-kilos").value) || 0;
  const total = kilos * PRECIO_KILO;
  document.getElementById("res-kilos").textContent = kilos;
  document.getElementById("res-total").textContent = total.toLocaleString("es-CO");
  document.getElementById("calc-presupuesto").value = total > 0 ? total : "";
}

function calcularDesdePresupuesto() {
  const presupuesto = parseFloat(document.getElementById("calc-presupuesto").value) || 0;
  const kilos = Math.floor(presupuesto / PRECIO_KILO);
  const total = kilos * PRECIO_KILO;
  document.getElementById("calc-kilos").value = kilos;
  document.getElementById("res-kilos").textContent = kilos;
  document.getElementById("res-total").textContent = total.toLocaleString("es-CO");
}

document.addEventListener("DOMContentLoaded", () => {
  const formPedido = document.getElementById("form-pedido");
  if (formPedido) {
    formPedido.addEventListener("submit", (e) => {
      e.preventDefault();
      const kilos = parseInt(document.getElementById("res-kilos").textContent) || 1;
      const nuevoPedido = {
        id: Date.now(),
        cliente: document.getElementById("ped-nombre").value,
        telefono: document.getElementById("ped-telefono").value,
        direccion: document.getElementById("ped-direccion").value,
        pago: document.getElementById("ped-pago").value,
        kilos: kilos,
        total: kilos * PRECIO_KILO,
        estado: "Pendiente"
      };

      const pedidos = JSON.parse(localStorage.getItem("pedidos_armonia")) || [];
      pedidos.push(nuevoPedido);
      localStorage.setItem("pedidos_armonia", JSON.stringify(pedidos));

      alert(`¡Pedido registrado con éxito!\nTotal: $${nuevoPedido.total.toLocaleString("es-CO")} COP (${kilos} kg).`);
      formPedido.reset();
      document.getElementById("calc-kilos").value = 1;
      calcularDesdeKilos();
    });
  }
});