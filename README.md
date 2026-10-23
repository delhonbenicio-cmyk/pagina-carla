# Web de Carla Bill (versión clásica cálida)

Sitio estático: HTML, CSS y JS sin dependencias. Solo necesita internet para las tipografías de Google Fonts.

## Estructura

- `index.html`: contenido (textos, servicios, trayectoria, contacto, redes).
- `css/style.css`: diseño. Colores y tipografías están en `:root`, al principio.
- `js/main.js`: animaciones (aparición al scrollear y contadores). No hay nada para configurar.

## Qué cambiar

- **WhatsApp:** buscar `5491136491052` en `index.html` (aparece en los tres botones de WhatsApp). El número no se muestra en ningún texto de la página.
- **Mensaje que llega por WhatsApp:** en los links, lo que está después de `text=` (los espacios van como `%20`).
- **Instagram:** buscar `carlabillco` en `index.html` (enlace del inicio y pie de página).
- **Otras redes:** en el pie de página (`<nav class="redes">`), copiar el enlace de Instagram y cambiar link, ícono y nombre.
- **Años y promedio:** cada número aparece dos veces, en `data-count="16"` y entre las etiquetas. Cambiar ambos.
- **Servicios:** cada tarjeta está en `index.html`, sección `#servicios` (título, texto e ícono). Para sumar una, copiar un `<article>` completo.
- **Trayectoria:** sección `#trayectoria` de `index.html`.
- **Colores:** variables de `:root` en `css/style.css` (`--navy` es el color principal, `--brass` el dorado de las líneas; `--bg`, `--sand` y `--blush` son los fondos cálidos).

## Foto real

1. Guardar la foto en `img/carla.jpg` (crear la carpeta `img`).
2. En `index.html`, dentro de `<div class="pic">`, borrar el `<svg>` y poner `<img src="img/carla.jpg" alt="Carla Bill">`.
3. Agregar la clase `foto` a `<div class="frame">`: queda `class="frame foto"`.

## Publicarla

Sirve cualquier hosting de archivos estáticos (Netlify, GitHub Pages, Cloudflare Pages o el hosting que tenga). Se sube la carpeta completa.
