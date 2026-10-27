# Reparto del trabajo pendiente

**Práctica 6 — Accesibilidad web de la EPS de Zamora**
Repositorio: <https://github.com/lauramuneravahos/practica-6-accesibilidad>

Estado de partida: las **25 incidencias** están analizadas y documentadas en `memoria.md`, pero **ninguna está corregida todavía**. El código de `modificado/` es aún idéntico al de `original/`.

> Documento de uso interno. Si no quieres que el reparto sea público, no lo subas al repositorio.

## Reglas para no pisarnos

Los tres vamos a tocar `index.html`, así que conviene trabajar siempre igual:

1. **Cada uno en su rama**, nunca directamente en `main`.
2. **No reordenar bloques ni reformatear** el archivo: cambiar solo las líneas de la incidencia.
3. **Un commit por incidencia**, con el ID delante: `I-09: corrige el solapamiento del menú`.
4. **`original/` no se toca.** Las correcciones van solo en `modificado/`.
5. Los merges se hacen **en orden 1 → 2 → 3**, para que los cambios de estructura entren primero.

## Marcas en el código

Cada corrección tiene ya un comentario delante, en `modificado/`, con el ID de la incidencia:

```html
<!-- I-09 · PENDIENTE: ... -->
```

```css
/* I-09 · PENDIENTE: ... */
```

```js
// I-09 · PENDIENTE: ...
```

Para localizarlas: `grep -n "I-" modificado/*` o buscar `PENDIENTE` con Ctrl+Mayús+F en VS Code.

**Cuando apliques una corrección, no borres el comentario: cámbialo de `PENDIENTE` a `APLICADO`.** Así queda a la vista qué se ha tocado, dónde y para qué:

```html
<!-- I-23 · PENDIENTE: añadir <meta name="viewport" ...> -->
<!-- I-23 · APLICADO: etiqueta meta viewport para que el móvil no escale la página -->
```

Hay tres estados posibles:

| Marca | Significado |
|---|---|
| `I-xx · PENDIENTE` | Falta por hacer |
| `I-xx · APLICADO` | Corregida; el comentario describe lo que se hizo |
| `I-xx · OK` | Se revisó y no hacía falta cambiar nada |

Las de `original/` son distintas: señalan **dónde está el problema**, no dónde va el arreglo.

## Cómo clonar y abrir el repositorio

Solo se hace la primera vez. Si ya lo tienes clonado, salta a «Cómo crear tu rama».

### 1. Comprueba que tienes Git

Abre una terminal (vale **Git Bash** o **PowerShell**) y escribe:

```powershell
git --version
```

Si responde con un número (`git version 2.x`), listo. Si dice que no se reconoce el comando, instala Git desde <https://git-scm.com/download/win> y vuelve a abrir la terminal.

### 2. Clona el repositorio

Sitúate en la carpeta donde guardes las prácticas y clona:

```powershell
cd ~/Documents
git clone https://github.com/lauramuneravahos/practica-6-accesibilidad.git
cd practica-6-accesibilidad
```

Se crea una carpeta `practica-6-accesibilidad` con todo dentro. Intenta **no clonarla dentro de OneDrive**: la sincronización automática se lleva mal con Git y acaba dando conflictos raros.

El repositorio es público, así que se descarga sin cuenta. Para **subir** cambios sí hay que ser colaborador: acepta la invitación que llega al correo o entra en el repositorio → *Settings → Collaborators*.

### 3. Ábrela en VS Code

```powershell
code .
```

Si `code` no funciona, abre VS Code y usa *File → Open Folder…*, o instala el comando desde VS Code con **Ctrl+Mayús+P** → «Install 'code' command in PATH».

Dentro de VS Code, abre la terminal integrada con **Ctrl+ñ** (o *Terminal → New Terminal*). Ya estarás en la carpeta del proyecto, sin necesidad de `cd`.

### 4. Mira la página en el navegador

```powershell
python -m http.server 8765
```

Y abre:

- Original: <http://localhost:8765/original/index.html>
- Modificada: <http://localhost:8765/modificado/index.html>

Deja esa terminal abierta mientras trabajas; el servidor se para con **Ctrl+C**. Para recargar sin caché, **Ctrl+F5**. Si `python` no se reconoce, prueba con `py -m http.server 8765`.

### 5. Comprueba dónde estás

```powershell
git status
git branch --show-current
```

Debe poner `main` y no listar ningún archivo modificado.

## Cómo crear tu rama (y no trabajar en `main`)

Cada uno tiene ya su nombre de rama:

| Persona | Rama |
|---|---|
| Laura | `fix/cabecera` |
| Iago | `fix/formulario` |
| Inés | `fix/contenido` |

### 1. Sitúate en la carpeta del proyecto

Si vienes de clonar, ya estás dentro. Si abres la terminal más tarde:

```powershell
cd ~/Documents/practica-6-accesibilidad
git status
git branch --show-current
```

Debe poner `main` y no debe aparecer ningún archivo modificado. Si sale algo, para y avisa: puede ser trabajo de otro compañero.

### 2. Actualiza `main` antes de bifurcar

```powershell
git switch main
git pull
```

### 3. Crea tu rama y cámbiate a ella

```powershell
git switch -c fix/cabecera
```

Cambia `cabecera` por `formulario` o `contenido` según el bloque. El `-c` crea la rama **y** te mete dentro. Compruébalo:

```powershell
git branch --show-current
```

Tiene que devolver tu rama. Si devuelve `main`, no sigas: repite el paso 3.

### 4. Trabaja y haz un commit por incidencia

```powershell
git add modificado
git commit -m "I-09: corrige el solapamiento del menú"
```

Mejor `git add modificado` (o el archivo concreto) que `git add .`, para no colar cambios que no tocan.

### 5. Sube tu rama, nunca `main`

```powershell
git push -u origin fix/cabecera
```

### 6. Abre el pull request

- En GitHub aparecerá el aviso **«Compare & pull request»**.
- Base: `main`. Compare: tu rama.
- Título: «Bloque 1 · cabecera y estructura»; en la descripción, los IDs que has tocado.
- **No lo mergees tú**: los merges los hace Laura en orden 1 → 2 → 3.

### 7. Cuando tu rama ya esté mergeada

```powershell
git switch main
git pull
git branch -d fix/cabecera
```

La rama remota se puede borrar desde el propio pull request con «Delete branch».

> **Si tu rama ya estaba creada** y `main` ha cambiado porque se ha mergeado otro bloque, actualízala antes de seguir:
>
> ```powershell
> git switch main
> git pull
> git switch fix/formulario
> git merge main
> ```
>
> Si Git avisa de conflictos, no borres nada: para y lo resolvemos entre los dos.

> **Nunca uses el botón «Commit to main» de la web de GitHub.** Todo pasa por una rama y un pull request.

## Si algo sale mal

| Situación | Qué hacer |
|---|---|
| `fatal: not a git repository` | Estás en otra carpeta: vuelve con `cd` a la de la práctica |
| `python` no se reconoce | Prueba `py -m http.server 8765` |
| `code` no se reconoce | Instálalo con Ctrl+Mayús+P → «Install 'code' command in PATH», o abre la carpeta desde *File → Open Folder…* |
| Has hecho cambios en `main` sin commitear | `git switch -c fix/cabecera`: los cambios se van contigo a la rama nueva |
| Has commiteado en `main` | `git branch fix/cabecera` y después `git reset --hard origin/main`; tu commit se queda en la rama |
| El `push` se rechaza | Alguien subió antes: `git pull --rebase` y reintenta. Si se lía, avisa |
| Te pide contraseña | Se autoriza en la ventana del navegador (Git Credential Manager); no escribas la contraseña de GitHub |

---

## Bloque 1 · Cabecera, navegación y estructura — Laura

| ID | Qué hay que hacer | Archivo |
|---|---|---|
| **I-01** | `<html lang="en">` → `<html lang="es">` | `index.html` |
| **I-02** | El `<h2>` del banner pasa a `<h1>`. Las secciones (`<h3>`) y el `<h6>` del formulario pasan a `<h2>`; los títulos de tarjeta, a `<h3>`. Hay que actualizar los selectores CSS que dependen de la etiqueta (`.hero-campus h2`, `.widget-box h3`, `.section-header h3`, `.newsletter-box h6`) | `index.html` + `styles.css` |
| **I-08** | Abrir el menú también con teclado: `:focus-within`, `aria-expanded` y cierre con `Escape` | `index.html` + `styles.css` + `script.js` |
| **I-09** | Arreglar la especificidad: `.main-nav ul.dropdown-content { display: none; }` y mostrar solo el panel del elemento activo | `styles.css` |
| **I-10** | Quitar `*:focus { outline: none }` y poner un `outline` visible en `:focus-visible` | `styles.css` |
| **I-15** | Los tres enlaces falsos pasan a `<a href>` o `<button>`; «Portal Estudiantes» deja de ser un `<span>` y de usar `alert()` | `index.html` + `script.js` |
| **I-22** | Enlace «Saltar al contenido» al principio del `body`, `aria-label` en los dos `<aside>` y un nombre para el banner (con `aria-label` en la sección ya cuenta como *landmark*; no lo metas dentro de `<main>`, que ya existe) | `index.html` + `styles.css` |
| **I-23** | `<meta name="viewport" content="width=device-width, initial-scale=1">` | `index.html` |

**Se considera terminado cuando:** se recorre el menú entero con Tab y con Intro/Espacio/Escape, el foco se ve en todos los elementos, no hay scroll horizontal a 1280 px y el documento se anuncia en español.

---

## Bloque 2 · Formulario, buscador y controles — Iago

| ID | Qué hay que hacer | Archivo |
|---|---|---|
| **I-06** | IDs únicos: `email-contact` para el correo y `accept-terms` para el checkbox | `index.html` |
| **I-11** | Buscador dentro de `<form role="search">`, con `<label class="sr-only">` para los dos campos y `type="search"` | `index.html` |
| **I-12** | `<label>` para nombre y correo, `required`, `autocomplete` y un mensaje de error sencillo | `index.html` + `styles.css` |
| **I-13** | La etiqueta del checkbox apunta a `accept-terms` | `index.html` |
| **I-14** | `<custom-checkbox>` → `<input type="checkbox" id="solo-vacantes">` con su `<label>`; corregir el texto que habla de «controles con forma circular» | `index.html` |
| **I-16** | `<div class="custom-btn">` → `<button type="submit" class="custom-btn">` y escuchar el evento `submit` del formulario en lugar del `click` | `index.html` + `script.js` |
| **I-24** | `type="email"` y `autocomplete="email"` en el correo | `index.html` |

Además, este bloque crea la clase **`.sr-only`** en `styles.css` (texto solo para lectores de pantalla). El bloque 3 la reutiliza, así que conviene que no la dupliquéis.

**Se considera terminado cuando:** se puede rellenar y enviar el formulario solo con teclado, cada campo tiene nombre y propósito, el checkbox responde a su etiqueta y el lector anuncia «botón» al llegar al envío.

---

## Bloque 3 · Contenido, imágenes y pie — Inés

| ID | Qué hay que hacer | Archivo |
|---|---|---|
| **I-03** | Color del logotipo a `#f3d2dc` o blanco (2,81:1 → 8,12:1) | `styles.css` |
| **I-04** | `.card-meta` de `#aaa` a `#595959` (2,32:1 → 7,00:1) | `styles.css` |
| **I-05** | `aria-label` en los tres enlaces sociales («Facebook de la EPS de Zamora», etc.) | `index.html` |
| **I-07** | Quitar el `<div>` de dentro del `<p>` y cerrar bien la etiqueta | `index.html` |
| **I-17** | Añadir el estado en texto («Plazas disponibles» / «Plazas restringidas») con `.sr-only`, sin depender del color | `index.html` |
| **I-18** | Reescribir los `alt` de las tarjetas 1 y 2: el primero es redundante, el segundo está vacío y la foto es informativa | `index.html` |
| **I-19** | Textos distintos y en español: «Ver el Grado en Ingeniería Informática», «Ver el Grado en Arquitectura Técnica»… | `index.html` |
| **I-20** | Quitar el `<audio autoplay>` y la regla `#bg-audio` | `index.html` + `styles.css` |
| **I-21** | Botones «Aceptar» y «Rechazar» que cierren el aviso, con `role="region"` y `aria-label` | `index.html` + `styles.css` + `script.js` |
| **I-25** | Quitar `target="_blank"` del PDF o avisar en el texto de que abre pestaña nueva | `index.html` |

**Ojo con el solape I-18 / I-19:** el `lang="en"` de los textos en inglés solo hace falta si se quedan en inglés. Como I-19 los pasa al español, al final no debería quedar ningún texto en inglés.

**Se considera terminado cuando:** los contrastes pasan la calculadora, ninguna imagen informativa queda sin `alt`, el aviso de cookies se puede cerrar y no queda audio automático.

---

## Tareas compartidas, en este orden

| # | Tarea | Quién | Cuándo |
|---|---|---|---|
| 1 | Merge de las tres ramas en `main` (orden 1 → 2 → 3) y resolución de conflictos | Laura | Al terminar los tres |
| 2 | Activar GitHub Pages: *Settings → Pages → Deploy from a branch*, rama `main`, carpeta raíz | Laura | Tras el merge |
| 3 | Pasar **T.A.W.** a las dos URLs y guardar capturas del resultado | Iago | Con Pages activo |
| 4 | Pasar **AChecker** a las dos URLs y guardar capturas | Inés | Con Pages activo |
| 5 | Volver a pasar el validador del W3C y axe-core sobre `modificado/` | Laura | Tras el merge |
| 6 | Actualizar la memoria: resultados reales en 3.1 y 5.2, marcar la lista de verificación del apartado 7 y revisar las conclusiones | Laura | Al final |
| 7 | Pruebas manuales: teclado completo, zoom al 200 % y ventana de 320 px de ancho | Los tres | Al final |

## Definición de terminado (para cualquier incidencia)

- [ ] El cambio está en `modificado/` y `original/` sigue intacto.
- [ ] Commit con el ID delante (`I-xx: ...`).
- [ ] Se puede usar con teclado y el foco se ve.
- [ ] Sin scroll horizontal a 1280 px; con zoom al 200 % no se pierde contenido.
- [ ] El validador no añade errores nuevos.

## Calendario sugerido

| Sesión | Qué se hace |
|---|---|
| 1 | Cada uno abre su rama y ataca sus incidencias críticas |
| 2 | Terminar el bloque y abrir el *pull request* |
| 3 | Merges, Pages y validadores |
| 4 | Memoria, pruebas finales y entrega |

## Registro de avance

| Bloque | Responsable | Incidencias | Estado |
|---|---|---|---|
| 1 · Cabecera y estructura | Laura | I-01, I-02, I-08, I-09, I-10, I-15, I-22, I-23 | Sin empezar |
| 2 · Formulario y controles | Iago | I-06, I-11, I-12, I-13, I-14, I-16, I-24 | Sin empezar |
| 3 · Contenido y pie | Inés | I-03, I-04, I-05, I-07, I-17, I-18, I-19, I-20, I-21, I-25 | Sin empezar |
| Validación y memoria | Laura | T.A.W., AChecker, W3C, axe-core | Pendiente de Pages |
