// Función directa para abrir WhatsApp sin depender de listener encadenados
function enviarWhatsApp() {
  const TELEFONO_WHATSAPP = "528611265737";
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

  const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
  
  // Intenta abrir en pestaña nueva y si el navegador lo bloquea, lo abre en la misma
  const win = window.open(urlWhatsApp, "_blank");
  if (!win || win.closed || typeof win.closed === "undefined") {
    window.location.href = urlWhatsApp;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Selección/deselección interactiva de servicios
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // Asignación explícita del evento al botón
  const btnReservar = document.getElementById("btnReservar");
  if (btnReservar) {
    btnReservar.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      enviarWhatsApp();
    };
  }
});
