#!/usr/bin/env python3
"""Instala la foto nueva de Endodoncia como src/assets/especialidades/4.jpg.

POR QUE EXISTE
El cliente pidió (25-08-2026) reemplazar la imagen de Endodoncia del panel de
especialidades por una fotografía nueva que dejó en el Drive del proyecto. Las
fotos del panel se nombran por su posición en ESPEC (src/data/especialidades.ts)
y Endodoncia es la posición 4, así que el archivo destino es fijo. Este script
evita instalarla a mano: convierte a JPG si hace falta y muestra la banda que
quedará visible en móvil, donde el encuadre genérico ya cortó un rostro antes
(ver responsive/inicio.css, bloque de especialidades).

USO
    python3 tools/instalar-foto-endodoncia.py             # usa la imagen más
                                                          # reciente de ~/Descargas
    python3 tools/instalar-foto-endodoncia.py ruta/a.jpg  # o una ruta explícita

Tras instalar, revisar la vista previa que imprime: si la banda móvil corta al
sujeto, declarar `encuadreMovil` en la entrada de Endodoncia de
src/data/especialidades.ts, igual que hizo Rehabilitación oral.
"""
from PIL import Image
import glob
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTINO = os.path.join(RAIZ, 'src', 'assets', 'especialidades', '4.jpg')


def origen() -> str:
    if len(sys.argv) > 1:
        return sys.argv[1]
    candidatas = [
        p
        for ext in ('jpg', 'jpeg', 'png', 'webp')
        for p in glob.glob(os.path.expanduser(f'~/Descargas/*.{ext}'))
    ]
    if not candidatas:
        sys.exit('No hay imágenes en ~/Descargas. Descarga la foto del Drive primero.')
    return max(candidatas, key=os.path.getmtime)


ruta = origen()
im = Image.open(ruta)
print(f'Origen: {ruta}  ({im.size[0]}x{im.size[1]}, {im.mode})')
if im.size[0] < 900:
    sys.exit('Menos de 900px de ancho: el panel la muestra a 1100px. ¿Es la versión del Drive o una compartida por WhatsApp?')

im.convert('RGB').save(DESTINO, quality=92)
print(f'Instalada como {os.path.relpath(DESTINO, RAIZ)}')

# Vista previa de la banda móvil (375x225 CSS, object-fit cover, center 30%).
w, h = im.size
escala = max(375 / w, 225 / h)
oculto = h * escala - 225
arriba = oculto * 0.30 / escala
previa = os.path.join(RAIZ, 'banda-movil-endodoncia.jpg')
im.convert('RGB').crop((0, int(arriba), w, int(arriba + 225 / escala))).save(previa, quality=90)
print(f'Banda móvil en {os.path.relpath(previa, RAIZ)}: si corta al sujeto, declarar encuadreMovil en ESPEC.')
