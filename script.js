
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
    inicio: "INICIO",
    sobreMi: "SOBRE MI",
    servicios: "SERVICIOS",
    masInfo: "MÁS INFO",
    contacto: "CONTACTO",
    tituloPrincipal: "TRADUCCIONES",
    subtitulo: "Italiano - Español",
    presentacionCorta: '<span class="solo-pc">¡Hola! Soy Carla, Traductora Pública de italiano,<br>y la persona detrás de</span><span class="solo-mobile">¡Hola! Soy Carla, Traductora Pública de italiano, y la persona detrás de </span> <img src="./img/logoPNG.png" alt="" class="inline-img" />',
    sobreMiParrafo1: 'Me especializo en traducciones con valor legal -ciudadanía italiana, actas, certificados, poderes y documentación societaria- donde la <b>precisión</b> y el <b>conocimiento jurídico</b> hacen la diferencia. Cuento con matrícula tanto en <a style="color: #222" href="https://traductoreslaplata.org/usuario/cdimarco/" target="_blank">Colegio de Traductores Públicos e Intérpretes de la Provincia de Buenos Aires, regional La Plata</a> como en el <a style="color: #222" href="https://www.traductores.org.ar/traductor/dimarco-calello-carla-edith/" target="_blank">Colegio de Traductores Públicos de la Ciudad de Buenos Aires</a>. Mi enfoque integra <b>profesionalismo, trato cercano</b> y <b>atención al detalle.<br> <span class="frase-final"><i>Tu traducción está en buenas manos.</i></span></b>',
    sobreMiParrafo2: 'Como traductora pública de italiano y abogada, combino el <b>dominio del idioma</b> con un <b>profundo conocimiento legal.</b> Me especializo en traducciones precisas y fieles al texto original, evitando errores que puedan tener consecuencias jurídicas. Conozco la terminología y el contexto legal de cada país, por eso garantizo un trabajo profesional, claro y confiable.',
    serviciosTitulo: "Servicios",
    ciudadaniaTexto: "Sé que detrás de cada texto hay una historia que merece ser cuidada. Por eso, traduzco con rigor jurídico y cercanía, para que tengas tranquilidad y resultados de calidad.",
    traduccionesPublicasTitulo: "Traducciones Públicas",
    traduccionesPublicas1: "Con firma ológrafa o digital",
    traduccionesPublicas2: "Legalizadas por el Colegio de Traductores Públicos",
    traduccionesPublicas3: "Para trámites en Argentina, Italia y otros países.",
itemSoloItaliano: '',
    traduccionesJuridicasTitulo: "Traducciones Jurídicas",
    traduccionesJuridicas1: "Contratos",
    traduccionesJuridicas2: "Escrituras",
    traduccionesJuridicas3: "Poderes",
    traduccionesJuridicas4: "Sentencias",
    traduccionesJuridicas5: "Resoluciones",
    documentosPersonalesTitulo: "Documentos Personales",
    documentosPersonales1: "Partidas de nacimiento",
    documentosPersonales2: "Actas de matrimonio",
    documentosPersonales3: "Partidas de defunción",
    documentosPersonales4: "Certificados",
    documentosPersonales5: "Documentos de identidad",
    documentosPersonales6: "Carnets de conducir",
    documentosPersonales7: "Autorizaciones de viaje",
    documentosEducativosTitulo: "Documentos Educativos",
    documentosEducativos1: "Diplomas",
    documentosEducativos2: "Analíticos",
    documentosEducativos3: "Certificados académicos",
    documentosSocietariosTitulo: "Documentos Societarios",
    documentosSocietarios1: "Actas constitutivas",
    documentosSocietarios2: "Estatutos sociales",
    documentosSocietarios3: "Actas de asamblea y de directorio",
    documentosSocietarios4: "Poderes societarios",
    documentosSocietarios5: "Informes contables",
    documentosSocietarios6: "Balances",
    documentosSocietarios7: "Contratos",
    ciudadaniaItalianaTitulo: "Ciudadanía Italiana",
    ciudadaniaItaliana1: "Armado de carpeta",
    ciudadaniaItaliana2: "Traducción de toda la documentación necesaria",
    ciudadaniaItaliana3: "Legalizaciones y apostillados",
    contactoTitulo: "Decime <i>Ciao</i> y empezamos",
    formNombreLabel: "Nombre",
    formEmailLabel: "Email",
    formMensajeLabel: "Mensaje",
    formEnviarBtn: "Enviar",
    descubriTitulo: 'Descubrí <br>lo que <br>hago',
    contactoSubtitulo: 'Estoy a disposición para resolver cualquier consulta sobre mis servicios de traducción.',
    horarios: '<img src="img/horarios.png" alt="Horarios" class="icono-contacto" />Lunes a Viernes: 14:00 - 18:00<br />Sábados: 9:00 - 13:00',
    footerCreditos: 'Desarrollado por: <a href="https://www.compudiego.com.ar" target="_blank" rel="noopener noreferrer">CompuDiego</a>',
    clientesTitulo: '<h2 style="text-align: center; color: #4a5a50;">Con <i>fiducia e cuore:</i> lo que opinan mis clientes</h2>',
    queres: '¿Querés empezar?',
    distancia: '<a href="mailto:traductoraitaliano@hotmail.com"><em>Estoy a un mensaje de distancia</em></a>',
    telefono: "Teléfono"

  },
  it: {
    inicio: "INIZIO",
    sobreMi: "CHI SONO",
    servicios: "SERVIZI",
    masInfo: "PIÙ INFO",
    contacto: "CONTATTO",
    tituloPrincipal: "TRADUZIONI",
    subtitulo: "Italiano - Spagnolo",
    presentacionCorta: '<span class="solo-pc">Dietro <img src="./img/logoPNG.png" alt="CIAOHOLA" class="inline-img" />ci sono io: Carla, traduttrice con esperienza <br>e passione per il dettaglio.</span><span class="solo-mobile">Dietro <img src="./img/logoPNG.png" alt="CIAOHOLA" class="inline-img" /> ci sono io: Carla, traduttrice con esperienza e passione per il dettaglio.</span>',
    sobreMiParrafo1: 'Da diversi anni mi occupo di traduzioni con valore legale, in particolare per la cittadinanza italiana, atti, certificati, procure e altri documenti che richiedono <b>precisione</b> e <b>conoscenza del linguaggio giuridico.</b> Sono iscritta all’<a style="color: #222" href="https://traductoreslaplata.org/usuario/cdimarco/" target="_blank" rel="noopener noreferrer">Ordine dei Traduttori e degli Interpreti della Provincia di Buenos Aires - sede La Plata</a> e della <a style="color: #222" href="https://www.traductores.org.ar/traductor/dimarco-calello-carla-edith/" target="_blank" rel="noopener noreferrer">Città di Buenos Aires</a> (Argentina).',
    sobreMiParrafo2: 'Traduttrice di italiano e avvocata, coniugo la <b>padronanza della lingua a una solida competenza giuridica.</b> Mi occupo di traduzioni accurate e fedeli all’originale, evitando imprecisioni che potrebbero avere ripercussioni legali. Grazie alla conoscenza della terminologia e del contesto normativo di ciascun Paese, offro un servizio <b>professionale, chiaro e affidabile.</b>',
    serviciosTitulo: "Servizi",
    ciudadaniaTexto: "So che dietro ogni testo c’è una storia che merita cura. Per questo traduco con rigore giuridico e un’attenzione personale, così puoi stare <b>tranquillo</b> e ottenere risultati di <b>qualità.</b>",
    traduccionesPublicasTitulo: "Traduzioni Giurate",
    traduccionesPublicas1: "Con firma olografa o digitale",
    traduccionesPublicas2: "Legalizzate dall’Ordine dei Traduttori",
    traduccionesPublicas3: "Valide per ogni pratica in Argentina, Italia e altri paesi",
    itemSoloItaliano: 'Ogni tipo di documento legale.',
    traduccionesJuridicasTitulo: "Traduzioni Giuridiche",
    traduccionesJuridicas1: "Contratti",
    traduccionesJuridicas2: "Atti notarili",
    traduccionesJuridicas3: "Procure",
    traduccionesJuridicas4: "Sentenze",
    traduccionesJuridicas5: "Delibere",
    documentosPersonalesTitulo: "Documenti Personali",
    documentosPersonales1: "Atti di nascita",
    documentosPersonales2: "Atti di matrimonio",
    documentosPersonales3: "Atti di morte",
    documentosPersonales4: "Certificati",
    documentosPersonales5: "Documenti d'identità",
    documentosPersonales6: "Patenti di guida",
    documentosPersonales7: "Autorizzazioni di viaggio",
    documentosEducativosTitulo: "Documenti Educativi",
    documentosEducativos1: "Titoli",
    documentosEducativos2: "Pagelle",
    documentosEducativos3: "Certificati accademici",
    documentosSocietariosTitulo: "Documenti Societari",
    documentosSocietarios1: "Atti costitutivi",
    documentosSocietarios2: "Statuti Sociali",
    documentosSocietarios3: "Verbali di assemblea e di consiglio",
    documentosSocietarios4: "Procure societarie",
    documentosSocietarios5: "Relazioni contabili",
    documentosSocietarios6: "Bilanci",
    documentosSocietarios7: "Contratti",
    ciudadaniaItalianaTitulo: "Cittadinanza Italiana",
    ciudadaniaItaliana1: "Preparazione dei documenti",
    ciudadaniaItaliana2: "Traduzione di tutta la documentazione necessaria",
    ciudadaniaItaliana3: "Legalizzazioni e apostille",
    contactoTitulo: "Dimmi <i>Hola</i> e partiamo",
    formNombreLabel: "Nome",
    formEmailLabel: "Email",
    formMensajeLabel: "Messaggio",
    formEnviarBtn: "Invia",
    descubriTitulo: 'Chi sono <br>e <br>cosa faccio',
    contactoSubtitulo: 'Sono a tua disposizione per rispondere qualsiasi domanda sui miei servizi di traduzione',
    horarios: '<img src="img/horarios.png" alt="Orari" class="icono-contacto" />Dal lunedì al venerdì: 14:00 - 18:00<br />Sabato: 9:00 - 13:00',
    footerCreditos: 'Sviluppato da: <a href="https://www.compudiego.com.ar" target="_blank" rel="noopener noreferrer">CompuDiego</a>',
    clientesTitulo: '<h2 style="text-align: center; color: #4a5a50;">Con fiducia e cuore: cosa dicono i miei clienti</h2>',
    distancia: '<a href="mailto:traductoraitaliano@hotmail.com"><em>Scrivimi, ci penso io</em></a>',
    queres: 'Vuoi cominciare?',
        telefono: "Telefono"


  }
};

function cambiarIdioma(idioma) {
  document.querySelectorAll("[data-key]").forEach((el) => {
  const key = el.getAttribute("data-key");
  if (textos[idioma][key]) {
    el.innerHTML = textos[idioma][key];  // <--- usar innerHTML si hay etiquetas HTML adentro
  }
  document.documentElement.setAttribute("data-lang", idioma);

});

}

langEs.addEventListener("click", () => cambiarIdioma("es"));
langIt.addEventListener("click", () => cambiarIdioma("it"));

