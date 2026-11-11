document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("usuario").value;
      const pass = document.getElementById("password").value;
      
      // Validación básica de credenciales de prueba
      if (user === "admin" && pass === "123456") {
        alert("¡Bienvenido al Panel de Administración!");
        localStorage.setItem("auth", "true");
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña incorrectos. Prueba con: admin / 123456");
      }
    });
  }
});