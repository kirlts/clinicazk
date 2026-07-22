export const waLaLink = 'https://wa.me/56957906641';
export const waPuconLink = 'https://wa.me/56952194952';

export const navLinks = [
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'membresias', label: 'Membresías' },
  { id: 'sucursales', label: 'Sucursales' },
  { id: 'preguntas', label: 'Preguntas' },
];

/* Especialidades — índice maestro-detalle.
   only: 'la' | 'pucon' cuando la especialidad existe en una sola sede. */
export const specialties = [
  {
    title: 'Odontopediatría',
    desc: 'Boxes ambientados especialmente para que niñas y niños vengan tranquilos.',
  },
  {
    title: 'Radiología e imágenes',
    desc: 'Centro radiológico propio en ambas sedes. Puedes venir solo por tus exámenes, aunque tu tratamiento sea en otra parte.',
  },
  { title: 'Odontología general', desc: '' },
  { title: 'Ortodoncia', desc: '' },
  { title: 'Endodoncia', desc: '' },
  { title: 'Periodoncia', desc: '' },
  { title: 'Implantología', desc: '' },
  { title: 'Rehabilitación oral', desc: '' },
  { title: 'Prótesis dentales', desc: '' },
  {
    title: 'Urgencias',
    desc: 'Si eres parte de Familia ZK, tu membresía incluye atenciones de urgencia anuales sin costo.',
  },
  { title: 'Trastornos temporomandibulares', desc: '', only: 'la' },
  { title: 'Cirugía maxilofacial', desc: '' },
  { title: 'Estética orofacial', desc: '', only: 'pucon' },
] as const;

/* Accesos rápidos del hero → índice de especialidades (idx en el array de arriba). */
export const quickLinks = [
  { label: 'Limpiezas', idx: 2 },
  { label: 'Procedimientos', idx: 3 },
  { label: 'Odontopediatría', idx: 0 },
  { label: 'Urgencias', idx: 9 },
  { label: 'Radiografías', idx: 1 },
] as const;

export const memberships = [
  {
    m: 'anticipa',
    name: 'ZK Anticipa',
    motto: 'Orden y prevención',
    headline: 'Tu salud dental ya está en orden.',
    tag: 'Para ordenar tu salud dental y anticiparte, con tus controles al día durante el año.',
    hl: false,
    feats: [
      'Set radiográfico inicial y de control',
      '2 evaluaciones y 2 limpiezas al año',
      '10% dcto. en tratamiento general',
      '1 urgencia anual sin costo',
    ],
  },
  {
    m: 'familia',
    name: 'ZK Familia',
    motto: 'Cuidado compartido',
    headline: 'Cuando uno se cuida, se cuidan todos.',
    tag: 'Para organizar el cuidado de todo tu grupo familiar, con una ruta para cada integrante.',
    hl: false,
    feats: [
      'Beneficios para cada integrante (2+)',
      'Flúor anual para los niños',
      '15% dcto. ortodoncia y odontopediatría',
      '1 urgencia anual por integrante',
    ],
  },
  {
    m: 'seguimiento',
    name: 'ZK Seguimiento',
    motto: 'Acompañamiento constante',
    headline: 'No tienes que acordarte de todo solo/a.',
    tag: 'Para avanzar sin postergar: seguimiento activo, recordatorios y prioridad en agenda.',
    hl: false,
    feats: [
      'Prioridad en agenda',
      '20% dcto. endodoncia y periodoncia',
      '10% dcto. ortodoncia y estética',
      '1 urgencia anual sin costo',
    ],
  },
  {
    m: 'total',
    name: 'ZK Total',
    motto: 'Más tranquilidad',
    headline: 'Vive tu salud dental con más tranquilidad.',
    tag: 'Para vivir el año con cobertura amplia y controles de implantes incluidos.',
    hl: true,
    feats: [
      '20% dcto. en todos tus tratamientos',
      '2 urgencias anuales sin costo',
      'Controles de implantes incluidos',
      'Mayor cobertura en todos tus tratamientos',
    ],
  },
] as const;

export const faqs = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Por WhatsApp o teléfono en tu sede más cercana, o con el formulario de contacto. Si eres parte de Familia ZK, indícalo al agendar para acceder a tus beneficios.',
  },
  {
    q: '¿Atienden urgencias dentales?',
    a: 'Sí, en ambas sedes. Las membresías Familia ZK incluyen atenciones de urgencia anuales sin costo.',
  },
  {
    q: '¿Qué es Familia ZK?',
    a: 'Nuestro programa de membresías anuales: una forma más ordenada y tranquila de cuidar tu salud dental, con controles, limpiezas, descuentos y respaldo ante urgencias.',
  },
  {
    q: '¿Puedo tomarme radiografías en la misma clínica?',
    a: 'Sí. Tenemos centro radiológico propio en Los Ángeles y Pucón; incluso puedes venir solo por tus exámenes, aunque tu tratamiento sea en otra parte.',
  },
  {
    q: '¿Atienden niñas y niños?',
    a: 'Sí, la odontopediatría es una de nuestras especialidades, con boxes ambientados especialmente para ellos en ambas sedes.',
  },
  {
    q: '¿Tienen convenios?',
    a: 'Trabajamos con convenios locales; el listado vigente está en confirmación. Escríbenos y confirmamos si el tuyo aplica en tu sede.',
  },
] as const;

export const branches = [
  {
    key: 'la',
    city: 'Los Ángeles',
    blurb: 'Sede mayor: once especialidades, escáner, pabellón de cirugías y centro radiológico propio.',
    address: 'Av. Gabriela Mistral 74',
    whatsapp: '+56 9 5790 6641',
    photoSrc: 'la-sede-cuadrada.jpg',
  },
  {
    key: 'pucon',
    city: 'Pucón',
    blurb: 'Sede cercana: dos box de atención y centro radiológico propio, a pasos del centro.',
    address: 'Brasil 321',
    whatsapp: '+56 9 5219 4952',
    photoSrc: 'pu-sede-cuadrada.jpg',
  },
] as const;

/* Galerías por sede — captions honestos, fáciles de editar. */
export const laPhotos = [
  { file: 'la-sede-cuadrada.jpg', alt: 'Fachada de Clínica ZK Los Ángeles', caption: 'Fachada en Av. Gabriela Mistral 74' },
  { file: 'la-fachada-letras-zk-rampa.jpg', alt: 'Acceso con letras ZK', caption: 'Acceso con rampa y letras ZK' },
  { file: 'la-hall-recepcion-meson.jpg', alt: 'Hall de recepción', caption: 'Hall de recepción' },
  { file: 'la-box-sillon-radiografia-pantalla.jpg', alt: 'Box de atención', caption: 'Box de atención con radiografía en pantalla' },
  { file: 'la-radiologia-equipo-panoramico.jpg', alt: 'Centro radiológico', caption: 'Centro radiológico propio' },
  { file: 'la-odontopediatria-mural-marino.jpg', alt: 'Box de odontopediatría', caption: 'Box de odontopediatría ambientado' },
] as const;

export const puPhotos = [
  { file: 'pu-sede-cuadrada.jpg', alt: 'Fachada de Clínica ZK Pucón', caption: 'Fachada en Brasil 321' },
  { file: 'pu-fachada-vitrina-frontal.jpg', alt: 'Vitrina de la sede', caption: 'Vitrina frontal, a pasos del centro' },
  { file: 'pu-box-sillon-adulto.jpg', alt: 'Box de atención', caption: 'Box de atención de adultos' },
  { file: 'pu-box-infantil-mural.jpg', alt: 'Box infantil', caption: 'Box infantil con mural' },
  { file: 'pu-doctora-atendiendo-paciente.jpg', alt: 'Atención en box', caption: 'Atención clínica en box' },
  { file: 'pu-fachada-calle-grifo.jpg', alt: 'Calle Brasil 321', caption: 'Calle Brasil, en pleno Pucón' },
] as const;
