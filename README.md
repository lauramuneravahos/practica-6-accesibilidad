# Práctica 6 — Accesibilidad web de la EPS de Zamora

Análisis de accesibilidad de la portada de la Escuela Politécnica Superior de Zamora (Universidad de Salamanca), siguiendo **WCAG 2.0 nivel AA** y añadiendo criterios de 2.1 y 2.2.

Práctica de la asignatura **Evaluación y Diseño de Interfaces**, del Grado en Ingeniería Informática en Sistemas de Información (GIISI). Octubre de 2026.

## Qué hay en el repositorio

| Carpeta / archivo | Contenido |
|---|---|
| `original/` | Versión analizada, con comentarios `I-01` … `I-25` en cada punto conflictivo |
| `modificado/` | Copia limpia de partida, sobre la que se aplican las correcciones |
| `imgs/` | 12 capturas anotadas con recuadro rojo discontinuo y número |
| `memoria.md` | Memoria: metodología, incidencias, soluciones y anexos |

La página son tres archivos (`index.html`, `styles.css` y `script.js`). Las imágenes se cargan desde URLs externas, así que no hay dependencias que instalar.

## Cómo verlo en local

```bash
python -m http.server 8765
```

- Original: <http://localhost:8765/original/index.html>
- Modificada: <http://localhost:8765/modificado/index.html>

## Metodología

- **Validadores**: T.A.W. y AChecker, WCAG 2.0 AA, escritorio, HTML y CSS. Se pasan sobre la versión publicada, porque analizan una URL.
- **Comprobaciones en local**: validador Nu del W3C y axe-core 4.10.2.
- **Revisión manual**: recorrido con teclado (Tab, Mayús+Tab, Intro, Espacio, Escape), árbol de accesibilidad, foco y cálculo de contraste.
- **Entorno**: Chrome de escritorio, ventana de 1280 × 900 px y zoom al 100 %.

## Resultados

**25 incidencias**: 7 críticas, 10 altas, 6 medias y 2 bajas. Solo 7 las detectan las herramientas automáticas; las otras 18 salen de la revisión manual.

Las críticas son: el idioma del documento está en inglés, el menú no se puede usar con teclado, el foco está eliminado, el formulario no tiene etiquetas, la etiqueta del *checkbox* apunta a otro campo, el botón de envío es un `<div>` y los enlaces sociales no tienen nombre accesible.

El detalle de cada una, con su criterio WCAG, la captura y la solución propuesta, está en [`memoria.md`](memoria.md).

## Estado

- [x] Análisis y memoria
- [x] Capturas anotadas
- [ ] Correcciones en `modificado/`
- [ ] Publicación y validación con T.A.W. y AChecker

## Documentación

`memoria.md` recoge el resumen de incidencias, el desarrollo de cada una, las soluciones con código, la verificación prevista y tres anexos: inventario de capturas, extractos del código con los problemas y criterios WCAG referenciados.

## Contexto académico

Trabajo de la asignatura *Evaluación y Diseño de Interfaces* (Grupo 8). El repositorio es público con fines académicos y el material no está pensado para reutilizarse fuera de ese contexto.
