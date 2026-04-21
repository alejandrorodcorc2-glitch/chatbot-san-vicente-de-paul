const datosInstituto = {
  horario: "El horario general del centro es de mañana. Para horarios específicos consulta la web.",
  
  contacto: "Teléfono: 96 533 18 78 | Email: info@colegiopaulalcoy.com",
  
  direccion: "El centro está en C/ La Milagrosa s/n, Alcoy (Alicante).",
  
  comedor: "El colegio dispone de servicio de comedor con menús mensuales y diferentes opciones de uso.",
  
  infantil: "Educación Infantil en el centro ofrece una atención personalizada en los primeros años del alumno.",
  
  primaria: "En Primaria se trabaja el desarrollo académico y personal del alumnado.",
  
  eso: "En ESO se prepara al alumnado para estudios posteriores con formación completa.",
  
  ciclos: "El centro ofrece ciclos formativos en diferentes áreas profesionales.",
  
  general: "Puedes preguntar sobre horario, contacto, comedor o estudios del centro."
};

function sendMessage() {
  let input = document.getElementById("userInput").value.toLowerCase().trim();
  let chatbox = document.getElementById("chatbox");

  if (input === "") return;

  let response = "Lo siento, no entiendo la pregunta.";

  // HORARIO
  if (
    input.includes("horario") ||
    input.includes("hora") ||
    input.includes("abre")
  ) {
    response = datosInstituto.horario;
  }

  // CONTACTO
  else if (
    input.includes("contacto") ||
    input.includes("telefono") ||
    input.includes("email")
  ) {
    response = datosInstituto.contacto;
  }

  // DIRECCION
  else if (
    input.includes("direccion") ||
    input.includes("donde") ||
    input.includes("ubicacion")
  ) {
    response = datosInstituto.direccion;
  }

  // COMEDOR
  else if (
    input.includes("comedor") ||
    input.includes("menu") ||
    input.includes("comida")
  ) {
    response = datosInstituto.comedor;
  }

  // INFANTIL
  else if (
    input.includes("infantil")
  ) {
    response = datosInstituto.infantil;
  }

  // PRIMARIA
  else if (
    input.includes("primaria")
  ) {
    response = datosInstituto.primaria;
  }

  // ESO
  else if (
    input.includes("eso") ||
    input.includes("secundaria")
  ) {
    response = datosInstituto.eso;
  }

  // CICLOS
  else if (
    input.includes("ciclo") ||
    input.includes("formacion profesional")
  ) {
    response = datosInstituto.ciclos;
  }

  // MENSAJES
  chatbox.innerHTML += "<p><b>Tú:</b> " + input + "</p>";
  chatbox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

  document.getElementById("userInput").value = "";
}
