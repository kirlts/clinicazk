// Copy verbatim del afiche de cada membresía (AficheMembresia.dc.html / Membresias.zip).

export type MembershipKey = 'anticipa' | 'familia' | 'seguimiento' | 'total';

export const MEMBERSHIP_KEYS: MembershipKey[] = ['anticipa', 'familia', 'seguimiento', 'total'];

interface StageItem {
  text: string;
}

interface Stage {
  title: string;
  items: StageItem[];
}

interface MembershipData {
  name: string;
  tagMotto: string;
  tagline: string;
  sub: string;
  beneficios: { title: string; desc: string }[];
  ideal: string[];
  stages: Stage[];
  rutaLabels: string[];
}

const it = (text: string): StageItem => ({ text });

const DATA: Record<MembershipKey, MembershipData> = {
  anticipa: {
    name: 'ZK Anticipa',
    tagMotto: 'Prevención que te respalda',
    tagline: 'Tu salud dental ya está en orden.',
    sub: 'Una membresía anual para ordenar tu salud dental, anticiparte mejor y mantener tus controles al día durante el año.',
    beneficios: [
      { title: 'Ordena tu salud dental', desc: 'Un plan claro para todo el año, sin improvisar.' },
      { title: 'Anticípate a la molestia', desc: 'Prevención y controles antes de que aparezca el dolor.' },
      { title: 'Respaldo todo el año', desc: 'Urgencia cubierta y tus controles siempre al día.' },
    ],
    ideal: [
      'Quieres comenzar a cuidar tu salud dental con más orden.',
      'Prefieres prevenir antes de la molestia.',
      'Sueles postergar tus controles.',
      'Buscas una ruta anual simple.',
      'Valoras la tranquilidad de un respaldo.',
    ],
    stages: [
      {
        title: 'Entendemos tu caso desde el comienzo',
        items: [it('Set personalizado de exámenes radiográficos iniciales.'), it('2 sesiones de evaluación y seguimiento al año.')],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          it('2 limpiezas integrales personalizadas.'),
          it('10% de descuento en tratamiento dental general.'),
          it('1 atención de urgencia anual sin costo.'),
        ],
      },
      { title: 'Confirmamos tu avance', items: [it('Set personalizado de exámenes radiográficos de control.')] },
      { title: 'Recompensamos tu compromiso', items: [it('1 blanqueamiento dental al cumplir 12 meses.')] },
    ],
    rutaLabels: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Confirmamos tu avance', 'Recompensamos'],
  },
  familia: {
    name: 'ZK Familia',
    tagMotto: 'Cuidado compartido',
    tagline: 'Cuando uno se cuida, se cuidan todos.',
    sub: 'Una membresía anual para organizar el cuidado dental de todo tu grupo familiar, con orden, prevención y acompañamiento.',
    beneficios: [
      { title: 'Organiza el cuidado de todos', desc: 'Un plan familiar claro para el año.' },
      { title: 'Acompaña a cada integrante', desc: 'Controles y seguimiento para cada edad.' },
      { title: 'Más tranquilidad familiar', desc: 'Respaldo y urgencias cubiertas para el grupo.' },
    ],
    ideal: [
      'Cuidas la salud dental de 2 o más personas.',
      'Tu familia incluye niños, adolescentes o adultos.',
      'Suelen postergar sus controles.',
      'Buscan orden, prevención y acompañamiento.',
    ],
    stages: [
      {
        title: 'Entendemos el cuidado de tu familia desde el comienzo',
        items: [
          it('Set de exámenes radiográficos iniciales para cada integrante.'),
          it('2 sesiones de evaluación y seguimiento al año para cada integrante.'),
        ],
      },
      {
        title: 'Ordenamos y cuidamos la salud dental de todos',
        items: [
          it('2 limpiezas integrales personalizadas para cada integrante.'),
          it('10% de descuento en todo tratamiento dental general.'),
          it('1 atención de urgencia anual sin costo para cada integrante.'),
        ],
      },
      {
        title: 'Sumamos cuidado preventivo para cada etapa',
        items: [it('1 aplicación de flúor al año para niños.'), it('15% de descuento en ortodoncia y odontopediatría.')],
      },
      { title: 'Confirmamos el avance de cada integrante', items: [it('Set de exámenes radiográficos de control para cada integrante.')] },
      { title: 'Recompensamos el compromiso con el cuidado constante', items: [it('1 blanqueamiento dental al cumplir 12 meses.')] },
    ],
    rutaLabels: ['Entendemos a tu familia', 'Cuidamos a todos', 'Prevención por etapa', 'Confirmamos avance', 'Recompensamos'],
  },
  seguimiento: {
    name: 'ZK Seguimiento',
    tagMotto: 'Acompañamiento constante',
    tagline: 'No tienes que acordarte de todo solo/a.',
    sub: 'Una membresía anual para acompañarte de forma más constante, ayudarte a avanzar sin postergar y mantener tu salud dental al día.',
    beneficios: [
      { title: 'Te acompaña de forma constante', desc: 'Seguimiento activo durante todo el año.' },
      { title: 'Avanza sin postergar', desc: 'Beneficios para no dejar tratamientos a medias.' },
      { title: 'Más respaldo y prioridad', desc: 'Prioridad en agenda cuando lo necesitas.' },
    ],
    ideal: [
      'Quieres más tranquilidad con un respaldo todo el año.',
      'Te cuesta mantener tus controles en continuidad.',
      'Necesitas orden y seguimiento para avanzar.',
      'Buscas beneficios clínicos y prioridad en agenda.',
    ],
    stages: [
      {
        title: 'Entendemos tu caso desde el comienzo',
        items: [it('Set personalizado de exámenes radiográficos iniciales.'), it('2 sesiones de evaluación y seguimiento al año.')],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          it('2 limpiezas integrales personalizadas.'),
          it('10% de descuento en tratamiento dental general.'),
          it('1 atención de urgencia anual sin costo.'),
        ],
      },
      {
        title: 'Te ayudamos a avanzar sin postergar',
        items: [
          it('20% de descuento en endodoncia y periodoncia.'),
          it('10% de descuento en ortodoncia y estética dental.'),
          it('Prioridad en agenda.'),
        ],
      },
      { title: 'Confirmamos tu avance', items: [it('Set personalizado de exámenes radiográficos de control.')] },
      { title: 'Recompensamos tu compromiso', items: [it('1 blanqueamiento dental al cumplir 12 meses.')] },
    ],
    rutaLabels: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Avanzas sin postergar', 'Confirmamos avance', 'Recompensamos'],
  },
  total: {
    name: 'ZK Total',
    tagMotto: 'Más tranquilidad',
    tagline: 'Ahora puedes vivir tu salud dental con más tranquilidad.',
    sub: 'Una membresía anual para vivir tu salud dental con mayor cobertura, más respaldo y una experiencia de cuidado más tranquila durante todo el año.',
    beneficios: [
      { title: 'Mayor cobertura', desc: 'Descuentos amplios en todos tus tratamientos.' },
      { title: 'Más respaldo para avanzar', desc: 'Urgencias y controles de implantes incluidos.' },
      { title: 'Vívelo con tranquilidad', desc: 'Continuidad y acompañamiento todo el año.' },
    ],
    ideal: [
      'Buscas una ruta clara con poco tiempo.',
      'Quieres cobertura amplia y respaldo para avanzar.',
      'Quieres anticiparte y reducir preocupaciones.',
      'Tienes implantes y necesitas controles.',
    ],
    stages: [
      {
        title: 'Entendemos tu caso desde el comienzo',
        items: [it('Set de exámenes radiográficos iniciales.'), it('2 sesiones de evaluación y seguimiento al año.')],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          it('2 limpiezas integrales personalizadas.'),
          it('20% de descuento en todos tus tratamientos dentales.'),
          it('2 atenciones de urgencia anuales sin costo.'),
        ],
      },
      {
        title: 'Ampliamos tu cobertura de cuidado',
        items: [it('Controles de implantes incluidos.'), it('Set de exámenes radiográficos de control.')],
      },
      { title: 'Confirmamos tu avance', items: [it('Set de exámenes radiográficos de control.')] },
      { title: 'Recompensamos tu compromiso', items: [it('1 blanqueamiento dental al cumplir 12 meses.')] },
    ],
    rutaLabels: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Ampliamos cobertura', 'Confirmamos avance', 'Recompensamos'],
  },
};

export function getMembershipDetail(key: MembershipKey) {
  const d = DATA[key];
  const stages = d.stages.map((s, i) => ({ n: i + 1, title: s.title, items: s.items }));
  const ruta = d.rutaLabels.map((label, i) => ({ n: i + 1, label }));

  const comoUsarla = [
    'Escanea el QR y solicita orientación.',
    'Indica que quieres conocer ' + d.name + '.',
    'Elige tu sucursal: Pucón o Los Ángeles.',
    'Una encargada te ayudará a revisar si esta membresía se ajusta a tu forma de cuidarte.',
  ];
  if (key === 'total') comoUsarla.push('Al activarla, recibirás tu kit de incorporación.');

  const importante =
    key === 'total'
      ? 'ZK Total no reemplaza la evaluación clínica profesional. Las prestaciones, controles de implantes, indicaciones y urgencias estarán siempre sujetas al diagnóstico del equipo tratante.'
      : d.name + ' no reemplaza la evaluación clínica profesional. Las prestaciones, controles, indicaciones y urgencias estarán siempre sujetas al diagnóstico del equipo tratante.';

  return {
    membership: key,
    name: d.name,
    tagMotto: d.tagMotto,
    tagline: d.tagline,
    sub: d.sub,
    beneficios: d.beneficios,
    ideal: d.ideal,
    stages,
    ruta,
    rutaTitulo: 'Tu ruta de cuidado en ' + stages.length + ' etapas',
    comoUsarla,
    importante,
  };
}
