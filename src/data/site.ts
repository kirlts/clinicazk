export const waLaLink = 'https://wa.me/56957906641';
export const waPuconLink = 'https://wa.me/56952194952';

export const navLinks = [
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'membresias', label: 'Membresías' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'sucursales', label: 'Sucursales' },
  { id: 'contacto', label: 'Contacto' },
];

export const heroSlides = [
  {
    lead: 'Tu salud dental,',
    accent: 'en orden',
    accentColor: 'var(--color-primary)',
    sub: 'Prevención, acompañamiento y respaldo clínico en Los Ángeles y Pucón.',
    cta: 'Agenda tu evaluación',
    href: '#contacto',
    imageGrad: 'var(--gradient-hero)',
  },
  {
    lead: 'Algunos reaccionan.',
    accent: 'Otros se anticipan.',
    accentColor: 'var(--color-secondary)',
    sub: 'Cuatro membresías anuales para cuidar tu salud dental con más orden y tranquilidad.',
    cta: 'Conoce Familia ZK',
    href: '#membresias',
    imageGrad: 'var(--gradient-brand)',
  },
  {
    lead: 'Cerca de ti,',
    accent: 'todo el año',
    accentColor: 'var(--color-primary)',
    sub: 'Los Ángeles y Pucón, con centro radiológico propio y equipo de especialistas.',
    cta: 'Ver sucursales',
    href: '#sucursales',
    imageGrad: 'var(--gradient-hero)',
  },
] as const;

export const specialties = [
  { icon: 'move-horizontal', title: 'Ortodoncia', desc: 'Alineación y mordida, en todas las edades.' },
  { icon: 'shield-check', title: 'Periodoncia', desc: 'Salud de encías y del soporte de tus dientes.' },
  {
    icon: 'baby',
    title: 'Odontopediatría',
    desc: 'Atención pensada para que niñas y niños vengan sin miedo — y quieran volver.',
  },
  { icon: 'sparkles', title: 'Estética dental', desc: 'Blanqueamiento y armonía de tu sonrisa.' },
  { icon: 'anchor', title: 'Implantes', desc: 'Rehabilitación fija, con controles incluidos si eres ZK Total.' },
] as const;

export const memberships = [
  {
    m: 'anticipa',
    name: 'ZK Anticipa',
    motto: 'Orden y prevención',
    headline: 'Tu salud dental ya está en orden.',
    tag: 'Para quien quiere partir con todo bajo control.',
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
    tag: 'Beneficios para dos o más integrantes.',
    hl: false,
    feats: [
      'Beneficios para cada integrante',
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
    tag: 'Nosotros te recordamos cada control.',
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
    tag: 'La cobertura más completa de Familia ZK.',
    hl: true,
    feats: [
      '20% dcto. en todos tus tratamientos',
      '2 urgencias anuales sin costo',
      'Controles de implantes incluidos',
      'Blanqueamiento al cumplir 12 meses',
    ],
  },
] as const;

export const faqs = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Por WhatsApp o teléfono en tu sucursal más cercana. Si eres parte de Familia ZK, indícalo al agendar para acceder a tus beneficios.',
  },
  {
    q: '¿Atienden urgencias dentales?',
    a: 'Sí, en ambas sucursales. Las membresías Familia ZK incluyen atenciones de urgencia anuales sin costo.',
  },
  {
    q: '¿Qué es Familia ZK?',
    a: 'Nuestro programa de membresías anuales: una forma más ordenada y tranquila de cuidar tu salud dental, con controles, limpiezas, descuentos y respaldo ante urgencias.',
  },
  {
    q: '¿Tienen convenios?',
    a: 'Trabajamos con convenios locales. Escríbenos para confirmar si el tuyo aplica en tu sucursal.',
  },
] as const;

export const branches = [
  {
    key: 'la',
    city: 'Los Ángeles',
    blurb: 'Nuestra sede mayor: varias especialidades, escáner y pabellón de cirugías.',
    address: 'Av. Gabriela Mistral 74',
    whatsapp: '+56 9 5790 6641',
  },
  {
    key: 'pucon',
    city: 'Pucón',
    blurb: 'En el sur, con box de atención y centro radiológico propio.',
    address: 'Brasil 321',
    whatsapp: '+56 9 5219 4952',
  },
] as const;
