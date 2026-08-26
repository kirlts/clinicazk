/* Especialidades y servicios — copy literal del array ESPEC de «Inicio v3.dc.html».
   `g` abre un grupo (eyebrow); `sede` acota la disponibilidad:
   'la' = solo Los Ángeles · 'pucon' = solo Pucón · 'agenda' = en Pucón, consultar agenda. */

export type Especialidad = {
  g?: string;
  title: string;
  gancho: string;
  desc: string;
  extra?: string;
  sede?: 'la' | 'pucon' | 'agenda';
  /** `object-position` de la foto en la banda móvil, cuando el encuadre
      genérico (`center 30%`) corta al sujeto. Ver responsive/inicio.css. */
  encuadreMovil?: string;
};

export const ESPEC: Especialidad[] = [
  {
    g: 'Especialidades clínicas',
    title: 'Odontología general',
    gancho: 'El primer paso para comprender tu salud dental.',
    desc: 'Evaluación, diagnóstico, prevención y tratamiento de las necesidades odontológicas más frecuentes. Permite conocer el estado general de tu salud bucal y definir si necesitas continuar con alguna especialidad.',
  },
  {
    title: 'Odontopediatría',
    gancho: 'Un espacio pensado para que niñas y niños vivan una atención dental adecuada a su edad.',
    desc: 'Atención odontológica especialmente adaptada a la infancia, con profesionales que utilizan estrategias clínicas, comunicacionales y lúdicas para reducir el temor y favorecer una experiencia más tranquila.',
    extra: 'Los box cuentan con ambientación infantil, sillones dentales con diseño de dinosaurio, sistema de premios y acceso a dibujos animados durante la atención.',
  },
  {
    title: 'Ortodoncia',
    gancho: 'Alineación dental, función y seguimiento en el tiempo.',
    desc: 'Evaluación y tratamiento de la posición de los dientes y la mordida mediante una planificación personalizada, controles periódicos y acompañamiento durante las distintas etapas del proceso.',
  },
  {
    title: 'Endodoncia',
    gancho: 'Cuando el objetivo es tratar y conservar el diente.',
    desc: 'Tratamiento indicado cuando la parte interna del diente se encuentra afectada por caries profundas, lesiones o infecciones. Su finalidad es tratar el origen del problema y, cuando es clínicamente posible, conservar la pieza dental.',
  },
  {
    title: 'Periodoncia',
    gancho: 'El cuidado de las encías también sostiene tu salud dental.',
    desc: 'Evaluación, prevención y tratamiento de las enfermedades que afectan las encías y los tejidos que sostienen los dientes, especialmente ante inflamación, sangrado, movilidad o acumulación de cálculo dental.',
  },
  {
    title: 'Implantología',
    gancho: 'Alternativas para recuperar piezas dentales perdidas.',
    desc: 'Evaluación y planificación de tratamientos con implantes dentales para reemplazar dientes ausentes, de acuerdo con las condiciones clínicas y necesidades particulares de cada paciente.',
  },
  {
    title: 'Rehabilitación oral',
    gancho: 'Recuperar función, comodidad y confianza al sonreír.',
    desc: 'Planificación integral para restaurar dientes dañados, desgastados o ausentes, combinando diferentes tratamientos según las necesidades funcionales y estéticas de cada caso.',
    encuadreMovil: 'center top',
  },
  {
    title: 'Trastornos temporomandibulares',
    gancho: 'Evaluación de la articulación mandibular y los músculos asociados.',
    desc: 'Atención orientada a personas que presentan dolor mandibular o facial, ruidos articulares, dificultad para abrir la boca, molestias al masticar u otros síntomas relacionados con la articulación temporomandibular.',
    sede: 'la',
  },
  {
    title: 'Cirugía maxilofacial',
    gancho: 'Evaluación y tratamiento quirúrgico especializado.',
    desc: 'Atención de condiciones que requieren evaluación o procedimientos quirúrgicos relacionados con la cavidad oral, los maxilares y las estructuras asociadas, siempre de acuerdo con un diagnóstico previo.',
    sede: 'agenda',
  },
  {
    title: 'Estética orofacial',
    gancho: 'Armonía facial con evaluación profesional y criterio clínico.',
    desc: 'Tratamientos orientados al equilibrio y cuidado de la zona facial y perioral, mediante una planificación personalizada que considera las características y objetivos de cada paciente.',
    sede: 'pucon',
  },
  {
    g: 'Servicios preventivos y apoyo diagnóstico',
    title: 'Higiene dental integral',
    gancho: 'Limpieza dental integral y personalizada, adaptada a las necesidades de cada paciente.',
    desc: 'El procedimiento se realiza según la evaluación de cada persona y forma parte del cuidado preventivo y del seguimiento periódico de la salud dental.',
  },
  {
    title: 'Radiología e imágenes dentales',
    gancho: 'Un buen tratamiento comienza con información clara.',
    desc: 'Exámenes radiográficos y apoyo mediante imágenes para evaluar, diagnosticar y controlar distintas condiciones odontológicas. Clínica ZK cuenta con centro radiológico en Pucón y Los Ángeles.',
    extra: 'Puedes realizar tus exámenes en nuestras sedes aunque tu tratamiento odontológico se lleve a cabo en otro centro.',
  },
  {
    title: 'Urgencias odontológicas',
    gancho: 'Evaluación oportuna cuando aparece dolor o una situación inesperada.',
    desc: 'Atención para cuadros que requieren revisión prioritaria, como dolor intenso, inflamación, traumatismos, fracturas dentales o pérdida de una restauración. La disponibilidad deberá confirmarse directamente con cada sucursal antes de acudir.',
  },
  /* El cliente pidió (25-08-2026) mover Prótesis dentales desde Especialidades
     clínicas a este grupo. Queda al final por no haberse indicado posición. */
  {
    title: 'Prótesis dentales',
    gancho: 'Soluciones adaptadas para reemplazar o restaurar dientes.',
    desc: 'Diseño y adaptación de prótesis fijas o removibles destinadas a recuperar piezas dentales, mejorar la función masticatoria y favorecer una mayor comodidad en la vida cotidiana.',
  },
];

/** Etiqueta de disponibilidad mostrada sobre el título del panel. */
export const tagOf = (s: Especialidad) =>
  s.sede === 'la'
    ? 'Solo Los Ángeles'
    : s.sede === 'pucon'
      ? 'Solo Pucón'
      : s.sede === 'agenda'
        ? 'En Pucón, consultar agenda'
        : 'Pucón y Los Ángeles';

export const colorOf = (s: Especialidad) =>
  s.sede === 'pucon' ? 'var(--color-secondary)' : 'var(--zk-teal-600)';

/* Etiquetas rápidas del hero — [label, índice de especialidad | null → Familia ZK]. */
export const QUICK_LINKS: [string, number | null][] = [
  ['Evaluación odontológica', 0],
  ['Especialidades', 0],
  ['Radiografías', 11],
  ['Higiene dental integral', 10],
  ['Odontopediatría', 1],
  ['Urgencias', 12],
  ['Ortodoncia', 2],
  ['Prevención y seguimiento', null],
];
