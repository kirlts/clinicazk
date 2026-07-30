/* Equipo clínico — copy y fichas literales de «Equipo clinico v3.dc.html».
   El orden del listado lo determina rankSedes(): primero quienes atienden en ambas
   sedes, después Los Ángeles y al final Pucón. */

import type { Sede } from './contacto';

export type Profesional = {
  name: string;
  area: string;
  sedes: Sede[];
  /** Dirección Clínica: se muestra aparte, en su propio bloque destacado. */
  dir?: boolean;
  /** Atiende en Pucón por fechas programadas: etiqueta y botón propios. */
  agendaPucon?: boolean;
  foto: string;
  bio: string;
  /** Segundo párrafo, solo en la ficha de Dirección Clínica. */
  bioDir?: string;
};

export const EQUIPO: Profesional[] = [
  {
    name: 'Dra. Romina Hernández',
    area: 'Endodoncia',
    sedes: ['Pucón'],
    dir: true,
    foto: 'pu-romina-hernandez.jpg',
    bio: 'Participa en la coordinación de criterios y procesos destinados a fortalecer una atención responsable, ordenada y coherente entre las distintas áreas de Clínica ZK.',
    bioDir:
      'En su práctica clínica desarrolla atención en endodoncia, orientada al tratamiento de piezas dentales cuya parte interna se encuentra afectada y que, según el diagnóstico, pueden conservarse mediante un tratamiento especializado.',
  },
  {
    name: 'Dra. Natalia Contreras',
    area: 'Odontopediatría',
    sedes: ['Pucón'],
    foto: 'pu-natalia-contreras.jpg',
    bio: 'Atención odontológica dirigida a niñas y niños, con énfasis en prevención, diagnóstico, desarrollo de hábitos y acompañamiento adaptado a las distintas etapas de la infancia.',
  },
  {
    name: 'Dra. Alejandra Guzmán',
    area: 'Estética orofacial',
    sedes: ['Pucón'],
    foto: 'pu-alejandra-guzman.png',
    bio: 'Evaluación y tratamientos orientados al cuidado y la armonía de la zona facial y perioral, mediante una planificación adaptada a las características y objetivos de cada paciente.',
  },
  {
    name: 'Dr. Karl Vyhmeister',
    area: 'Ortodoncia',
    sedes: ['Pucón', 'Los Ángeles'],
    foto: 'karl-vyhmeister.png',
    bio: 'Evaluación y tratamiento de la posición de los dientes y la mordida mediante planificación, controles periódicos y seguimiento durante las distintas etapas del proceso.',
  },
  {
    name: 'Dr. Tomás González',
    area: 'Implantología bucomaxilofacial',
    sedes: ['Los Ángeles', 'Pucón'],
    agendaPucon: true,
    foto: 'tomas-gonzalez.jpg',
    bio: 'Atención relacionada con implantología y procedimientos bucomaxilofaciales, de acuerdo con la evaluación, el diagnóstico y la planificación indicada para cada paciente. La atención en Pucón se realiza en fechas programadas y se encuentra sujeta a disponibilidad de agenda.',
  },
  {
    name: 'Dra. Catalina Neira',
    area: 'Trastornos temporomandibulares',
    sedes: ['Los Ángeles'],
    foto: 'la-catalina-neira.jpg',
    bio: 'Evaluación de molestias relacionadas con la articulación temporomandibular y los músculos asociados, como dolor mandibular o facial, ruidos articulares, dificultad de apertura o molestias al masticar.',
  },
  {
    name: 'Dra. Paola Jerez',
    area: 'Ortodoncia',
    sedes: ['Los Ángeles'],
    foto: 'la-paola-jerez.jpg',
    bio: 'Evaluación y tratamiento de la posición de los dientes y la mordida mediante una planificación personalizada y controles periódicos.',
  },
  {
    name: 'Dr. Manuel Gómez',
    area: 'Endodoncia',
    sedes: ['Los Ángeles'],
    foto: 'la-manuel-gomez.jpg',
    bio: 'Atención orientada al diagnóstico y tratamiento de piezas dentales cuya parte interna se encuentra afectada por caries profundas, lesiones o infecciones.',
  },
  {
    name: 'Dra. Gabriela Muñoz',
    area: 'Odontología general',
    sedes: ['Los Ángeles'],
    foto: 'la-gabriela-munoz.jpg',
    bio: 'Evaluación, diagnóstico, prevención y tratamiento de las necesidades odontológicas generales, junto con la orientación necesaria para determinar si el paciente debe continuar su atención en otra área clínica.',
  },
  {
    name: 'Dra. Karla Salazar',
    area: 'Odontopediatría',
    sedes: ['Los Ángeles'],
    foto: 'la-karla-salazar.jpg',
    bio: 'Atención odontológica dirigida a niñas y niños, con énfasis en prevención, diagnóstico, formación de hábitos y acompañamiento adaptado a las distintas etapas de la infancia.',
  },
  {
    name: 'Dra. Nicole Salcedo',
    area: 'Odontología general',
    sedes: ['Los Ángeles'],
    foto: 'la-nicole-salcedo.jpg',
    bio: 'Evaluación, diagnóstico, prevención y tratamiento de las necesidades odontológicas generales, junto con la orientación necesaria para definir los siguientes pasos del cuidado.',
  },
  {
    name: 'Dr. Andrés Moya',
    area: 'Periodoncia e implantología',
    sedes: ['Los Ángeles'],
    foto: 'la-andres-moya.jpg',
    bio: 'Evaluación y tratamiento de condiciones que afectan las encías y los tejidos que sostienen los dientes, junto con la planificación de alternativas de implantología cuando el caso clínico lo requiere.',
  },
  {
    name: 'Dra. Camila Sánchez',
    area: 'Rehabilitación oral, implantología y prótesis',
    sedes: ['Los Ángeles'],
    foto: 'la-camila-sanchez.jpg',
    bio: 'Planificación de tratamientos orientados a recuperar dientes dañados o ausentes, mejorar la función y abordar necesidades de rehabilitación mediante distintas alternativas clínicas y protésicas.',
  },
];

/** Orden canónico de sedes: los botones y etiquetas aparecen siempre en esta secuencia. */
export const ORDEN_SEDES: Sede[] = ['Los Ángeles', 'Pucón'];
export const ordenarSedes = (sedes: readonly Sede[]) => ORDEN_SEDES.filter((s) => sedes.indexOf(s) >= 0);

/** Agrupación por disponibilidad: ambas sedes (0), Los Ángeles (1), Pucón (2). */
export const rankSedes = (d: Profesional) => {
  const s = ordenarSedes(d.sedes);
  if (s.length > 1) return 0;
  return s[0] === 'Los Ángeles' ? 1 : 2;
};

export const FILTROS = ['Todo el equipo', 'Pucón', 'Los Ángeles'] as const;
export type Filtro = (typeof FILTROS)[number];
