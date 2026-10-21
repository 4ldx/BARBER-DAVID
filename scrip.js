document.addEventListener("DOMContentLoaded", () => {
  // Número de WhatsApp configurado del cliente
  const TELEFONO_WHATSAPP = "528611265737"; 

  const serviceItems = document.querySelectorAll(".service-item");
  const btnReservar = document.getElementById("btnReservar");

  // Permite seleccionar / deseleccionar servicios al hacer clic
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Redirección directa a WhatsApp
  if (btnReservar) {
    btnReservar.addEventListener("click", (e) => {
      e.preventDefault();

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

      // Redirección directa para garantizar compatibilidad móvil y de escritorio
      const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
      window.location.href = urlWhatsApp;
    });
  }
});
