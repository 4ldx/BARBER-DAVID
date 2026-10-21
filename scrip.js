document.addEventListener("DOMContentLoaded", () => {
  // Número de WhatsApp del cliente (reemplazar con el real)
  const TELEFONO_WHATSAPP = "5218710000000"; 

  const serviceCards = document.querySelectorAll(".service-card");
  const btnReservar = document.getElementById("btnReservar");
  const yearSpan = document.getElementById("year");

  // Colocar año actual en el footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Permite seleccionar / deseleccionar servicios haciendo clic
  serviceCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("selected");
    });
  });

  // Evento para enviar mensaje por WhatsApp
  if (btnReservar) {
    btnReservar.addEventListener("click", () => {
      const seleccionados = document.querySelectorAll(".service-card.selected");
      
      let mensaje = "¡Hola BARBER HOUSE! Me gustaría agendar una cita";

      if (seleccionados.length > 0) {
        const listaServicios = Array.from(seleccionados)
          .map(card => card.getAttribute("data-service"))
          .join(", ");
        
        mensaje += ` para los siguientes servicios: *${listaServicios}*.`;
      } else {
        mensaje += `. ¿Qué horarios tienen disponibles?`;
      }

      const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
      window.open(urlWhatsApp, "_blank");
    });
  }
});