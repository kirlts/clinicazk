# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/spec/v2.0.0.html).

## [Sin publicar]

### Pendiente
- Horarios oficiales de ambas sedes: hoy dicen "Pendiente de confirmación" (Clínica ZK).
- Listado de convenios vigentes y sus logos: los 6 slots son placeholders marcados (Clínica ZK).
- WhatsApp de Dirección Clínica: por confirmar (Clínica ZK).
- Imágenes por especialidad: el panel de especialidades aún no lleva foto.
- Contenido de la sección Privacidad: el modal muestra un aviso de sección en preparación.
- Dominio clinicazk.cl (pendiente de trámite).
- Widgets de Google Maps: diferidos por complejidad con dos sedes (reevaluar).
- Revisión de la versión móvil por el director en un teléfono real.
- Decisión sobre justificar párrafos: la comparativa está hecha y medida, falta que el director elija.

## [3.2.4] - 2026-07-31

### Corregido
- Las galerías de sucursales parpadeaban al cambiar de foto. El componente asignaba el nuevo `src` y reiniciaba el fundido en el mismo gesto, pero la foto todavía no había llegado: el navegador seguía pintando la anterior, así que **lo que se desvanecía y volvía era la foto que salía**, y sólo después aparecía la nueva. Ahora se espera a que la imagen esté descargada y decodificada antes de tocar el `<img>`, de modo que el fundido acompañe a la foto que entra, que es lo que pide el diseño. Medido: la opacidad de la foto saliente pasó de bajar a 0 a mantenerse en 1.
- Efectos del mismo arreglo, resueltos en el camino: las fotos vecinas se precargan cuando la galería entra en pantalla (no al cargar la página, para no encarecer la primera carga de Sucursales); la miniatura activa se marca al instante como acuse del toque, mientras el contador y el pie viajan con la foto para no describir nunca una imagen que no está en pantalla; las flechas navegan desde el índice ya solicitado, así cinco toques seguidos avanzan cinco fotos y no dos; y una ráfaga de toques deja de lanzar descargas que compiten entre sí.

### Verificado
- Con red normal y con red limitada a 400 KB/s: la miniatura responde en 1ms, la foto cambia en menos de 60ms y la saliente nunca se desvanece.
- Cinco toques rápidos avanzan exactamente cinco fotos, en las dos galerías, en escritorio y en teléfono. Contador, pie y miniatura quedan coherentes; el salto de la primera a la última funciona en ambos sentidos.
- `astro check`: 0 errores, 0 advertencias. Build en verde.

## [3.2.3] - 2026-07-31

> Redacción de datos de terceros en las fotografías, y un salto del popover de agenda.

### Cambiado
- **Todas las fotografías del sitio se revisaron una por una** (19 de sede y 13 retratos) buscando patentes, carteles de terceros y datos personales. Se difuminaron **13 zonas en 8 fotografías**: las 4 patentes que quedaban, el cartel "Hostal Graciela Hospedaje" del vecino de Pucón, los dos afiches de "Tecnorex Servicio Técnico", la placa de Transbank de la fachada de Los Ángeles y los logos de Masvida y Banmédica del pendón de recepción. Es un desenfoque gaussiano sobre rectángulos acotados, nunca un repintado generativo.
- El manifiesto de lo redactado vive en `tools/difuminar-fotos.py`, con las coordenadas, el motivo de cada zona y lo que se decidió **no** tapar. Permite reaplicarlo si una foto se reimporta desde el handoff, que las trae sin tratar.

### Corregido
- **Dos caras de pacientes en la sala de espera de Los Ángeles**, una de ellas de un niño, estaban publicadas y reconocibles. No formaban parte de lo pedido; aparecieron al revisar foto por foto. Difuminadas.
- El popover "Agenda tu evaluación" saltaba 150px hacia la izquierda al abrirse. La animación `zkfade` termina en `transform: none`, que mientras corre le gana al `translateX(-50%)` con que el popover se centra: durante 0.2s quedaba corrido a la derecha y luego saltaba a su lugar. En un teléfono eso lo dejaba medio fuera de pantalla. Se le dio una animación propia, `zkfade-centrado`, que lleva el centrado dentro de los keyframes. Medido antes y después: el salto pasó de 150px a 0.

### Verificado
- Cada zona tratada se revisó ampliada tras aplicar el desenfoque: no queda nada legible.
- El radio del desenfoque tiene techo a propósito. Sin él, un afiche grande de color plano quedaba como un rectángulo gris uniforme que se leía como bloque de censura en vez de vidrio esmerilado.
- La señalética de Clínica ZK, los diplomas del Dr. Vyhmeister y la radiografía en pantalla quedaron intactos: sí tienen que ver con la clínica o no exponen a nadie.
- `astro check`: 0 errores, 0 advertencias. Build en verde.

## [3.2.1] - 2026-07-31

> Dos correcciones pedidas por el director de marketing.

### Cambiado
- **Foto de fachada de Los Ángeles**: se reemplazó por la fotografía original. La que traía el handoff v3 estaba retocada con IA (cables borrados, autos borrados, cielo idealizado, la marca de agua del editor en la esquina) y el letrero circular de la torre mostraba un "ZK" genérico en vez del logo real. El director la objetó por eso y pidió volver a la anterior, autorizando dejarla con cables. No se intentó quitar los cables: hacerlo exige repintar la imagen, que es exactamente lo que produjo el problema. La foto se usa en el split del hero de Inicio y como primera imagen de la galería de Los Ángeles; ambas quedaron con la versión real.
- **FAB de WhatsApp**: dejó de ir directo al número de Pucón. Ahora abre un selector con las dos sucursales, igual que el popover de agenda, el bloque de contacto de Inicio y el menú móvil. Cada página conserva su propio mensaje prellenado (consulta general, orientación de membresías, convenios) y ahora lo aplica a ambas sedes. `WhatsAppFab` cambió su prop `href` por `hrefLa` y `hrefPu`.

### Corregido
- Las tres patentes visibles en la fotografía de Los Ángeles quedaron difuminadas. Es un desenfoque local sobre rectángulos acotados, no un repintado: no altera el carácter de la foto. Resuelve para esa toma el pendiente que ya estaba declarado.

### Verificado
- Comparación de página completa a 1440px contra el commit anterior: 5 de 7 páginas idénticas píxel a píxel, y las dos que difieren lo hacen **sólo** en la región de esa fotografía (el hero de Inicio y la galería de Los Ángeles). Ningún otro cambio se coló.
- El selector de sede abre en las 6 páginas que llevan FAB, a 320, 375 y 1440px: los dos enlaces apuntan a números distintos, conservan el mensaje de cada página, salen con `target="_blank" rel="noopener"`, cierran con Escape y el panel nunca se sale del viewport.
- Controles del FAB sobre el mínimo táctil de 44px en los cuatro anchos medidos (48 a 52px).
- Cero scroll horizontal, hit targets y texto en regla en las 7 páginas a 320, 375, 768 y 1024px.
- `astro check`: 0 errores, 0 advertencias. Build en verde.

## [3.2.0] - 2026-07-30

### Añadido
- Convenios y seguros queda marcada como sección todavía no habilitada, a la espera del listado de instituciones y sus logos. Sus cuatro accesos (header, menú móvil, índice del footer y celda de Inicio) se muestran deshabilitados. El estado vive en `RUTAS_PENDIENTES` (`src/data/navegacion.ts`): revertirlo es sacar la ruta de ese conjunto. Ver USER-DECISIONS UD-015.
- Las rutas marcadas como pendientes quedan fuera del sitemap y sirven `robots: noindex` mientras lo estén. La página sigue existiendo y sigue siendo alcanzable por URL directa.

### Corregido
- El split diagonal de sedes no funcionaba al tocarlo en un teléfono, por dos motivos distintos. El toque abría y cerraba la ficha en el mismo gesto, porque en táctil el navegador sintetiza `mouseenter` antes del `click`. Y la ficha salía cortada, porque el panel tenía alto fijo y un `clip-path` que recortaba el botón de WhatsApp entre 13 y 29px. El comportamiento de escritorio quedó idéntico, verificado paso a paso.
- Los dos botones de consulta del panel de especialidades venían anclados al borde derecho, heredado de la columna ancha de escritorio. Apilados en un teléfono dejaban los bordes izquierdos escalonados mientras el texto del panel iba a la izquierda. Pasan a ancho completo.

### Cambiado
- Las cuatro acciones del despliegue suben a su major vigente (`checkout` y `setup-node` a v7, `upload-pages-artifact` y `deploy-pages` a v5): las anteriores corrían sobre Node 20, retirado de los runners. Se revisaron los dos cambios rompientes de esos saltos y ninguno aplica a este repositorio.

## [3.1.0] - 2026-07-30

> Versión móvil completa. El handoff v3 declaraba que la versión móvil "todavía no está diseñada en detalle" y sólo fijaba reglas mínimas; el sitio se maquetaba para escritorio y en un teléfono el header se apilaba sobre el logo, las rejillas de dos y cuatro columnas se comprimían hasta dejar una palabra por renglón y el zoom base reducía el cuerpo a 13.6px reales.

### Añadido
- Capa responsiva propia en `src/styles/responsive/`, importada desde `Layout.astro` después de `global.css`: `base.css` (tokens y guardas), `chrome.css` (header, menú, footer, FAB), `componentes.css`, un archivo por página y `afiche.css`. Ver MASTER-SPEC §7.1.1.
- Menú móvil del header bajo 900px: botón hamburguesa, panel a pantalla completa con los 6 links y los accesos de WhatsApp de ambas sedes, con el CTA "Contacto" siempre visible fuera del panel. Incluye `aria-expanded`, `aria-controls`, cierre por Escape, por selección de link y al volver a escritorio, y bloqueo del scroll de fondo. Ver USER-DECISIONS UD-013.
- Breakpoints declarados: ≤1024px (tablet vertical), ≤900px (colapso del header), ≤767px (teléfono), ≤380px (teléfono angosto).

### Cambiado
- El zoom base `html { zoom: .8 }` vuelve a `1` bajo 1024px. Sobre ese ancho no cambia nada. Ver USER-DECISIONS UD-012.
- Patrones adaptados en teléfono, sin tocar el copy ni el orden de las secciones (USER-DECISIONS UD-014): el índice de especialidades pasa de maestro-detalle a lista apilada con desplazamiento al panel; las 4 membresías de Inicio pasan a carrusel con scroll-snap; el comparador de Familia ZK se apila por membresía; el split diagonal de sedes apila las dos mitades conservando el corte como costura horizontal; la tira de miniaturas de las galerías se vuelve deslizable con miniaturas de 64px; la tabla de datos de cada sede apila etiqueta y valor; el afiche A4 fluye a una columna en pantalla sin alterar su salida impresa.
- Los rótulos en versalitas (`--ls-eyebrow`) suben a 13px bajo 1024px, y todo control interactivo alcanza los 44px de alto que exige el handoff.
- Los títulos de columna del footer pasan de `<h4>` a `<h3>`: venían después de un `<h2>` y saltaban un nivel de jerarquía en las 7 páginas. El cambio no altera el pintado.

### Corregido
- La capa responsiva se aplicaba también al imprimir. Una hoja A4 mide 794px de ancho en CSS y cae dentro del breakpoint de 1024px, así que el `overflow-wrap: break-word` pensado para pantallas angostas partía el lema de ZK Seguimiento por la mitad de una palabra en el afiche impreso ("ACOMPAÑAMIENT / O CONSTANTE"). Toda media query de la capa pasó a `screen and (max-width: …)`. El defecto sólo apareció al comparar el PDF generado contra el del commit anterior; la inspección en pantalla no lo mostraba.

### Verificado
- Cero scroll horizontal, ningún control bajo 44px y ningún texto bajo 13px en las 7 páginas a 320, 375, 414, 768 y 1024px (35 combinaciones).
- Afiche impreso sin cambios: los 4 folletos generan 2 páginas A4 de 794x1123px, y las 8 páginas resultantes son **idénticas píxel a píxel** a las del commit anterior tras rasterizar los PDF a 100dpi.
- Teléfono en horizontal (812x375 y 667x375) e iPad en horizontal: sin scroll horizontal, y el panel del menú desplaza y deja alcanzable su último elemento pese a los 313px de alto disponibles.
- El escritorio quedó **idéntico píxel a píxel** al commit anterior: 21 comparaciones de página completa a 1280, 1440 y 1920px contra un worktree de referencia en `HEAD`, con animaciones congeladas para que la captura sea determinista. Es la contrapartida verificable de la regla de la capa: fuera del breakpoint no existe ninguna regla nueva.
- Menú móvil, modal del afiche, galerías, filtro de equipo y popover de agenda probados en emulación táctil.
- `astro check`: 0 errores, 0 advertencias. Build completo sin errores.

## [3.0.0] - 2026-07-29

> Rediseño completo alineado 1:1 con el design handoff "Clínica ZK v3". La v3 reemplaza a la v2: el sitio pasa de una página larga a seis páginas navegables.

### Añadido
- Seis páginas: Inicio (`/`), Familia ZK (`/familia-zk`), Sucursales (`/sucursales`), Equipo clínico (`/equipo-clinico`), Nosotros (`/nosotros`) y Convenios y seguros (`/convenios`).
- Página 404 con salida a Inicio y a ambas sedes.
- Afiche parametrizado en `/familia-zk/afiche?m=…`, con `&embed=1` para verse como hoja continua dentro del modal. Se exceptúa del zoom base porque tiene medida física (794px = A4).
- Header sticky con los 6 links en orden y estado activo (semibold teal con subrayado de 2px), más CTA de contacto.
- Footer de cuatro columnas con datos de ambas sedes, índice del sitio, disclaimer clínico y modal de Privacidad.
- Popover "Agenda tu evaluación" en el hero, con las dos sedes hacia WhatsApp.
- Página de Equipo clínico con las 13 fichas reales, Dirección Clínica destacada, filtro por sede y contador de profesionales (`?sede=` preselecciona el filtro).
- Galerías por sede con 10 fotos en Los Ángeles y 7 en Pucón, con flechas, contador, miniaturas y caption.
- Marca de agua del isotipo, una por página, salvo en Inicio.
- FAB de WhatsApp que aparece al salir de la portada (IntersectionObserver).
- Retratos del equipo y fotos nuevas de ambas sedes (`src/assets/equipo/`, `src/assets/fotos/`).

### Cambiado
- Especialidades: de 13 a 14, con gancho, descripción y disponibilidad por sede ("Solo Los Ángeles", "En Pucón, consultar agenda").
- Membresías: copy actualizado del Banco Textual; los porcentajes de descuento se retiraron salvo el 20% de ZK Total.
- Preguntas frecuentes: 9 en Inicio y un banco de 25 agrupado por tema para el bloque reutilizable.
- Datos de Los Ángeles: Avenida Gabriela Mistral **79** (antes 74) y teléfono (43) 223 0298.
- El contenido se reorganizó en un módulo por dominio dentro de `src/data/`.
- Las anclas de la v2 siguen resolviendo: `#nosotros` y `#membresias` son anclas de Inicio; `#sucursales`, `#convenios` y `#equipo` redirigen a su página nueva.

### Eliminado
- Formulario de contacto y toda referencia a correo electrónico: WhatsApp queda como único canal.
- La página única de la v2 y sus componentes de sección (`Hero`, `Specialties`, `Memberships`, `Clinic`, `Faq`, `Contact`), junto con `Button`, `Icon`, `AficheModal`, `AficheEmbed`, `Gallery`, `src/data/site.ts`, `src/data/membershipDetails.ts` y `src/lib/fotos.ts`.
- Siete fotos del handoff que ninguna vista referencia: el glob eager las copiaba al build sin usarse.

### Verificado
- `innerText` idéntico carácter por carácter entre prototipo y sitio en 15 de 16 escenarios (las 6 páginas, los 4 afiches, el modo embed, el popover de agenda, el cambio de especialidad y los dos filtros de equipo).
- La excepción es el 404: el prototipo lo renderiza sin header ni footer porque importa `ZKHeader`/`ZKFooter`, nombres que no existen en el bundle (son `ZKHeaderV3`/`ZKFooterV3`). El sitio lo implementa con el chrome compartido, que es lo que el archivo declara y lo que pide el handoff; el cuerpo de la página sí coincide carácter por carácter.
- Interacciones equivalentes en ambos lados: galerías, modal-afiche (Escape, clic fuera, `postMessage`), modal de Privacidad, aparición del FAB al salir de la portada.
- Toda diferencia de tamaño observada corresponde al factor 0.8 del zoom base del sitio.

## [2.0.0] - 2026-07-22

> Rediseño completo alineado 1:1 con el design handoff "Sitio Web Clínica ZK v2".

### Añadido
- Hero fijo con h1, franja de accesos rápidos a especialidades y fila de cierre "Un buen tratamiento empieza por un buen diagnóstico.".
- Especialidades como índice maestro-detalle interactivo (13 especialidades, agrupadas por sede, con botones de contacto por sede).
- Sección Clínica que reúne Nosotros, Equipo y dos galerías gemelas por sede (flechas, contador, miniaturas) con convenios integrados en el contacto de cada sede.
- Modal-afiche: "Ver más" abre el folleto de la membresía en hoja continua dentro de un iframe (`/afiche/[m]/`), con cierre por clic fuera, Escape o "Volver al sitio" (postMessage).
- Optimización de imágenes a webp con `astro:assets`; galerías por sede con fotos reales.
- Zoom base del sitio (`html { zoom: 0.8 }`): el 100% por defecto equivale al 80% preferido por el director.

### Cambiado
- Membresías: cabecera centrada, párrafo introductorio y tarjetas estilo V2.
- FAQ: rediseño compacto a dos columnas (6 preguntas).
- Contacto: formulario protagonista sobre gradiente, con WhatsApp por sede; campos ampliados (nombre, correo, teléfono, motivo, sede, mensaje).
- BranchSplit: foto real por sede anclada a su mitad; blurbs de sede del archivo aprobado.
- Ancho máximo del sitio a `min(1520px, 94vw)` para igualar el layout del diseño v2.

### Eliminado
- PromoBanner, AboutUs, Agreements y TeamPlaceholder (fusionados o descartados en el diseño v2).
- Ruta `/membresias/[m]/` y MembershipPoster (reemplazados por el modal-afiche y `/afiche/[m]/`).

## [1.0.0] - 2026-07-09

### Añadido
- Proyecto Astro v7 inicializado con TypeScript.
- Sistema de tokens de diseño CSS (colores, tipografía, espaciado, geometría, motion).
- Layout base con SEO, metas y fuentes.
- SiteHeader con navegación responsive (Especialidades, Membresías, Nosotros, Sucursales, Contacto).
- SiteFooter con datos de sucursales, enlaces WhatsApp y redes sociales.
- WhatsAppFab flotante.
- Hero con carrusel de 3 slides y CTAs.
- Sección de especialidades con 5 tarjetas (Ortodoncia, Periodoncia, Odontopediatría, Estética dental, Implantes).
- PromoBanner "Una nueva forma de cuidarnos".
- Sección de membresías con 4 tarjetas (ZK Anticipa, ZK Familia, ZK Seguimiento, ZK Total).
- Página dinámica de detalle de membresía con ruta, beneficios, perfil ideal y poster descargable.
- BranchSplit con diferenciación visual Los Ángeles / Pucón.
- Sección AboutUs (placeholder).
- Sección Agreements (placeholder).
- Sección TeamPlaceholder.
- FAQ con acordeón (4 preguntas).
- Sección de contacto con formulario y datos de sucursales.
- Configuración de GitHub Pages con deploy automático.
- Sitemap generado automáticamente.
