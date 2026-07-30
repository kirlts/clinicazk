/* Sucursales — galerías, infraestructura y datos de contacto de cada sede.
   Literal de «Sucursales v3.dc.html»: 10 fotos en Los Ángeles, 7 en Pucón. */

export type Foto = { src: string; alt: string };

export const LA_PHOTOS: Foto[] = [
  { src: 'la-sede-cuadrada.png', alt: 'Fachada de Clínica ZK Los Ángeles en Avenida Gabriela Mistral 79.' },
  { src: 'la-fachada-zk-acceso-rampa.jpg', alt: 'Acceso con rampa de Clínica ZK Los Ángeles.' },
  { src: 'la-hall-recepcion-meson.jpg', alt: 'Mesón de recepción de Clínica ZK Los Ángeles.' },
  { src: 'la-hall-recepcion-zona-infantil.jpg', alt: 'Zona infantil en el hall de recepción de Los Ángeles.' },
  { src: 'la-pasillo-interior-puertas.jpg', alt: 'Pasillo interior con acceso a los box de atención.' },
  { src: 'la-box-sillon-radiografia-pantalla.jpg', alt: 'Box de atención con sillón dental y radiografía en pantalla.' },
  { src: 'la-radiologia-equipo-panoramico.jpg', alt: 'Equipo de radiografía panorámica del centro radiológico de Los Ángeles.' },
  { src: 'la-radiologia-panel-control.jpg', alt: 'Panel de control del centro radiológico de Los Ángeles.' },
  { src: 'la-odontopediatria-mural-dinosaurios.jpg', alt: 'Box de odontopediatría con mural de dinosaurios.' },
  { src: 'la-odontopediatria-mural-marino.jpg', alt: 'Box de odontopediatría con mural marino.' },
];

export const PU_PHOTOS: Foto[] = [
  { src: 'pu-sede-cuadrada.png', alt: 'Fachada de Clínica ZK Pucón en Brasil 321.' },
  { src: 'pu-fachada-vitrina-frontal.jpg', alt: 'Vitrina frontal de Clínica ZK Pucón.' },
  { src: 'pu-fachada-piedra-vitrina.jpg', alt: 'Fachada de piedra y vitrina de la sede Pucón.' },
  { src: 'pu-fachada-vitrina-acceso.jpg', alt: 'Acceso principal de Clínica ZK Pucón.' },
  { src: 'pu-box-sillon-adulto.jpg', alt: 'Box de atención de adultos en Clínica ZK Pucón.' },
  { src: 'pu-box-infantil-mural.jpg', alt: 'Box infantil con mural en Clínica ZK Pucón.' },
  { src: 'pu-doctora-atendiendo-paciente.jpg', alt: 'Atención clínica en box de Clínica ZK Pucón.' },
];

export type ItemInfra = { t: string; d: string };

export const LA_INFRA: ItemInfra[] = [
  {
    t: 'Especialidades odontológicas',
    d: 'Atención en distintas áreas clínicas para niñas, niños, jóvenes y adultos, según disponibilidad profesional y evaluación previa.',
  },
  {
    t: 'Centro radiológico',
    d: 'Exámenes radiográficos e imágenes de apoyo para diagnóstico, planificación y control de tratamientos.',
  },
  {
    t: 'Escáner',
    d: 'Tecnología de apoyo para procedimientos y evaluaciones que requieren registros digitales, según indicación clínica.',
  },
  {
    t: 'Pabellón de procedimientos quirúrgicos',
    d: 'Espacio destinado a intervenciones que requieren condiciones clínicas y protocolos específicos.',
  },
  {
    t: 'Atención coordinada',
    d: 'Posibilidad de articular distintas áreas cuando el diagnóstico o tratamiento necesita la participación de más de un profesional.',
  },
];

export const PU_INFRA: ItemInfra[] = [
  {
    t: 'Dos box de atención',
    d: 'Espacios clínicos preparados para evaluaciones, tratamientos y controles de distintas áreas odontológicas.',
  },
  {
    t: 'Centro radiológico',
    d: 'Exámenes radiográficos e imágenes dentales para pacientes de Clínica ZK y también para personas derivadas desde otros centros.',
  },
  {
    t: 'Especialidades odontológicas',
    d: 'Atención de distintas áreas clínicas de acuerdo con la agenda y disponibilidad de los profesionales.',
  },
  { t: 'Ubicación central', d: 'La sede se encuentra en Brasil 321, en el centro de Pucón.' },
  {
    t: 'Agendas programadas',
    d: 'Algunas prestaciones especializadas, como cirugía maxilofacial, se realizan en fechas definidas según disponibilidad profesional y demanda de pacientes.',
  },
];

export type DatoSede = { k: string; v: string };

export const LA_DATOS: DatoSede[] = [
  { k: 'Dirección', v: 'Avenida Gabriela Mistral 79, Los Ángeles' },
  { k: 'Teléfono', v: '(43) 223 0298' },
  { k: 'WhatsApp', v: '+56 9 5790 6641' },
];

export const PU_DATOS: DatoSede[] = [
  { k: 'Dirección', v: 'Brasil 321, Pucón' },
  { k: 'Teléfono y WhatsApp', v: '+56 9 5219 4952' },
];

/* Split diagonal del hero de Inicio. */
export const BRANCHES = [
  {
    key: 'la',
    city: 'Los Ángeles',
    blurb: 'Especialidades, escáner, pabellón de procedimientos quirúrgicos y centro radiológico propio.',
    address: 'Avenida Gabriela Mistral 79',
    whatsapp: '+56 9 5790 6641',
    photoSrc: 'la-sede-cuadrada.png',
  },
  {
    key: 'pucon',
    city: 'Pucón',
    blurb: 'Dos box de atención, especialidades y centro radiológico propio, en el centro de Pucón.',
    address: 'Brasil 321',
    whatsapp: '+56 9 5219 4952',
    photoSrc: 'pu-sede-cuadrada.png',
  },
] as const;
