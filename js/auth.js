document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (sessionStorage.getItem("admin_armonia") === "true") {
    mostrarDashboard();
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass = document.getElementById("admin-pass").value;
      if (pass === "admin2026") {
        sessionStorage.setItem("admin_armonia", "true");
        mostrarDashboard();
      } else {
        alert("Contraseña incorrecta. Intenta con: admin2026");
      }
    });
  }
});

function mostrarDashboard() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
  cargarPedidos();
}

function cerrarSesionAdmin() {
  sessionStorage.removeItem("admin_armonia");
  location.reload();
}

function cargarPedidos() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos_armonia")) || [];
  const tbody = document.getElementById("tabla-pedidos");
  tbody.innerHTML = "";

  let totalKilos = 0;
  let totalIngresos = 0;

  if (pedidos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;">Aún no hay pedidos registrados.</td></tr>`;
  }

  pedidos.forEach((p, index) => {
    totalKilos += p.kilos;
    totalIngresos += p.total;

    tbody.innerHTML += `
      <tr>
        <td>${p.cliente}</td>
        <td>${p.telefono}</td>
        <td>${p.direccion}</td>
        <td>${p.kilos} kg</td>
        <td>$${p.total.toLocaleString("es-CO")}</td>
        <td>${p.pago}</td>
        <td><strong>${p.estado}</strong></td>
        <td>
          ${p.estado === "Pendiente" 
            ? `<button class="btn" style="padding:6px 12px; font-size:0.8rem;" onclick="marcarEntregado(${index})">Entregar</button>` 
            : "✅ Completado"}
        </td>
      </tr>
    `;
  });

  document.getElementById("stat-kilos").textContent = `${totalKilos} kg`;
  document.getElementById("stat-ingresos").textContent = `$${totalIngresos.toLocaleString("es-CO")} COP`;
}

function marcarEntregado(index) {
  const pedidos = JSON.parse(localStorage.getItem("pedidos_armonia")) || [];
  pedidos[index].estado = "Entregado";
  localStorage.setItem("pedidos_armonia", JSON.stringify(pedidos));
  cargarPedidos();
}