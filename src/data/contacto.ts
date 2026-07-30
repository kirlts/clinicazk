/* Contacto y canales — fuente única de los datos de sede.
   Copiado literal del renderVals() de los .dc.html de la v3: los números, las
   direcciones y los mensajes prellenados son especificación, no ejemplo. */

export type Sede = 'Los Ángeles' | 'Pucón';

export const WA: Record<Sede, string> = {
  'Los Ángeles': '56957906641',
  'Pucón': '56952194952',
};

/** Enlace de WhatsApp con mensaje prellenado. */
export const wa = (sede: Sede, msg: string) =>
  'https://wa.me/' + WA[sede] + '?text=' + encodeURIComponent(msg);

/** Consulta genérica por sede — usada en header/footer, 404 y contacto de Inicio. */
export const waConsultaSede = (sede: Sede) =>
  wa(sede, 'Hola, visité la página web de Clínica ZK y quisiera realizar una consulta sobre atención en ' + sede + '.');

export const sedes = {
  la: {
    nombre: 'Los Ángeles' as Sede,
    direccion: 'Avenida Gabriela Mistral 79',
    direccionLarga: 'Avenida Gabriela Mistral 79, Los Ángeles',
    telefono: '(43) 223 0298',
    whatsapp: '+56 9 5790 6641',
    instagram: '@clinicazk',
    instagramUrl: 'https://instagram.com/clinicazk',
    horario: 'Pendiente de confirmación',
  },
  pucon: {
    nombre: 'Pucón' as Sede,
    direccion: 'Brasil 321',
    direccionLarga: 'Brasil 321, Pucón',
    telefono: '+56 9 5219 4952',
    whatsapp: '+56 9 5219 4952',
    instagram: '@clinicazkpucon',
    instagramUrl: 'https://instagram.com/clinicazkpucon',
    horario: 'Pendiente de confirmación',
  },
} as const;

/* Degradados de botón por sede (idénticos a los .dc.html). */
export const GRAD_LA =
  'radial-gradient(130% 120% at 18% 0%, #63C6C0 0%, rgba(99,198,192,0) 55%), linear-gradient(105deg, #46B3AD 0%, #2E9A94 60%, #1E827D 100%)';
export const GRAD_PU =
  'radial-gradient(130% 120% at 18% 0%, #C8B0D4 0%, rgba(200,176,212,0) 55%), linear-gradient(105deg, #B094BF 0%, #916F9F 60%, #775A80 100%)';

export const gradSede = (sede: Sede) => (sede === 'Pucón' ? GRAD_PU : GRAD_LA);
