document.addEventListener("DOMContentLoaded", () => {
  // Número de WhatsApp del cliente
  const TELEFONO_WHATSAPP = "528611265737"; 

  const serviceItems = document.querySelectorAll(".service-item");
  const btnReservar = document.getElementById("btnReservar");

  // Selección/deselección interactiva de servicios
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Evento de clic en el botón de reservar
  if (btnReservar) {
    btnReservar.addEventListener("click", (e) => {
      e.preventDefault(); // Evita recargas inesperadas de página

      const seleccionados = document.querySelectorAll(".service-item.active");
      let mensaje = "¡Hola BARBER HOUSE! Me gustaría agendar una cita";

      if (seleccionados.length > 0) {
        const listaServicios = Array.from(seleccionados)
          .map(item => item.getAttribute("data-service"))
          .filter(Boolean) // Evita valores nulos si falta algún atributo data-service
          .join(", ");
        
        mensaje += ` para: *${listaServicios}*.`;
      } else {
        mensaje += `. ¿Qué horarios tienen disponibles?`;
      }

      // Redirección directa y segura compatible con móviles
      const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
      window.location.href = urlWhatsApp;
    });
  } else {
    console.error("El botón con id 'btnReservar' no fue encontrado en el HTML.");
  }
});
