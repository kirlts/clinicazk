/* Familia ZK — tarjetas de membresía.

   OJO: el diseño trae DOS redacciones distintas para las mismas cuatro membresías.
   «Inicio v3.dc.html» (mbData) y «Familia ZK v3.dc.html» (MB) difieren en el gancho
   y en algunas viñetas ("por integrante" / "para cada integrante", "Beneficios" /
   "Beneficios especiales"). No se unifican: cada página usa la suya, tal cual. */

export type ClaveMembresia = 'anticipa' | 'familia' | 'seguimiento' | 'total';

export type TarjetaMembresia = {
  m: ClaveMembresia;
  name: string;
  motto: string;
  headline: string;
  tag: string;
  feats: string[];
  hl: boolean;
};

/** Redacción de la portada (Inicio). */
export const MB_INICIO: TarjetaMembresia[] = [
  {
    m: 'anticipa',
    name: 'ZK Anticipa',
    motto: 'Orden y prevención',
    headline: 'Tu salud dental ya está en orden.',
    tag: 'Una membresía anual para mantener tus controles al día, fortalecer la prevención y contar con una ruta simple de cuidado durante el año.',
    feats: [
      'Evaluación y apoyo radiográfico',
      'Dos atenciones anuales de higiene dental integral',
      'Descuento en tratamientos de odontología general',
      'Una atención de urgencia anual sin costo',
    ],
    hl: false,
  },
  {
    m: 'familia',
    name: 'ZK Familia',
    motto: 'Cuidado compartido',
    headline: 'Cuando se cuida uno, se cuidan todos.',
    tag: 'Una membresía anual para organizar el cuidado dental de grupos de dos o más personas, con beneficios para cada integrante.',
    feats: [
      'Evaluaciones, seguimiento y apoyo radiográfico por integrante',
      'Dos atenciones anuales de higiene dental integral por integrante',
      'Beneficios especiales en odontopediatría y ortodoncia',
      'Una atención de urgencia anual sin costo por integrante',
    ],
    hl: false,
  },
  {
    m: 'seguimiento',
    name: 'ZK Seguimiento',
    motto: 'Acompañamiento constante',
    headline: 'No tienes que acordarte de todo solo/a.',
    tag: 'Una membresía anual para quienes necesitan mayor continuidad, seguimiento activo y beneficios que les ayuden a no postergar sus controles.',
    feats: [
      'Prestaciones preventivas y radiográficas',
      'Dos atenciones anuales de higiene dental integral',
      'Beneficios en endodoncia, periodoncia, ortodoncia y estética dental',
      'Prioridad en agenda',
    ],
    hl: false,
  },
  {
    m: 'total',
    name: 'ZK Total',
    motto: 'Mayor respaldo',
    headline: 'Ahora puedes vivir tu salud dental con más tranquilidad.',
    tag: 'Una membresía anual para quienes buscan mayores beneficios, más respaldo ante urgencias y una ruta que también incorpora el seguimiento de implantes.',
    feats: [
      'Evaluaciones y apoyo radiográfico',
      'Dos atenciones anuales de higiene dental integral',
      'Descuento en todos los tratamientos dentales',
      'Dos atenciones de urgencia anuales sin costo',
      'Controles de implantes incluidos',
    ],
    hl: true,
  },
];

/** Redacción de la página Familia ZK, con su columna «para quién es» del comparador. */
export const MB_FAMILIA: (TarjetaMembresia & { para: string; color: string })[] = [
  {
    m: 'anticipa',
    name: 'ZK Anticipa',
    motto: 'Orden y prevención',
    headline: 'Tu salud dental ya está en orden.',
    tag: 'Una membresía anual para mantener tus controles al día, fortalecer la prevención y contar con una ruta simple de cuidado durante el año.',
    feats: [
      'Evaluación y apoyo radiográfico',
      'Dos atenciones anuales de higiene dental integral',
      'Descuento en tratamientos de odontología general',
      'Una atención de urgencia anual sin costo',
    ],
    hl: false,
    para: 'Para comenzar a ordenar y prevenir.',
    color: 'var(--zk-teal-500)',
  },
  {
    m: 'familia',
    name: 'ZK Familia',
    motto: 'Cuidado compartido',
    headline: 'Cuando se cuida uno, se cuidan todos.',
    tag: 'Una membresía anual para organizar el cuidado dental de grupos de dos o más personas, con beneficios para cada integrante y una ruta adaptada a distintas edades y necesidades.',
    feats: [
      'Evaluaciones, seguimiento y apoyo radiográfico para cada integrante',
      'Dos atenciones anuales de higiene dental integral por integrante',
      'Beneficios especiales en odontopediatría y ortodoncia',
      'Una atención de urgencia anual sin costo para cada integrante',
    ],
    hl: false,
    para: 'Para organizar el cuidado de dos o más personas.',
    color: 'var(--color-secondary)',
  },
  {
    m: 'seguimiento',
    name: 'ZK Seguimiento',
    motto: 'Acompañamiento constante',
    headline: 'No tienes que acordarte de todo solo/a.',
    tag: 'Una membresía anual para quienes necesitan mayor continuidad, seguimiento activo y beneficios que les ayuden a no postergar sus controles o tratamientos.',
    feats: [
      'Prestaciones preventivas y radiográficas',
      'Dos atenciones anuales de higiene dental integral',
      'Beneficios especiales en endodoncia, periodoncia, ortodoncia y estética dental',
      'Prioridad en agenda',
    ],
    hl: false,
    para: 'Para mantener continuidad con mayor acompañamiento.',
    color: '#C4C4C4',
  },
  {
    m: 'total',
    name: 'ZK Total',
    motto: 'Mayor respaldo',
    headline: 'Ahora puedes vivir tu salud dental con más tranquilidad.',
    tag: 'Una membresía anual para quienes buscan mayores beneficios, más respaldo ante urgencias y una ruta de cuidado que también incorpora el seguimiento de implantes.',
    feats: [
      'Evaluaciones y apoyo radiográfico',
      'Dos atenciones anuales de higiene dental integral',
      'Descuento en todos los tratamientos dentales',
      'Dos atenciones de urgencia anuales sin costo',
      'Controles de implantes incluidos',
    ],
    hl: true,
    para: 'Para acceder a beneficios más amplios y mayor respaldo.',
    color: '#6E6E6E',
  },
];

/** Pasos de «¿Cómo comenzar?» — comparte texto con la cara B del afiche. */
export const PASOS_INCORPORACION = [
  'Selecciona tu sucursal.',
  'Solicita orientación sobre la membresía que te interesa.',
  'Una encargada te explicará sus beneficios, condiciones y formas de pago.',
  'Si decides incorporarte, completaremos la activación y recibirás tu kit Familia ZK.',
  'Tu membresía quedará asociada a tu ficha para comenzar tu ruta de cuidado.',
];

export const MSG_ORIENTACION =
  'Hola, quisiera conocer las Membresías Familia ZK y recibir orientación para saber cuál podría ir conmigo.';

/* Degradados y acentos de la tarjeta (MembershipCardV2.jsx / MembershipTag del DS). */
export const ACCENTS: Record<ClaveMembresia, string> = {
  anticipa: 'var(--zk-anticipa)',
  familia: 'var(--zk-familia)',
  seguimiento: 'var(--zk-seguimiento)',
  total: 'var(--zk-total)',
};

export const GRAD: Record<ClaveMembresia, string> = {
  anticipa:
    'radial-gradient(130% 120% at 18% 0%, #63C6C0 0%, rgba(99,198,192,0) 55%), linear-gradient(105deg, #46B3AD 0%, #2E9A94 60%, #1E827D 100%)',
  familia:
    'radial-gradient(130% 120% at 18% 0%, #C8B0D4 0%, rgba(200,176,212,0) 55%), linear-gradient(105deg, #B094BF 0%, #916F9F 60%, #775A80 100%)',
  seguimiento:
    'radial-gradient(130% 120% at 18% 0%, #E2E3E4 0%, rgba(226,227,228,0) 55%), linear-gradient(105deg, #C6C8C9 0%, #ABADAF 55%, #909294 100%)',
  total:
    'radial-gradient(130% 120% at 18% 0%, #63676B 0%, rgba(99,103,107,0) 55%), linear-gradient(105deg, #4C5053 0%, #34383B 60%, #23262A 100%)',
};
