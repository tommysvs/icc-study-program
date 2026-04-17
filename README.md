# Plan de estudio ICC

Aplicación web para visualizar el plan de estudio de Ingeniería en Ciencias de la Computación (ICC) de UNICAH, con progreso académico, promedio general, bloques por periodo y resaltado de prerrequisitos.

## Tecnologías

- React 19
- TypeScript
- Vite
- Less

## Funcionalidades

- Visualización del plan de estudio por bloques.
- Tarjetas de curso con código, nombre, créditos, estado y datos adicionales.
- Cálculo de progreso general y porcentaje de avance.
- Cálculo de promedio académico general.
- Resaltado de prerrequisitos y materias habilitadas al pasar el mouse.
- Bloques colapsables para secciones especiales.
- Modo oscuro persistente con `localStorage`.
- Despliegue automático a GitHub Pages.

## Estructura del proyecto

```text
src/
  app/                # Composición raíz y layout global
  components/         # Header, footer, sidebar, programa y UI reutilizable
  data/               # JSON del plan de estudio
  hooks/              # Carga de datos, métricas, relaciones y tema
  pages/              # Página principal del plan de estudio
  styles/             # LESS modularizado
  types/              # Tipos de TypeScript
  utils/              # Cálculos y helpers puros
public/
  img/                # Imágenes estáticas usadas por la app
.github/
  workflows/          # Deploy a GitHub Pages
```