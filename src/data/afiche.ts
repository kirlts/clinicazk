/* Afiche de membresía (2 caras) — copy verbatim de los 8 folletos, tal como aparece
   en el renderVals() de «Afiche v3.dc.html». */

import type { ClaveMembresia } from './membresias';
import { PASOS_INCORPORACION } from './membresias';

export type Etapa = { title: string; items: string[] };

export type Afiche = {
  name: string;
  tagMotto: string;
  tagline: string;
  sub: string;
  beneficios: { title: string; desc: string }[];
  ideal: string[];
  stages: Etapa[];
  ruta: string[];
};

export const AFICHES: Record<ClaveMembresia, Afiche> = {
  anticipa: {
    name: 'ZK Anticipa',
    tagMotto: 'Prevención que te respalda',
    tagline: 'Tu salud dental ya está en orden.',
    sub: 'Una membresía anual para ordenar tu salud dental, anticiparte mejor y mantener tus controles al día durante el año.',
    beneficios: [
      { title: 'Ordena tu salud dental', desc: 'Un plan claro para todo el año, sin improvisar.' },
      { title: 'Anticípate a la molestia', desc: 'Prevención y controles antes de que aparezca el dolor.' },
      { title: 'Respaldo todo el año', desc: 'Una atención de urgencia anual sin costo y tus controles siempre al día.' },
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
        items: ['Set personalizado de exámenes radiográficos iniciales.', '2 sesiones de evaluación y seguimiento al año.'],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          '2 atenciones anuales de higiene dental integral.',
          'Descuento en tratamientos de odontología general.',
          '1 atención de urgencia anual sin costo.',
        ],
      },
      { title: 'Confirmamos tu avance', items: ['Set personalizado de exámenes radiográficos de control.'] },
      { title: 'Recompensamos tu compromiso', items: ['1 blanqueamiento dental al cumplir 12 meses.'] },
    ],
    ruta: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Confirmamos tu avance', 'Recompensamos'],
  },

  familia: {
    name: 'ZK Familia',
    tagMotto: 'Cuidado compartido',
    tagline: 'Cuando se cuida uno, se cuidan todos.',
    sub: 'Una membresía anual para organizar el cuidado dental de todo tu grupo familiar, con orden, prevención y acompañamiento.',
    beneficios: [
      { title: 'Organiza el cuidado de todos', desc: 'Un plan familiar claro para el año.' },
      { title: 'Acompaña a cada integrante', desc: 'Controles y seguimiento para cada edad.' },
      { title: 'Más tranquilidad familiar', desc: 'Una atención de urgencia anual sin costo para cada integrante.' },
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
          'Set de exámenes radiográficos iniciales para cada integrante.',
          '2 sesiones de evaluación y seguimiento al año para cada integrante.',
        ],
      },
      {
        title: 'Ordenamos y cuidamos la salud dental de todos',
        items: [
          '2 atenciones anuales de higiene dental integral para cada integrante.',
          'Descuento en tratamientos de odontología general.',
          '1 atención de urgencia anual sin costo para cada integrante.',
        ],
      },
      {
        title: 'Sumamos cuidado preventivo para cada etapa',
        items: ['1 aplicación de flúor al año para niños.', 'Beneficios especiales en odontopediatría y ortodoncia.'],
      },
      {
        title: 'Confirmamos el avance de cada integrante',
        items: ['Set de exámenes radiográficos de control para cada integrante.'],
      },
      {
        title: 'Recompensamos el compromiso con el cuidado constante',
        items: ['1 blanqueamiento dental al cumplir 12 meses.'],
      },
    ],
    ruta: ['Entendemos a tu familia', 'Cuidamos a todos', 'Prevención por etapa', 'Confirmamos avance', 'Recompensamos'],
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
        items: ['Set personalizado de exámenes radiográficos iniciales.', '2 sesiones de evaluación y seguimiento al año.'],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          '2 atenciones anuales de higiene dental integral.',
          'Descuento en tratamientos de odontología general.',
          '1 atención de urgencia anual sin costo.',
        ],
      },
      {
        title: 'Te ayudamos a avanzar sin postergar',
        items: [
          'Beneficios especiales en endodoncia y periodoncia.',
          'Beneficios especiales en ortodoncia y estética dental.',
          'Prioridad en agenda.',
        ],
      },
      { title: 'Confirmamos tu avance', items: ['Set personalizado de exámenes radiográficos de control.'] },
      { title: 'Recompensamos tu compromiso', items: ['1 blanqueamiento dental al cumplir 12 meses.'] },
    ],
    ruta: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Avanzas sin postergar', 'Confirmamos avance', 'Recompensamos'],
  },

  total: {
    name: 'ZK Total',
    tagMotto: 'Mayor respaldo',
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
        items: ['Set de exámenes radiográficos iniciales.', '2 sesiones de evaluación y seguimiento al año.'],
      },
      {
        title: 'Ordenamos y cuidamos tu salud dental',
        items: [
          '2 atenciones anuales de higiene dental integral.',
          '20% de descuento en todos tus tratamientos dentales.',
          '2 atenciones de urgencia anuales sin costo.',
        ],
      },
      { title: 'Ampliamos tu respaldo', items: ['Controles de implantes incluidos.'] },
      { title: 'Confirmamos tu avance', items: ['Set de exámenes radiográficos de control.'] },
      { title: 'Recompensamos tu compromiso', items: ['1 blanqueamiento dental al cumplir 12 meses.'] },
    ],
    ruta: ['Entendemos tu caso', 'Ordenamos y cuidamos', 'Ampliamos tu respaldo', 'Confirmamos avance', 'Recompensamos'],
  },
};

export const COMO_USARLA = PASOS_INCORPORACION;

export const IMPORTANTE =
  'Las membresías Familia ZK no reemplazan la evaluación ni el diagnóstico profesional. Las prestaciones, exámenes, controles, tratamientos, urgencias y beneficios deberán utilizarse de acuerdo con la indicación clínica y las condiciones establecidas para cada membresía.';

export const VIGENCIA =
  'Duración anual. Las modalidades de pago a 3, 6 o 12 meses corresponden a formas de pago del compromiso anual y no a membresías de menor duración. El pago total anual en un solo acto comercial puede acceder a un 5% de descuento.';

/** Solo ZK Familia agrega condiciones propias. */
export const condicionesDe = (m: ClaveMembresia) =>
  m === 'familia'
    ? 'Disponible para grupos de dos o más personas, sin exigir una composición familiar tradicional. Incluye hasta cuatro integrantes en su configuración base y permite incorporar integrantes adicionales. El blanqueamiento al completar doce meses corresponde al titular y puede cederse una sola vez a otro integrante adulto mediante la documentación establecida por Clínica ZK.'
    : '';
