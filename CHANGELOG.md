# Changelog

Todos los cambios importantes del proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2025-11-12

### Agregado
- Sistema completo de gestión turística con tres portales
- Portal Administrador con gestión de oferentes y notificaciones
- Portal Oferente con CRUD de alojamientos y gestión de reservas  
- Portal Cliente con búsqueda, favoritos, reservas y perfil
- Sistema de autenticación por roles
- Componentes standalone de Angular 19
- ToastService para notificaciones globales
- FavoritesService con persistencia en localStorage
- Diseño responsive unificado
- Routing con guards de autenticación
- Validación de formularios reactivos
- Sistema de búsqueda y filtrado avanzado
- Gestión completa de reservas con estados
- Centro de notificaciones por usuario
- Perfiles de usuario editables
- Galería de imágenes para alojamientos
- Sistema de rating y reviews
- Integración con mapas (preparado)

### Técnico
- Arquitectura modular con separación por dominios
- Componentes reutilizables en módulo shared
- Servicios con RxJS y Angular Signals
- SCSS con variables CSS personalizadas
- Optimizaciones de build para producción
- GitHub Actions para deployment automático
- Estructura de carpetas escalable
- Convenciones de código consistentes

### Diseño
- Sistema de diseño unificado con paleta de colores por rol
- Componentes UI consistentes (cards, botones, formularios)
- Animaciones y transiciones suaves
- Estados hover e interacciones táctiles
- Iconografía SVG optimizada
- Layout responsive para todos los dispositivos