document.addEventListener("DOMContentLoaded", () => {
  const TELEFONO_WHATSAPP = "528611265737"; 

  const serviceItems = document.querySelectorAll(".service-item");
  const btnReservar = document.getElementById("btnReservar");

  // Selección y deselección de servicios
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Redirección segura usando la API web oficial de WhatsApp
  if (btnReservar) {
    btnReservar.addEventListener("click", (e) => {
      e.preventDefault();

      const seleccionados = document.querySelectorAll(".service-item.active");
      let mensaje = " Me gustaría agendar una cita";

      if (seleccionados.length > 0) {
        const listaServicios = Array.from(seleccionados)
          .map(item => item.getAttribute("data-service"))
          .filter(Boolean)
          .join(", ");
        
        mensaje += ` para: *${listaServicios}*.`;
      } else {
        mensaje += `. ¿Qué horarios tienen disponibles?`;
      }

      // Usar api.whatsapp.com/send fuerza la apertura directa en la web y evita el fallo de protocolo
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TELEFONO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
      
      window.open(urlWhatsApp, "_blank");
    });
  }
});
