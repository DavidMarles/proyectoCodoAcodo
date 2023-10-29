/*Cod. API*/


fetch("https://ipinfo.io/json?token=a48401992a5c15")
  .then((response) => response.json())
  .then((jsonResponse) => {
    const city = jsonResponse.city;
    if (city) {
      // Comprobar si se encontró la ciudad en la respuesta
      const desdeDonde = document.querySelector(".desdeDonde");
      const p = desdeDonde.querySelector("p");
      p.textContent = `Nos visitas desde: ${city}`;
    } else {
      alert("No se encontró información de la ciudad.");
    }
  })
  .catch((error) => {
    alert("Error al obtener la información de la ciudad: " + error);
  });

  /*Cod. Formulario*/

  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario");
    const nombreInput = document.querySelector(".nombre");
    const emailInput = document.querySelector(".email");
    const observacionInput = document.querySelector(".observacion");
    const enviarButton = document.querySelector(".enviar");

    enviarButton.addEventListener("click", function () {
        if (validarCampos()) {
            alert("Envío exitoso");
        }
    });

    function validarCampos() {
        // Validar nombre (solo letras y espacios)
        const nombre = nombreInput.value.trim();
        if (!/^[A-Za-z\s]+$/.test(nombre)) {
            alert("Ingrese un nombre válido.");
            return false;
        }

        // Validar correo electrónico
        const email = emailInput.value.trim();
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Ingrese un correo electrónico válido.");
            return false;
        }

        // Validar observación (cualquier texto)
        const observacion = observacionInput.value.trim();
        if (observacion.length === 0) {
            alert("Ingrese una observación.");
            return false;
        }

        return true;
    }
});

