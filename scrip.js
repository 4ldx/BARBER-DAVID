// Función global directa para el botón de reserva
window.enviarWhatsApp = function() {
  const TELEFONO_WHATSAPP = "528611265737";
  
  // Buscar los servicios seleccionados
  const seleccionados = document.querySelectorAll(".service-item.active");
  let mensaje = "Me gustaría agendar una cita";

  if (seleccionados.length > 0) {
    const listaServicios = Array.from(seleccionados)
      .map(item => item.getAttribute("data-service"))
      .filter(Boolean)
      .join(", ");
    
    mensaje += ` para: *${listaServicios}*.`;
  } else {
    mensaje += `. ¿Qué horarios tienen disponibles?`;
  }

  // URL directa de la API web de WhatsApp para evitar bloqueos de protocolo o de app de escritorio
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TELEFONO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, "_blank");
};

// Selección visual de los servicios al hacer clic
document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
