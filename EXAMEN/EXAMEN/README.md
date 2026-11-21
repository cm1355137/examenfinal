# Sitio web de la carrera: Ingeniería en Computación

Proyecto académico: página informativa con carrusel, menú, organigrama, descripción, modalidades, perfiles, áreas, plan de estudio por modalidad, reseñas y formulario de comentarios con base de datos en línea.

## 1. Tecnologías
| Capa | Herramienta |
|---|---|
| Estructura | HTML5 |
| Estilos | CSS3 (`css/styles.css`), responsive |
| Lógica | JavaScript (sin frameworks) |
| Base de datos | Supabase (PostgreSQL en línea, plan gratuito) |
| Hosting | Vercel (plan gratuito) |

## 2. Estructura
```
index.html        Página principal (10 secciones)
css/styles.css    Hoja de estilo
js/data.js        Contenido editable (carrera, planes, reseñas)
js/app.js         Carrusel, menú, pestañas y conexión a la BD
schema.sql        Tabla "comentarios" para Supabase
```

## 3. Cómo se cumple cada requisito
1. Carrusel informativo: `#inicio`, diapositivas automáticas con flechas y puntos.
2. Menú principal: barra fija superior, con versión móvil.
3. Organigrama: `#organigrama`, generado desde `DATA.organigrama`.
4. Descripción de la carrera: `#descripcion`.
5. Modalidades (turnos), duración y horarios: `#modalidades`, con línea de tiempo y tarjetas. Matutina 7 am – 12 pm, Vespertina 1 – 5 pm, Nocturna 6 – 8 pm.
6. Perfiles de salida: `#perfiles`.
7. Áreas de estudio: `#areas`.
8. Plan de estudio por modalidad: `#plan`, pestañas Matutina / Vespertina / Nocturna.
9. Reseñas: `#resenas`.
10. Formulario de comentarios: `#comentarios`, guarda y lista desde Supabase.

## 4. Base de datos (Supabase)
1. Crea una cuenta en https://supabase.com y un proyecto nuevo.
2. Ve a **SQL Editor**, pega el contenido de `schema.sql` y pulsa **Run**.
3. Ve a **Project Settings > API** y copia **Project URL** y la clave **anon public**.
4. Pégalas en `js/app.js` (`SUPABASE_URL` y `SUPABASE_KEY`).

La clave `anon` es pública por diseño; la seguridad la dan las políticas RLS de `schema.sql` (solo permiten leer e insertar, nunca borrar ni editar).

## 5. Publicación en Vercel
**Opción A (rápida):** instala Node.js y ejecuta en la carpeta del proyecto:
```
npm i -g vercel
vercel --prod
```
**Opción B (con GitHub):** sube la carpeta a un repositorio, entra a https://vercel.com, **Add New > Project**, importa el repositorio y pulsa **Deploy** (Framework: *Other*, sin comando de build).

Al terminar, Vercel entrega una URL pública `https://tu-proyecto.vercel.app`.

## 6. Personalizar
Todo el contenido está en `js/data.js`: cambia textos, horarios, plan de estudio y reseñas sin tocar el HTML.

## 7. Enlace del sitio publicado
_Pega aquí la URL de Vercel._
