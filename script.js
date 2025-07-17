
const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  const btn = document.getElementById("whatsapp-btn");
  const footer = document.getElementById("footer");

  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const scrollBottom = window.scrollY + window.innerHeight;
  const overlap = scrollBottom > footerTop;

  if (overlap) {
    const offset = scrollBottom - footerTop + 24;
    btn.style.bottom = `${offset}px`;
  } else {
    btn.style.bottom = "24px";
  }
});
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach(el => observer.observe(el));

(function () {
  emailjs.init("w6D6hUEHM0tTXaJjc"); // Tu PUBLIC KEY
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-contacto");
  const loader = document.getElementById("loader");
  const estado = document.getElementById("estado-envio");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    loader.innerHTML = "<div class='loader'></div>";
    estado.innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailValido = /\w+@\w+\.\w+/.test(email);

    if (!name || !email || !message) {
      loader.innerHTML = "";
      estado.innerHTML = "<div style='color:red;'>Los campos con * son obligatorios.</div>";
      return;
    }

    if (!emailValido) {
      loader.innerHTML = "";
      estado.innerHTML = "<div style='color:red;'>Email inválido.</div>";
      return;
    }

    emailjs.send("service_iyucybu", "template_or5qxx5", {
      title: "Nuevo mensaje de contacto",
      name: document.getElementById("name").value,
      message: document.getElementById("message").value,
      telefono: document.getElementById("telefono").value,
      email: document.getElementById("email").value 
    }).then(
      function (response) {
        loader.innerHTML = "";
        estado.innerHTML = "<div style='color:green;'>Mensaje enviado correctamente.</div>";
        form.reset();
      },
      function (error) {
        loader.innerHTML = "";
        estado.innerHTML = "<div style='color:red;'>Hubo un error al enviar el mensaje.</div>";
        console.error("Error:", error);
      }
    );
  });
});
const loader = document.getElementById("form-loader");
const status = document.getElementById("form-status");

function enviarFormulario() {
  loader.style.display = "block";
  status.innerText = "";

  emailjs.send("service_v4zprfv", "template_or5qxx5", {
    title: "Contacto",
    name: nombre.value,
    email: correo.value,
    telefono: telefono.value,
    message: mensaje.value,
  }).then(() => {
    loader.style.display = "none";
    status.innerText = "✅ Mensaje enviado correctamente";
    formulario.reset();
  }).catch(() => {
    loader.style.display = "none";
    status.innerText = "❌ Error al enviar el mensaje";
    status.style.color = "var(--rojo)";
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('acordeon-toggle');
  const cuerpo = document.getElementById('acordeon-cuerpo');
  const icono = boton.querySelector('.icono');

  boton.addEventListener('click', () => {
    if (cuerpo.style.display === 'block') {
      cuerpo.style.display = 'none';
      icono.textContent = '+';
    } else {
      cuerpo.style.display = 'block';
      icono.textContent = '−';
    }
  });
});

// Cambio de idioma con banderas
const langEs = document.getElementById("lang-es");
const langIt = document.getElementById("lang-it");

const textos = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    servicios: "Servicios",
    serviciosTitulo: "SERVICIOS DE TRADUCCIÓN",
    contacto: "Contacto",
    tituloPrincipal: "TRADUCCIONES",
    subtitulo: '<span class="ciao">Italiano</span> - <span class="hola">Español</span>',
    bannerTexto: "Servicios especializados para estudios jurídicos, escribanías y trámites de ciudadanía italiana.",
    contactoTitulo: "Contacto",
    formNombreLabel: "Nombre",
    formEmailLabel: "Email",
    formMensajeLabel: "Mensaje",
    formEnviarBtn: "Enviar",
    presentacionCorta: '¡Hola! Soy Carla, Traductora Pública de italiano, y la persona detrás de <span class="ciao">CIAO</span><span class="hola">HOLA</span>.',
    sobreMiParrafo1: 'Me especializo en traducciones con valor legal —ciudadanía italiana, actas, certificados y poderes—, donde la precisión y el conocimiento jurídico hacen la diferencia. Sé que una buena traducción no es solo pasar palabras, sino cuidar lo que para vos es importante. Por eso combino profesionalismo, trato cercano y mucha atención al detalle. Tu traducción está en buenas manos.',
    masInfo:"Más Info"
  },
  it: {
    inicio: "Inizio",
    sobreMi: "Chi sono",
    servicios: "Servizi",
    serviciosTitulo: "Servizi di traduzione",
    contacto: "Contatto",
    tituloPrincipal: "TRADUZIONI",
    subtitulo: '<span class="ciao">Italiano</span> - <span class="hola">Spagnolo</span>',
    bannerTexto: "Traduzioni professionali per il mondo legale, notarile e per le pratiche di cittadinanza.",
    contactoTitulo: "Contatto",
    formNombreLabel: "Nome",
    formEmailLabel: "Email",
    formMensajeLabel: "Messaggio",
    formEnviarBtn: "Invia",
    masInfo:"Scopri di più",
    presentacionCorta: 'Dietro <span class="ciao">CIAO</span><span class="hola">HOLA</span> ci sono io: Carla, traduttrice con esperienza e passione per il dettaglio.',
    sobreMiParrafo1: ' Da diversi anni mi occupo di traduzioni con valore legale, in particolare per la cittadinanza italiana, atti, certificati, procure e altri documenti che richiedono precisione e conoscenza del linguaggio giuridico. So bene che una buona traduzione non è solo questione di parole, ma anche di fiducia, responsabilità e attenzione ai dettagli. Per questo, in CIAOHOLA unisco la mia formazione giuridica a un approccio umano e professionale, per farti sentire sempre accompagnato/a.'
  }
};

function cambiarIdioma(idioma) {
  document.querySelectorAll("[data-key]").forEach((el) => {
  const key = el.getAttribute("data-key");
  if (textos[idioma][key]) {
    el.innerHTML = textos[idioma][key];  // <--- usar innerHTML si hay etiquetas HTML adentro
  }
});

}

langEs.addEventListener("click", () => cambiarIdioma("es"));
langIt.addEventListener("click", () => cambiarIdioma("it"));

