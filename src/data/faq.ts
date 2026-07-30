/* Preguntas frecuentes.

   Igual que con las membresías, el diseño trae DOS listas: la de Inicio (9 preguntas,
   array propio del renderVals()) y la de FaqBloqueV3 (25 preguntas agrupadas por tema).
   Varias comparten pregunta pero NO respuesta —por ejemplo «¿Atienden a niñas y niños?»
   cierra distinto en cada una—, así que se mantienen separadas. */

export type Pregunta = { q: string; a: string };
export type PreguntaTema = Pregunta & { t: TemaFaq };
export type TemaFaq = 'Atención' | 'Sucursales' | 'Familia ZK' | 'Convenios y seguros';

/** Acordeón de Inicio (#preguntas). */
export const FAQ_INICIO: Pregunta[] = [
  {
    q: '¿Cómo sé qué especialidad necesito?',
    a: 'No siempre es necesario identificar una especialidad antes de consultar. Si no sabes qué tipo de atención corresponde a tu caso, puedes comunicarte con recepción. Según tus antecedentes y el motivo de consulta, te orientaremos sobre el profesional o área clínica que puede ayudarte. En muchos casos, una evaluación odontológica general permite revisar la situación y definir los siguientes pasos.',
  },
  {
    q: '¿Puedo reservar una hora directamente desde la página web?',
    a: 'Por el momento, la página no realiza reservas automáticas. Los botones de contacto te dirigirán al WhatsApp de la sucursal seleccionada, donde recepción podrá informarte sobre profesionales, disponibilidad y horarios.',
  },
  {
    q: '¿Atienden urgencias odontológicas?',
    a: 'Sí, Clínica ZK recibe consultas por urgencias odontológicas, sujetas a disponibilidad clínica y de agenda. Si presentas dolor, inflamación, una fractura dental u otra situación inesperada, comunícate primero con la sucursal correspondiente. Recepción revisará la disponibilidad y te indicará cómo avanzar.',
  },
  {
    q: '¿Qué pasa si necesito atención de más de una especialidad?',
    a: 'Cuando un caso requiere la participación de distintas áreas, el equipo puede orientar y coordinar los siguientes pasos de acuerdo con el diagnóstico y la planificación clínica. El objetivo es que el paciente comprenda qué necesita, en qué orden debe avanzar y qué profesional participará en cada etapa.',
  },
  {
    q: '¿Atienden a niñas y niños?',
    a: 'Sí. La odontopediatría es una de las áreas centrales de Clínica ZK y está pensada especialmente para las necesidades emocionales y odontológicas de niñas y niños. Los box cuentan con decoración infantil, paredes con motivos especialmente diseñados para ellos, sillones dentales con forma de dinosaurio, sistema de premios y la posibilidad de ver dibujos animados durante la atención. Además, las odontopediatras utilizan estrategias clínicas, comunicacionales y lúdicas adaptadas a la infancia. La disponibilidad profesional deberá consultarse directamente con cada sucursal.',
  },
  {
    q: '¿Puedo realizarme radiografías en Clínica ZK aunque me atienda en otro centro?',
    a: 'Sí. Los centros radiológicos de Clínica ZK pueden realizar exámenes a pacientes de la clínica y también a personas que hayan sido derivadas desde otros centros o profesionales. Antes de asistir, debes consultar qué examen necesitas, sus requisitos y la disponibilidad de la sucursal.',
  },
  {
    q: '¿Qué diferencia existe entre las sucursales de Pucón y Los Ángeles?',
    a: 'Ambas sucursales pertenecen a Clínica ZK y comparten una misma forma de trabajar: claridad, responsabilidad clínica, cercanía y continuidad. Sin embargo, cada sede cuenta con profesionales, infraestructura y agendas propias. Algunas especialidades se encuentran disponibles de manera permanente en una ciudad y otras funcionan mediante fechas programadas. Antes de asistir, recomendamos confirmar la disponibilidad de la atención que necesitas en la sede correspondiente.',
  },
  {
    q: '¿Qué es Familia ZK?',
    a: 'Familia ZK es un ecosistema de membresías anuales creado para ayudar a personas y grupos familiares a organizar su cuidado dental, mantener la prevención y dar continuidad a sus controles durante el año. Existen cuatro alternativas: ZK Anticipa, ZK Familia, ZK Seguimiento y ZK Total. Cada una cuenta con prestaciones, beneficios y niveles de acompañamiento diferentes.',
  },
  {
    q: '¿Familia ZK es un seguro dental?',
    a: 'No. Familia ZK no es un seguro ni una cobertura total de tratamientos. Es un sistema de membresías anuales que incorpora prestaciones preventivas, controles y beneficios definidos según el plan elegido. Toda atención continúa sujeta a evaluación, diagnóstico e indicación clínica.',
  },
];

/** Banco completo de FaqBloqueV3, agrupado por tema. */
export const FAQ_BLOQUE: PreguntaTema[] = [
  {
    t: 'Atención',
    q: '¿Cómo sé qué especialidad necesito?',
    a: 'No siempre es necesario identificar una especialidad antes de consultar. Si no sabes qué tipo de atención corresponde a tu caso, puedes comunicarte con recepción. Según tus antecedentes y el motivo de consulta, te orientaremos sobre el profesional o área clínica que puede ayudarte. En muchos casos, una evaluación odontológica general permite revisar la situación y definir los siguientes pasos.',
  },
  {
    t: 'Atención',
    q: '¿Puedo reservar una hora directamente desde la página web?',
    a: 'Por el momento, la página no realiza reservas automáticas. Los botones de contacto te dirigirán al WhatsApp de la sucursal seleccionada, donde recepción podrá informarte sobre profesionales, disponibilidad y horarios.',
  },
  {
    t: 'Atención',
    q: '¿Atienden urgencias odontológicas?',
    a: 'Sí, Clínica ZK recibe consultas por urgencias odontológicas, sujetas a disponibilidad clínica y de agenda. Si presentas dolor, inflamación, una fractura dental u otra situación inesperada, comunícate primero con la sucursal correspondiente. Recepción revisará la disponibilidad y te indicará cómo avanzar.',
  },
  {
    t: 'Atención',
    q: '¿Qué pasa si necesito atención de más de una especialidad?',
    a: 'Cuando un caso requiere la participación de distintas áreas, el equipo puede orientar y coordinar los siguientes pasos de acuerdo con el diagnóstico y la planificación clínica. El objetivo es que el paciente comprenda qué necesita, en qué orden debe avanzar y qué profesional participará en cada etapa.',
  },
  {
    t: 'Atención',
    q: '¿Puedo realizarme radiografías en Clínica ZK aunque me atienda en otro centro?',
    a: 'Sí. Los centros radiológicos de Clínica ZK pueden realizar exámenes a pacientes de la clínica y también a personas que hayan sido derivadas desde otros centros o profesionales. Antes de asistir, debes consultar qué examen necesitas, sus requisitos y la disponibilidad de la sucursal.',
  },
  {
    t: 'Atención',
    q: '¿Atienden a niñas y niños?',
    a: 'Sí. La odontopediatría es una de las áreas centrales de Clínica ZK y está pensada especialmente para las necesidades emocionales y odontológicas de niñas y niños. Los box cuentan con decoración infantil, paredes con motivos especialmente diseñados para ellos, sillones dentales con forma de dinosaurio, sistema de premios y la posibilidad de ver dibujos animados durante la atención. Además, las odontopediatras utilizan estrategias clínicas, comunicacionales y lúdicas adaptadas a la infancia, con el objetivo de reducir el temor, generar confianza y favorecer una experiencia de atención más tranquila. La disponibilidad profesional deberá consultarse directamente con cada sucursal.',
  },
  {
    t: 'Atención',
    q: '¿Qué incluye una higiene dental integral?',
    a: 'Limpieza dental integral y personalizada, adaptada a las necesidades de cada paciente. La necesidad, frecuencia y oportunidad del procedimiento deberán ser determinadas mediante evaluación profesional.',
  },
  {
    t: 'Atención',
    q: '¿La cirugía maxilofacial está disponible en ambas sucursales?',
    a: 'La atención de cirugía maxilofacial está disponible en Los Ángeles. En Pucón se realiza mediante fechas programadas, de acuerdo con la disponibilidad profesional y la existencia de pacientes que requieran esta atención.',
  },

  {
    t: 'Sucursales',
    q: '¿Qué diferencia existe entre las sucursales de Pucón y Los Ángeles?',
    a: 'Ambas sucursales pertenecen a Clínica ZK y comparten una misma forma de trabajar: claridad, responsabilidad clínica, cercanía y continuidad. Sin embargo, cada sede cuenta con profesionales, infraestructura y agendas propias. Algunas especialidades se encuentran disponibles de manera permanente en una ciudad y otras funcionan mediante fechas programadas. Antes de asistir, recomendamos confirmar la disponibilidad de la atención que necesitas en la sede correspondiente.',
  },
  {
    t: 'Sucursales',
    q: '¿Dónde está ubicada Clínica ZK Los Ángeles?',
    a: 'Clínica ZK Los Ángeles se encuentra en Avenida Gabriela Mistral 79, Los Ángeles. Teléfono: (43) 223 0298. WhatsApp: +56 9 5790 6641.',
  },
  {
    t: 'Sucursales',
    q: '¿Dónde está ubicada Clínica ZK Pucón?',
    a: 'Clínica ZK Pucón se encuentra en Brasil 321, Pucón. Teléfono y WhatsApp: +56 9 5219 4952.',
  },
  {
    t: 'Sucursales',
    q: '¿Puedo realizarme radiografías aunque me atienda en otro centro?',
    a: 'Sí. Los centros radiológicos de Clínica ZK pueden realizar exámenes a pacientes de la clínica y también a personas derivadas desde otros centros o profesionales. Antes de asistir, debes consultar qué examen necesitas, sus requisitos y la disponibilidad de la sucursal.',
  },

  {
    t: 'Familia ZK',
    q: '¿Qué es Familia ZK?',
    a: 'Familia ZK es un ecosistema de membresías anuales creado para ayudar a personas y grupos familiares a organizar su cuidado dental, mantener la prevención y dar continuidad a sus controles durante el año. Existen cuatro alternativas: ZK Anticipa, ZK Familia, ZK Seguimiento y ZK Total. Cada una cuenta con prestaciones, beneficios y niveles de acompañamiento diferentes.',
  },
  {
    t: 'Familia ZK',
    q: '¿Familia ZK es un seguro dental?',
    a: 'No. Familia ZK no es un seguro ni una cobertura total de tratamientos. Es un sistema de membresías anuales que incorpora prestaciones preventivas, controles y beneficios definidos según el plan elegido. Toda atención continúa sujeta a evaluación, diagnóstico e indicación clínica.',
  },
  {
    t: 'Familia ZK',
    q: '¿Cómo puedo saber qué membresía va conmigo?',
    a: 'No todas las personas necesitan el mismo nivel de acompañamiento. Una encargada de Familia ZK puede explicarte las diferencias entre las cuatro membresías, revisar tu forma de cuidado y orientarte sobre la alternativa que podría ajustarse mejor a tus necesidades.',
  },
  {
    t: 'Familia ZK',
    q: '¿Cuánto dura una membresía Familia ZK?',
    a: 'Todas las membresías Familia ZK tienen una duración anual. Las opciones asociadas a 3, 6 o 12 meses corresponden a modalidades de pago del compromiso anual y no a membresías con una vigencia más corta. Las condiciones y prestaciones asociadas a cada modalidad serán informadas antes de la activación.',
  },
  {
    t: 'Familia ZK',
    q: '¿Qué medios de pago se aceptan?',
    a: 'Las membresías pueden pagarse mediante transferencia, tarjeta de débito, tarjeta de crédito y link de pago. Las modalidades y condiciones deberán confirmarse con la encargada de la sucursal.',
  },
  {
    t: 'Familia ZK',
    q: '¿Cuándo se aplica el descuento del 5%?',
    a: 'El descuento del 5% corresponde exclusivamente al pago total anual de una Membresía Familia ZK, realizado en un solo acto comercial. Puede aplicarse mediante transferencia, tarjeta de débito, link de pago o tarjeta de crédito en una sola cuota. Este beneficio no corresponde a un descuento adicional sobre otras prestaciones o tratamientos contratados fuera de las membresías. No se aplica cuando el pago anual se divide en cuotas o en distintos actos comerciales.',
  },
  {
    t: 'Familia ZK',
    q: '¿ZK Familia es solamente para padres e hijos?',
    a: 'No. ZK Familia puede ser utilizada por grupos de dos o más personas y no exige una composición familiar tradicional. Su configuración base permite incorporar hasta cuatro integrantes y también contempla la posibilidad de sumar integrantes adicionales, de acuerdo con las condiciones vigentes.',
  },
  {
    t: 'Familia ZK',
    q: '¿Las prestaciones de las membresías pueden utilizarse sin evaluación?',
    a: 'No. Las prestaciones, radiografías, controles, tratamientos y beneficios deben utilizarse de acuerdo con la evaluación y la indicación clínica. La membresía no reemplaza el diagnóstico profesional ni garantiza que todas las prestaciones sean necesarias para todos los pacientes.',
  },

  {
    t: 'Convenios y seguros',
    q: '¿Qué diferencia existe entre un convenio y un seguro complementario?',
    a: 'Un convenio institucional puede entregar descuentos o condiciones especiales definidas previamente con Clínica ZK. Un seguro complementario, en cambio, permite solicitar el reembolso de una parte del valor pagado, de acuerdo con la cobertura contratada por cada paciente.',
  },
  {
    t: 'Convenios y seguros',
    q: '¿Cómo sé si puedo utilizar un convenio?',
    a: 'Debes consultar si tu institución mantiene un convenio vigente con Clínica ZK y acreditar que perteneces a ella mediante la documentación correspondiente. Recepción confirmará las prestaciones, descuentos y condiciones aplicables antes de tu atención.',
  },
  {
    t: 'Convenios y seguros',
    q: '¿Todos los seguros pueden gestionarse en línea?',
    a: 'No. Algunas aseguradoras permiten ingresar la solicitud directamente desde la clínica, mientras que otras requieren que el paciente realice el proceso de forma manual. Puedes informarnos el nombre de tu aseguradora para revisar qué modalidad se encuentra disponible.',
  },
  {
    t: 'Convenios y seguros',
    q: '¿Clínica ZK garantiza que mi seguro aprobará el reembolso?',
    a: 'No. Clínica ZK puede facilitar la solicitud o entregar la documentación necesaria, pero la aprobación, cobertura y monto del reembolso dependen exclusivamente del plan y las condiciones de la aseguradora.',
  },
  {
    t: 'Convenios y seguros',
    q: '¿Puedo utilizar las prestaciones de una membresía para solicitar un reembolso en mi seguro?',
    a: 'Las prestaciones efectivamente pagadas podrán aparecer individualizadas en la documentación tributaria y, según el caso, podrán presentarse a un seguro o sistema de reembolso. El trámite deberá gestionarse de manera manual. La aceptación y el monto del reembolso dependen exclusivamente de las condiciones del seguro del paciente. Clínica ZK no puede garantizar su aprobación.',
  },
];

export const faqsDeTema = (tema: TemaFaq) => FAQ_BLOQUE.filter((f) => f.t === tema);
