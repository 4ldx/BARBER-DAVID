document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado correctamente. Buscando elementos...");

  const TELEFONO_WHATSAPP = "528611265737"; 
  const serviceItems = document.querySelectorAll(".service-item");
  const btnReservar = document.getElementById("btnReservar");

  // Selección y deselección visual de servicios
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      console.log("Servicio cambiado:", item.getAttribute("data-service"));
    });
  });

  // Evento de clic en el botón de reservar
  if (btnReservar) {
    console.log("Botón de reservar encontrado con éxito.");
    
    btnReservar.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("¡Clic en reservar detectado!");

      const seleccionados = document.querySelectorAll(".service-item.active");
      let mensaje = "¡Hola Me gustaría agendar una cita";

      if (seleccionados.length > 0) {
        const listaServicios = Array.from(seleccionados)
          .map(item => item.getAttribute("data-service"))
          .filter(Boolean)
          .join(", ");
        
        mensaje += ` para: *${listaServicios}*.`;
      } else {
        mensaje += `. ¿Qué horarios tienen disponibles?`;
      }

      // Enlace seguro con la API web oficial de WhatsApp
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${TELEFONO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
      
      // Abrir WhatsApp en una nueva pestaña
      window.open(urlWhatsApp, "_blank");
    });
  } else {
    console.error("¡ERROR! No se encontró el botón con id 'btnReservar' en el HTML.");
  }
});
