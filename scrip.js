// Función global directa para el botón
window.hacerReserva = function() {
  const TELEFONO_WHATSAPP = "528611265737";
  
  // Buscar los servicios seleccionados
  const seleccionados = document.querySelectorAll(".service-item.active");
  let mensaje = "¡Hola BARBER HOUSE! Me gustaría agendar una cita";

  if (seleccionados.length > 0) {
    const listaServicios = Array.from(seleccionados)
      .map(item => item.getAttribute("data-service"))
      .filter(Boolean)
      .join(", ");
    
    mensaje += ` para: *${listaServicios}*.`;
  } else {
    mensaje += `. ¿Qué horarios tienen disponibles?`;
  }

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TELEFONO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  window.open(urlWhatsApp, "_blank");
};

// Mantener la selección visual de los servicios
document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
