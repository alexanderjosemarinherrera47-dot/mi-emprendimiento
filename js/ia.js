// Módulo de IA Agronómica en index.html
function calcularDosisIA() {
  const planta = document.getElementById("ia-planta").value;
  const espacio = parseFloat(document.getElementById("ia-espacio").value);
  const clima = document.getElementById("ia-clima").value;
  const suelo = document.getElementById("ia-suelo").value;
  const caja = document.getElementById("resultado-ia-agronomica");

  if (!espacio || espacio <= 0) {
    alert("Por favor ingresa un tamaño válido en metros cuadrados (m²).");
    return;
  }

  let factor = 0.5; // kg por m² base
  if (suelo === "Seco o desgastado") factor += 0.3;
  if (planta === "Árboles Frutales" || planta === "Hortalizas y Huerta") factor += 0.2;

  const kilosRecomendados = Math.ceil(espacio * factor);
  const costoEstimado = kilosRecomendados * 7000;

  caja.style.display = "block";
  caja.innerHTML = `
    <h4 style="color: #1b4332; margin-bottom: 8px;">🌿 Diagnóstico de IA Agronómica:</h4>
    <p>Para <strong>${espacio} m²</strong> de <strong>${planta}</strong> en clima <strong>${clima}</strong> y suelo <strong>${suelo.toLowerCase()}</strong>:</p>
    <ul style="margin: 10px 0 10px 20px;">
      <li><strong>Dosis ideal recomendada:</strong> ${kilosRecomendados} kg de Armonía Orgánica.</li>
      <li><strong>Inversión estimada ($7.000/kg):</strong> $${costoEstimado.toLocaleString("es-CO")} COP.</li>
      <li><strong>Aplicación:</strong> Mezclar superficialmente con la tierra húmeda cada 30 días.</li>
    </ul>
    <a href="catalogo.html" class="btn" style="padding: 8px 16px; font-size: 0.9rem;">Pedir ${kilosRecomendados} kg ahora</a>
  `;
}

// Chatbot de Atención 24/7
function enviarMensajeIA() {
  const input = document.getElementById("chat-input");
  const logs = document.getElementById("chat-logs");
  const texto = input.value.trim();
  if (!texto) return;

  logs.innerHTML += `<p><strong>Tú:</strong> ${texto}</p>`;
  input.value = "";

  const pregunta = texto.toLowerCase();
  let respuesta = "Nuestro abono orgánico cuesta $7.000 COP por kilo y revitaliza todo tipo de plantas. Puedes calcular tu pedido en la pestaña 'Calculadora y Pedidos' o escribirnos al 314 778 0850.";

  if (pregunta.includes("precio") || pregunta.includes("cuesta") || pregunta.includes("valor") || pregunta.includes("kilo")) {
    respuesta = "El valor oficial es de $7.000 COP por kilogramo. ¡Mientras más kilos pidas, mayor rendimiento tendrá tu cultivo!";
  } else if (pregunta.includes("dosis") || pregunta.includes("cuanto") || pregunta.includes("cantidad")) {
    respuesta = "En promedio recomendamos 500g a 1kg por cada m² de cultivo. Usa nuestro Módulo de IA Agronómica en la página de Inicio para un cálculo exacto.";
  } else if (pregunta.includes("beneficio") || pregunta.includes("sirve") || pregunta.includes("amarilla") || pregunta.includes("crece")) {
    respuesta = "Armonía Orgánica corrige hojas amarillas, mejora la retención de agua, aporta nitrógeno natural y fortalece las raíces sin químicos.";
  } else if (pregunta.includes("contacto") || pregunta.includes("whatsapp") || pregunta.includes("instagram")) {
    respuesta = "Puedes contactar a Luisa Carolina al WhatsApp 314 778 0850, al correo luisahoyos980@gmail.com o en Instagram @armoniaverde_oficiall.";
  }

  setTimeout(() => {
    logs.innerHTML += `<p><strong>IA:</strong> ${respuesta}</p>`;
    logs.scrollTop = logs.scrollHeight;
  }, 300);
}