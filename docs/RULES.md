# RULES: Clínica ZK

> Reglas operativas para agentes de IA que trabajan en este repositorio.
> Referenciado desde MASTER-SPEC §8.

---

## Alcance

Todas las operaciones en este repositorio y cualquier contexto invocado por el agente proveniente de Google Drive (carpeta "Web Clinica ZK").

---

## Reglas

1. **Fuente primaria:** El contexto del proyecto se obtiene de Google Drive (folder `1W9YIti9DEZHtA4v1Q3L97m8VkB9gFuGU`). Toda decisión de branding, contenido y diseño debe basarse en los archivos de ese Drive: manual de marca, manual DIDEMCO, bitácora, transcripciones, afiches de membresías, imágenes y logos. Ninguna decisión se toma sin consultar estas fuentes.

2. **Tono DIDEMCO:** Todo copy del sitio sigue el Manual Textual Operativo para Redes ZK: prevención, anticipación, orden, acompañamiento. Sin tecnicismos sin explicación. Sin emojis. Sin urgencia comercial. Sin em dash (—).

3. **Brand compliance:** Colores, tipografía (Source Sans), espaciado y geometría deben seguir el manual de marca ZK. Colores corporativos: teal #51B3AE (principal), purple #A98DB7 (secundario), gray #A3A3A3/#777777 (texto). Fondo blanco, texto gris, nunca negro.

4. **Mobile-first:** Todo componente debe funcionar y verse bien en pantallas desde 320px. El menú de navegación debe colapsar en mobile.

5. **Zero-backend:** No se permite backend, base de datos, SSR, API routes ni almacenamiento de datos de usuario. El formulario de contacto usa un servicio externo.

6. **Static-only:** El build debe generar HTML, CSS y JS estáticos. Despliegue en GitHub Pages.

7. **Sin mock data:** No se permite contenido simulado. Los placeholders son permitidos solo si van acompañados de una tarea explícita de purga en TODO.md con estado pendiente.

8. **Transcripciones como fuente:** Las transcripciones de audio (reuniones, notas de voz) en el Drive son fuente primaria de intención del cliente. Tienen prioridad sobre interpretaciones de la IA.

9. **Decisiones del cliente:** Las decisiones estratégicas del cliente se registran en USER-DECISIONS.md con formato ADR (5 campos obligatorios). No se implementan decisiones sin registro.
