async function enviarMensajeIA() {
  const input = document.getElementById("chat-input");
  const logs = document.getElementById("chat-logs");
  const pregunta = input.value.trim();
  
  if (!pregunta) return;

  // Muestra el mensaje del usuario en el chat
  logs.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;
  input.value = "";
  logs.scrollTop = logs.scrollHeight;

  try {
    // Conexión gratuita con la API de Groq (puedes usar tu clave de desarrollador)
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer TU_API_KEY_AQUI"
      },
      body: JSON.stringify({
 { 
  role: "system", 
  content: "Eres el asistente experto de EcoAbonos. Vendes humus de lombriz (15k COP), compost madurado (25k COP) y biofertilizante líquido (18k COP). Asesora amablemente al cliente sobre el cuidado de plantas y el uso de abonos orgánicos." 
}
  role: "system", 
  content: "Eres el asistente experto de EcoAbonos. Vendes humus de lombriz (15k COP), compost madurado (25k COP) y biofertilizante líquido (18k COP). Asesora amablemente al cliente sobre el cuidado de plantas y el uso de abonos orgánicos." 
        messages: [
          { role: "system", content: "Eres el asistente virtual amable y servicial de este emprendimiento digital." },
          { role: "user", content: pregunta }
        ]
      })
    });
    
    const data = await response.json();
    const respuestaIA = data.choices[0].message.content;
    
    logs.innerHTML += `<p><strong>IA:</strong> ${respuestaIA}</p>`;
  } catch (error) {
    logs.innerHTML += `<p><strong>IA:</strong> ¡Hola! Gracias por tu interés. En este momento estoy listo para ayudarte con información de nuestro negocio.</p>`;
  }
  
  logs.scrollTop = logs.scrollHeight;
}