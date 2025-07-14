
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

// Cambio de idioma con banderas
const langEs = document.getElementById("lang-es");
const langIt = document.getElementById("lang-it");

const textos = {
  es: {
    inicio: "Inicio",
    sobreMi: "Sobre mí",
    servicios: "Servicios",
    serviciosTitulo: "Servicios de traducción",
    contacto: "Contacto",
    tituloPrincipal: 'Bienvenida a <span class="ciao">CIAO</span><span class="hola">HOLA</span>',
    bannerTexto: "Tu traducción pública de italiano confiable y profesional.",
    contactoTitulo: "Contacto",
    formNombreLabel: "Nombre",
    formEmailLabel: "Email",
    formMensajeLabel: "Mensaje",
    formEnviarBtn: "Enviar",
    presentacionCorta: '¡Hola! Soy Carla, Traductora Pública de italiano, y la persona detrás de <span class="ciao">CIAO</span><span class="hola">HOLA</span>.',
    sobreMiParrafo1: 'Me especializo en traducciones con valor legal —ciudadanía italiana, actas, certificados y poderes—, donde la precisión y el conocimiento jurídico hacen la diferencia. Sé que una buena traducción no es solo pasar palabras, sino cuidar lo que para vos es importante. Por eso combino profesionalismo, trato cercano y mucha atención al detalle. Tu traducción está en buenas manos.',

  },
  it: {
    inicio: "Inizio",
    sobreMi: "Chi sono",
    servicios: "Servizi",
    serviciosTitulo: "Servizi di traduzione",
    contacto: "Contatto",
    tituloPrincipal: 'Benvenuti a <span class="ciao">CIAO</span><span class="hola">HOLA</span>',
    bannerTexto: "La tua traduttrice pubblica di italiano affidabile e professionale.",
    contactoTitulo: "Contatto",
    formNombreLabel: "Nome",
    formEmailLabel: "Email",
    formMensajeLabel: "Messaggio",
    formEnviarBtn: "Invia",
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

