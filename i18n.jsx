/* i18n.jsx — all site copy in Spanish + English, plus language context */

const LangContext = React.createContext(null);
const useL = () => React.useContext(LangContext);

const STRINGS = {
  es: {
    code: "es", switchTo: "EN", switchLabel: "English",
    nav: [
      { href: "#nosotros", label: "Nosotros" },
      { href: "#servicios", label: "Servicios" },
      { href: "#proyectos", label: "Proyectos" },
      { href: "#zonas", label: "Zonas" },
      { href: "#contacto", label: "Contacto" },
    ],
    quote: "Pedir presupuesto",
    callUs: "Llámanos",
    header: { sub: "Construcción y Rehabilitación" },

    hero: {
      eyebrow: "De la cimentación a los últimos acabados",
      h1a: "Construcción y reformas", h1em: "en Murcia", h1b: "",
      sub: "Construimos viviendas desde cero y realizamos reformas integrales e interiores en Murcia y alrededores. Trabajo serio, trato directo y resultados que duran.",
      seeProjects: "Ver proyectos",
      stats: [
        { icon: "hardhat", t: "+15 Años", l: "De experiencia" },
        { icon: "home", t: "Llave en mano", l: "Construcción completa" },
        { icon: "pin", t: "Murcia", l: "Y alrededores" },
      ],
      photo: { kind: "Foto destacada", desc: "Vivienda terminada o obra en proceso" },
      tagK: "Obra nueva", tagV: "Vivienda unifamiliar · Avileses",
    },

    about: {
      eyebrow: "Quiénes somos",
      titleA: "Una empresa local que ", titleEm: "construye de verdad",
      lead: "Priherma es una empresa de construcción y rehabilitación con base en Avileses, Murcia. Levantamos viviendas desde cero y las dejamos listas para entrar a vivir.",
      body: "También hacemos reformas integrales, baños, interiores, rehabilitación y trabajos exteriores. Sin grandes oficinas ni discursos: lo que ves en nuestras obras es lo que hacemos cada día, con un equipo de confianza y proveedores de la zona.",
      badge: "Años\nde oficio",
      photos: [
        { kind: "Equipo Priherma", desc: "En obra" },
        { kind: "Detalle", desc: "Acabado" },
        { kind: "Proceso", desc: "Estructura" },
      ],
      points: [
        { icon: "home", t: "Llave en mano", d: "Gestionamos todo el proceso, de los cimientos a la entrega." },
        { icon: "users", t: "Trato directo", d: "Hablas siempre con quien hace la obra, sin intermediarios." },
        { icon: "ruler", t: "Trabajo medido", d: "Presupuestos claros y plazos que cumplimos." },
        { icon: "shield", t: "Hecho para durar", d: "Materiales de calidad y acabados cuidados." },
      ],
    },

    services: {
      eyebrow: "Qué hacemos",
      titleA: "Servicios de ", titleEm: "obra y reforma",
      lead: "Un solo equipo para todo el proyecto. Te ahorras coordinar a varios gremios: lo organizamos nosotros.",
      items: [
        { icon: "home", t: "Obra nueva", d: "Construimos tu vivienda desde la cimentación hasta los acabados finales.", tags: ["Cimentación", "Estructura", "Llave en mano"] },
        { icon: "hammer", t: "Reformas integrales", d: "Renovamos por completo pisos y casas, adaptándolos a cómo quieres vivir.", tags: ["Distribución", "Instalaciones", "Acabados"] },
        { icon: "bath", t: "Baños y cocinas", d: "Reformas de baños y cocinas con materiales de calidad y buen acabado.", tags: ["Alicatado", "Fontanería", "Mobiliario"] },
        { icon: "paint", t: "Interiores", d: "Pladur, pintura, suelos, falsos techos y todo el interiorismo de tu espacio.", tags: ["Pladur", "Pintura", "Suelos"] },
        { icon: "building", t: "Rehabilitación", d: "Recuperamos y reforzamos edificios y viviendas antiguas con garantías.", tags: ["Fachadas", "Cubiertas", "Refuerzos"] },
        { icon: "fence", t: "Trabajos exteriores", d: "Fachadas, vallados, porches, pavimentos y obra menor en exteriores.", tags: ["Fachadas", "Vallados", "Pavimento"] },
      ],
    },

    projects: {
      eyebrow: "Nuestro trabajo",
      titleA: "Proyectos ", titleEm: "reales", titleB: ", terminados",
      lead: "Cada obra cuenta con fotos de antes, durante y después. Pincha en cualquier proyecto para ver el detalle.",
      filters: [
        { key: "all", label: "Todos" },
        { key: "obra", label: "Obra nueva" },
        { key: "reforma", label: "Reformas" },
        { key: "banos", label: "Baños" },
        { key: "interiores", label: "Interiores" },
        { key: "rehab", label: "Rehabilitación" },
        { key: "exteriores", label: "Exteriores" },
      ],
      photoLabel: "Foto del proyecto",
      more: "Ver más proyectos próximamente",
      lb: { before: "Antes", after: "Después", beforeDesc: "Estado inicial", afterDesc: "Resultado final", want: "Quiero algo así" },
      items: [], // Loaded dynamically from gallery.json
    },

    why: {
      eyebrow: "Por qué Priherma",
      titleA: "Razones para ", titleEm: "confiar",
      lead: "No somos una agencia ni una constructora lejana. Somos la gente que va a estar en tu obra cada día.",
      items: [
        { icon: "users", t: "Empresa local", d: "Estamos en Avileses. Sabes quiénes somos y dónde encontrarnos, y respondemos cuando llamas." },
        { icon: "euro", t: "Presupuesto claro", d: "Te decimos qué cuesta y por qué, sin sorpresas ni añadidos a mitad de obra." },
        { icon: "ruler", t: "Plazos que cumplimos", d: "Planificamos la obra y respetamos las fechas que acordamos contigo." },
        { icon: "shield", t: "Trabajo con garantía", d: "Materiales de calidad y acabados que aguantan el paso del tiempo." },
      ],
    },

    areas: {
      eyebrow: "Dónde trabajamos",
      titleA: "Murcia y ", titleEm: "alrededores",
      lead: "Tenemos la base en Avileses (Murcia) y trabajamos por toda la Región. Nos desplazamos a proyectos que estén hasta una hora de distancia.",
      list: ["Avileses", "Murcia", "Alcantarilla", "Santomera", "Beniaján", "Sangonera", "Alhama de Murcia", "Molina de Segura", "Las Torres de Cotillas", "El Palmar", "Librilla", "Fuente Álamo"],
      note: "¿No ves tu localidad? Llámanos igualmente: si el proyecto encaja, nos acercamos a verlo sin compromiso.",
      mapKind: "Zona de trabajo", mapDesc: "Región de Murcia y alrededores",
    },

    contact: {
      eyebrow: "Hablemos",
      titleA: "Cuéntanos tu ", titleEm: "proyecto",
      lead: "Llámanos o escríbenos por WhatsApp y te damos un presupuesto sin compromiso. Si quieres, déjanos los datos y te llamamos nosotros.",
      mPhone: "Teléfono", mWhats: "WhatsApp", mMail: "Email", mWhere: "Dónde estamos",
      formTitle: "Pide tu presupuesto",
      formSub: "Respondemos normalmente el mismo día.",
      fName: "Nombre", fNameP: "Tu nombre",
      fPhone: "Teléfono", fPhoneP: "600 00 00 00",
      fType: "Tipo de proyecto", fTypeP: "Selecciona una opción",
      types: ["Obra nueva", "Reforma integral", "Baño o cocina", "Interiores", "Rehabilitación", "Trabajos exteriores", "Otro"],
      fMsg: "Cuéntanos un poco", fMsgP: "¿Qué necesitas? ¿Dónde está la obra? ¿Tienes plazos?",
      send: "Enviar y pedir presupuesto",
      hintA: "También puedes llamarnos directamente al ",
      okTitle: "¡Mensaje enviado!",
      okBody: "Gracias por escribirnos. Te llamamos lo antes posible para hablar de tu proyecto.",
      okWa: "Escríbenos por WhatsApp",
    },

    footer: {
      tagline: "Construcción, reformas y rehabilitación en Murcia y alrededores. De los cimientos a los últimos acabados.",
      servicesH: "Servicios",
      servicesL: ["Obra nueva", "Reformas integrales", "Baños y cocinas", "Interiores", "Rehabilitación"],
      companyH: "Empresa",
      companyL: [{ href: "#nosotros", t: "Nosotros" }, { href: "#proyectos", t: "Proyectos" }, { href: "#zonas", t: "Zonas" }, { href: "#contacto", t: "Contacto" }],
      contactH: "Contacto",
      rights: "Construcción y Rehabilitación",
      base: "Avileses · ",
    },
  },

  en: {
    code: "en", switchTo: "ES", switchLabel: "Español",
    nav: [
      { href: "#nosotros", label: "About" },
      { href: "#servicios", label: "Services" },
      { href: "#proyectos", label: "Projects" },
      { href: "#zonas", label: "Areas" },
      { href: "#contacto", label: "Contact" },
    ],
    quote: "Request a quote",
    callUs: "Call us",
    header: { sub: "Construction & Renovation" },

    hero: {
      eyebrow: "From the foundations to the final finishes",
      h1a: "Construction & renovation", h1em: "in Murcia", h1b: "",
      sub: "We build homes from the ground up and carry out full renovations and interiors across Murcia and the surrounding area. Real work, direct contact and results that last.",
      seeProjects: "View projects",
      stats: [
        { icon: "hardhat", t: "+15 Years", l: "Experience" },
        { icon: "home", t: "Turnkey", l: "Complete build" },
        { icon: "pin", t: "Murcia", l: "& surroundings" },
      ],
      photo: { kind: "Featured photo", desc: "Finished home or work in progress" },
      tagK: "New build", tagV: "Detached house · Avileses",
    },

    about: {
      eyebrow: "Who we are",
      titleA: "A local company that ", titleEm: "really builds",
      lead: "Priherma is a construction and renovation company based in Avileses, Murcia. We build homes from the ground up and hand them over ready to move into.",
      body: "We also do full renovations, bathrooms, interiors, rehabilitation and exterior work. No big offices or sales talk: what you see in our projects is what we do every day, with a team you can trust and local suppliers.",
      badge: "Years on\nthe tools",
      photos: [
        { kind: "The Priherma team", desc: "On site" },
        { kind: "Detail", desc: "Finish" },
        { kind: "Process", desc: "Structure" },
      ],
      points: [
        { icon: "home", t: "Turnkey", d: "We manage the whole process, from foundations to handover." },
        { icon: "users", t: "Direct contact", d: "You always talk to the people doing the work — no middlemen." },
        { icon: "ruler", t: "Measured work", d: "Clear quotes and deadlines we keep." },
        { icon: "shield", t: "Built to last", d: "Quality materials and careful finishes." },
      ],
    },

    services: {
      eyebrow: "What we do",
      titleA: "Building & ", titleEm: "renovation services",
      lead: "One team for the whole project. No need to coordinate several trades — we organise it all for you.",
      items: [
        { icon: "home", t: "New build", d: "We build your home from the foundations through to the final finishes.", tags: ["Foundations", "Structure", "Turnkey"] },
        { icon: "hammer", t: "Full renovations", d: "We completely renovate flats and houses, adapting them to how you want to live.", tags: ["Layout", "Services", "Finishes"] },
        { icon: "bath", t: "Bathrooms & kitchens", d: "Bathroom and kitchen renovations with quality materials and a clean finish.", tags: ["Tiling", "Plumbing", "Units"] },
        { icon: "paint", t: "Interiors", d: "Plasterboard, paint, flooring, false ceilings and all the interior work for your space.", tags: ["Plasterboard", "Paint", "Flooring"] },
        { icon: "building", t: "Rehabilitation", d: "We restore and reinforce old buildings and homes, with guarantees.", tags: ["Façades", "Roofs", "Reinforcement"] },
        { icon: "fence", t: "Exterior work", d: "Façades, fencing, porches, paving and smaller outdoor construction jobs.", tags: ["Façades", "Fencing", "Paving"] },
      ],
    },

    projects: {
      eyebrow: "Our work",
      titleA: "Real projects, ", titleEm: "finished", titleB: "",
      lead: "Every job has before, during and after photos. Click any project to see the detail.",
      filters: [
        { key: "all", label: "All" },
        { key: "obra", label: "New build" },
        { key: "reforma", label: "Renovations" },
        { key: "banos", label: "Bathrooms" },
        { key: "interiores", label: "Interiors" },
        { key: "rehab", label: "Rehabilitation" },
        { key: "exteriores", label: "Exteriors" },
      ],
      photoLabel: "Project photo",
      more: "More projects coming soon",
      lb: { before: "Before", after: "After", beforeDesc: "Starting point", afterDesc: "Final result", want: "I want something like this" },
      items: [], // Loaded dynamically from gallery-en.json
    },

    why: {
      eyebrow: "Why Priherma",
      titleA: "Reasons to ", titleEm: "trust us",
      lead: "We're not an agency or a far-off contractor. We're the people who'll be on your site every day.",
      items: [
        { icon: "users", t: "Local company", d: "We're in Avileses. You know who we are and where to find us, and we answer when you call." },
        { icon: "euro", t: "Clear pricing", d: "We tell you what it costs and why — no surprises or extras halfway through." },
        { icon: "ruler", t: "Deadlines we keep", d: "We plan the work and stick to the dates we agree with you." },
        { icon: "shield", t: "Guaranteed work", d: "Quality materials and finishes that stand the test of time." },
      ],
    },

    areas: {
      eyebrow: "Where we work",
      titleA: "Murcia & the ", titleEm: "surrounding area",
      lead: "We're based in Avileses (Murcia) and work across the whole region. We travel to projects up to an hour away.",
      list: ["Avileses", "Murcia", "Alcantarilla", "Santomera", "Beniaján", "Sangonera", "Alhama de Murcia", "Molina de Segura", "Las Torres de Cotillas", "El Palmar", "Librilla", "Fuente Álamo"],
      note: "Don't see your town? Call us anyway — if the project's a good fit, we'll come and take a look, no obligation.",
      mapKind: "Working area", mapDesc: "Region of Murcia and surroundings",
    },

    contact: {
      eyebrow: "Let's talk",
      titleA: "Tell us about your ", titleEm: "project",
      lead: "Call or message us on WhatsApp and we'll give you a quote with no obligation. Or leave your details and we'll call you.",
      mPhone: "Phone", mWhats: "WhatsApp", mMail: "Email", mWhere: "Where we are",
      formTitle: "Request your quote",
      formSub: "We usually reply the same day.",
      fName: "Name", fNameP: "Your name",
      fPhone: "Phone", fPhoneP: "600 00 00 00",
      fType: "Type of project", fTypeP: "Select an option",
      types: ["New build", "Full renovation", "Bathroom or kitchen", "Interiors", "Rehabilitation", "Exterior work", "Other"],
      fMsg: "Tell us a bit", fMsgP: "What do you need? Where is the project? Any deadlines?",
      send: "Send and request a quote",
      hintA: "You can also call us directly on ",
      okTitle: "Message sent!",
      okBody: "Thanks for getting in touch. We'll call you as soon as possible to talk about your project.",
      okWa: "Message us on WhatsApp",
    },

    footer: {
      tagline: "Construction, renovation and rehabilitation in Murcia and the surrounding area. From the foundations to the final finishes.",
      servicesH: "Services",
      servicesL: ["New build", "Full renovations", "Bathrooms & kitchens", "Interiors", "Rehabilitation"],
      companyH: "Company",
      companyL: [{ href: "#nosotros", t: "About" }, { href: "#proyectos", t: "Projects" }, { href: "#zonas", t: "Areas" }, { href: "#contacto", t: "Contact" }],
      contactH: "Contact",
      rights: "Construction & Renovation",
      base: "Avileses · ",
    },
  },
};

Object.assign(window, { LangContext, useL, STRINGS });
