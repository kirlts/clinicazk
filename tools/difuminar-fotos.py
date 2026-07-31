#!/usr/bin/env python3
"""Difumina patentes, carteles de terceros y caras de pacientes en las fotos del sitio.

POR QUE EXISTE
El director de marketing pidió (2026-07-31) difuminar todas las patentes que se
muestran en el sitio, sin excepción, y los carteles o información de terceros
ajenos a Clínica ZK. Este archivo deja constancia de qué se tapó y dónde, y
permite reaplicarlo si alguna fotografía se vuelve a importar desde el handoff
de diseño, que las trae sin tratar.

QUE HACE Y QUE NO
Es un desenfoque gaussiano sobre rectángulos acotados. No es un repintado
generativo: no inventa píxeles ni altera el carácter de la fotografía. Esa
distinción importa en este proyecto, porque la fotografía anterior de la fachada
de Los Ángeles se descartó justamente por estar retocada con IA.

CRITERIO
  patente   todas las patentes de vehículos, sin excepción, incluso las que ya
            son ilegibles a resolución nativa.
  tercero   carteles, logos e información de terceros: negocios vecinos, marcas
            de servicio, logos de instituciones que ZK no ha confirmado como
            convenio vigente.
  persona   caras identificables de quienes no son del equipo. No estaba en lo
            pedido: son personas sentadas en la sala de espera, es decir
            pacientes, y una de ellas es un niño.

QUE NO SE TAPO, Y POR QUE
  - Los diplomas del box de Los Ángeles: son del Dr. Karl Vyhmeister, del propio
    equipo, y por tanto sí tienen que ver con Clínica ZK.
  - La radiografía en pantalla del mismo box: no muestra ningún dato de paciente.
  - La agenda en la pantalla del retrato de la Dra. Sánchez: ilegible incluso
    ampliada seis veces.
  - Las marcas de los equipos dentales: son fabricantes, no carteles.

COMO SE OBTUVIERON LAS COORDENADAS
Superponiendo una rejilla de coordenadas reales sobre cada original y leyéndolas,
no estimándolas. Tras aplicar, cada zona se revisó ampliada para confirmar que no
queda nada legible.

USO
    python3 tools/difuminar-fotos.py            # aplica sobre src/assets/fotos/
    python3 tools/difuminar-fotos.py --revisar  # sólo informa, no escribe
"""
from PIL import Image, ImageFilter
import os
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOTOS = os.path.join(RAIZ, 'src', 'assets', 'fotos')

ZONAS = {
    'la-sede-cuadrada.png': [
        ('patente', (344, 812, 400, 838), 'Toyota gris estacionado al frente'),
        ('patente', (566, 820, 618, 844), 'SUV negro al centro'),
        ('patente', (918, 810, 960, 834), 'camioneta plateada a la derecha'),
    ],
    'pu-sede-cuadrada.png': [
        ('tercero', (206, 782, 320, 866), 'cartel Hostal Graciela Hospedaje'),
        ('patente', (1010, 814, 1058, 842), 'auto tras la reja'),
    ],
    'pu-fachada-vitrina-frontal.jpg': [
        ('tercero', (1016, 836, 1140, 1135), 'afiche Tecnorex Servicio Tecnico'),
    ],
    'pu-fachada-vitrina-acceso.jpg': [
        ('tercero', (980, 775, 1096, 1015), 'afiche Tecnorex Servicio Tecnico'),
    ],
    'pu-fachada-piedra-vitrina.jpg': [
        ('patente', (1130, 1228, 1172, 1258), 'auto blanco tras la reja'),
    ],
    'la-fachada-zk-acceso-rampa.jpg': [
        ('tercero', (944, 756, 1020, 828), 'placa Transbank'),
    ],
    'la-hall-recepcion-meson.jpg': [
        ('tercero', (0, 1170, 64, 1202), 'logo Masvida en el pendon'),
        ('tercero', (96, 1150, 154, 1180), 'logo Banmedica en el pendon'),
    ],
    'la-hall-recepcion-zona-infantil.jpg': [
        ('persona', (926, 962, 982, 1022), 'cara de mujer en sala de espera'),
        ('persona', (1020, 982, 1070, 1038), 'cara de nino en sala de espera'),
    ],
}


def radio_de(caja):
    """Radio proporcional a la zona, pero con techo.

    Sin techo, una zona grande y de color plano (un afiche) queda como un
    rectángulo gris uniforme que se lee como un bloque de censura. Con 16px el
    texto ya es ilegible (los trazos miden pocos píxeles) y la zona conserva su
    estructura de color, con aspecto de vidrio esmerilado.
    """
    lado_menor = min(caja[2] - caja[0], caja[3] - caja[1])
    return max(5, min(lado_menor // 3, 16))


def main():
    solo_revisar = '--revisar' in sys.argv
    total = 0
    for nombre, zonas in ZONAS.items():
        ruta = os.path.join(FOTOS, nombre)
        if not os.path.exists(ruta):
            print(f'AUSENTE  {nombre}')
            continue
        im = Image.open(ruta)
        alfa = im.getchannel('A') if im.mode == 'RGBA' else None
        rgb = im.convert('RGB')

        print(nombre)
        for tipo, caja, desc in zonas:
            r = radio_de(caja)
            print(f'  {tipo:8s} {str(caja):26s} r={r:3d}  {desc}')
            total += 1
            if not solo_revisar:
                rgb.paste(rgb.crop(caja).filter(ImageFilter.GaussianBlur(radius=r)), caja)

        if not solo_revisar:
            salida = rgb
            if alfa is not None:
                salida = rgb.convert('RGBA')
                salida.putalpha(alfa)
            salida.save(ruta, optimize=True)

    print(f'\n{total} zonas en {len(ZONAS)} fotografías'
          f'{" (sólo revisión, no se escribió nada)" if solo_revisar else ""}')


if __name__ == '__main__':
    main()
