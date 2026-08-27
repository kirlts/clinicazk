#!/usr/bin/env python3
"""Recorta e instala la foto de Endodoncia del panel de especialidades.

POR QUE EXISTE
El cliente entregó (25-08-2026) una fotografía nueva para Endodoncia. No se pudo
usar tal cual y este archivo deja constancia de por qué, igual que
`difuminar-fotos.py` la deja de qué se difuminó: el original vive fuera del
repositorio, así que sin esta nota el recorte sería una decisión invisible.

EL ORIGINAL Y SUS DOS PROBLEMAS
Llega en 2160x3840, es decir 9:16, formato de historia de redes sociales. Las
otras 13 fotos del panel son 4:5, la proporción de la columna en escritorio.

  1. Demasiado alta. La foto se sirve con `object-fit: cover` en una caja que
     va de 0.46 (tablet vertical) a 1.45 (banda de teléfono) según el ancho de
     pantalla. Un original 9:16 obliga a descartar tanto alto en las cajas
     cuadradas que el odontólogo quedaba fuera del cuadro.
  2. Trae el isotipo de Clínica ZK incrustado arriba a la derecha, sobre un
     badge circular blanco que ocupa y=165..545, x=1650..2000. Ninguna de las
     otras 13 fotos lleva marca de agua, y como la caja recorta distinto en
     cada ancho, el badge aparecía entero, cortado por la mitad o ausente según
     la pantalla. Un logo cortado se lee como un error de carga.

EL RECORTE Y POR QUE ESTE
Ventana vertical y=560..3260 sobre el original, ancho completo: 2160x2700, o
sea 4:5, la misma proporción del resto del panel.

  - 560 es la primera fila que deja el badge completamente fuera. Recortar más
    arriba lo parte; más abajo se pierde cabeza del odontólogo sin ganar nada.
  - 3260 conserva la cara de la paciente entera junto con el aislamiento
    absoluto azul, que es lo que hace que la escena se lea como endodoncia.

Lo que el recorte sí sacrifica: la parte alta del pelo del odontólogo. Con 4:5
no caben las dos caras completas (van de y=227 a y=3091, o sea 2864 px), y
entre cortar pelo o cortar la boca de la paciente se eligió el pelo.

BANDA DE TELEFONO
Ni siquiera con el recorte caben las dos caras en la banda de teléfono, que
muestra 1486 de las 2700 filas. Endodoncia declara `encuadreMovil:
'center 85%'` en `src/data/especialidades.ts`: la banda encuadra a la paciente
y las manos, y deja fuera al odontólogo entero en vez de mostrarle media cara
contra el borde superior.

USO
    python3 tools/instalar-foto-endodoncia.py ruta/al/original.png

Reaplica el mismo recorte si el original vuelve a bajarse del Drive. Tras
correrlo, revisar la banda de teléfono que imprime.
"""
from PIL import Image
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTINO = os.path.join(RAIZ, 'src', 'assets', 'especialidades', '4.jpg')

VENTANA = (0, 560, 2160, 3260)  # izquierda, arriba, derecha, abajo
ORIGINAL = (2160, 3840)

if len(sys.argv) < 2:
    sys.exit(__doc__.split('USO')[1].strip())

im = Image.open(sys.argv[1]).convert('RGB')
if im.size != ORIGINAL:
    sys.exit(
        f'El original medía {ORIGINAL[0]}x{ORIGINAL[1]} y este mide {im.size[0]}x{im.size[1]}. '
        'La ventana de recorte está en coordenadas del original, así que no aplica: '
        'recalcularla mirando dónde quedan el badge del isotipo y las dos caras.'
    )

rec = im.crop(VENTANA)
rec.save(DESTINO, quality=92, subsampling=0)
print(f'Instalada en {os.path.relpath(DESTINO, RAIZ)} ({rec.size[0]}x{rec.size[1]}, 4:5)')

# Banda de teléfono: 327x225 CSS, cover, con el encuadre declarado en ESPEC.
bw, bh, pos = 327, 225, 0.85
s = max(bw / rec.size[0], bh / rec.size[1])
top = (rec.size[1] * s - bh) * pos / s
previa = os.path.join(RAIZ, 'banda-movil-endodoncia.jpg')
rec.crop((0, int(top), rec.size[0], int(top + bh / s))).resize((bw * 2, bh * 2)).save(previa, quality=90)
print(f'Banda de teléfono (encuadre {int(pos * 100)}%) en {os.path.relpath(previa, RAIZ)}')
