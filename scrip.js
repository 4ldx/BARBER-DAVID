document.addEventListener("DOMContentLoaded", () => {
  // Número de WhatsApp del cliente
  const TELEFONO_WHATSAPP = "528611265737"; 

  const serviceItems = document.querySelectorAll(".service-item");
  const btnReservar = document.getElementById("btnReservar");

  // Permite seleccionar servicios
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Redirección a WhatsApp al hacer clic en el botón
  if (btnReservar) {
    btnReservar.addEventListener("click", () => {
      const seleccionados = document.querySelectorAll(".service-item.active");
      
      let mensaje = "¡Hola BARBER HOUSE! Me gustaría agendar una cita";

      if (seleccionados.length > 0) {
        const listaServicios = Array.from(seleccionados)
          .map(item => item.getAttribute("data-service"))
          .join(", ");
        
        mensaje += ` para: *${listaServicios}*.`;
      } else {
        mensaje += `. ¿Qué horarios tienen disponibles?`;
      }

      const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
      window.open(urlWhatsApp, "_blank");
    });
  }
});
