# 🏞️ Arroyo Seco Frontend

**Sistema integral de gestión turística para Arroyo Seco, Querétaro**

Una plataforma web completa construida con Angular 19 que permite la gestión de hospedajes turísticos a través de tres portales especializados.

[![Angular](https://img.shields.io/badge/Angular-19.2.15-red?style=flat&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Latest-pink?style=flat&logo=sass)](https://sass-lang.com/)

## 🎯 Características Principales

### 🔐 Sistema Multi-Portal
- **Portal Admin**: Gestión completa de la plataforma
- **Portal Oferente**: Administración de hospedajes y reservas
- **Portal Cliente**: Búsqueda y reserva de alojamientos

### ✨ Funcionalidades Destacadas
- 🏠 **Gestión de Alojamientos**: CRUD completo con galería de imágenes
- 📅 **Sistema de Reservas**: Booking en tiempo real con confirmaciones
- ⭐ **Favoritos**: Persistencia local de alojamientos preferidos
- 🔍 **Búsqueda Avanzada**: Filtros por precio, ubicación y rating
- 📱 **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- 🔔 **Notificaciones**: Sistema de toasts integrado
- 👤 **Perfiles de Usuario**: Gestión completa de información personal

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0+ 
- Angular CLI 19.2.15+
- Git

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/JairHJ-dev/arroyo-seco-frontend.git
cd arroyo-seco-frontend

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
src/
├── app/
│   ├── alojamiento/          # Módulo principal de hospedajes
│   │   ├── components/       # Componentes por portal
│   │   │   ├── admin-*/      # Componentes del portal admin
│   │   │   ├── oferente-*/   # Componentes del portal oferente
│   │   │   └── cliente-*/    # Componentes del portal cliente
│   │   └── services/         # Servicios de negocio
│   ├── shared/               # Componentes y servicios compartidos
│   │   ├── components/       # Componentes reutilizables
│   │   ├── services/         # Servicios globales
│   │   └── pipes/           # Pipes personalizados
│   └── core/                # Servicios core (auth, guards)
└── assets/                  # Recursos estáticos
```

### Tecnologías Utilizadas
- **Framework**: Angular 19 con Standalone Components
- **Estilos**: SCSS con variables CSS personalizadas
- **Routing**: Angular Router con guards de autenticación
- **Estado**: Servicios con RxJS y Signals
- **Build**: Angular CLI con optimizaciones de producción

## 📋 Portales del Sistema

### 🛡️ Portal Administrador
**Acceso**: `/admin/login`
- Dashboard con métricas generales
- Gestión de oferentes registrados
- Sistema de notificaciones
- Moderación de contenido

### 🏢 Portal Oferente
**Acceso**: `/oferente/login`
- Dashboard personalizado de hospedajes
- CRUD de alojamientos con galería
- Gestión de reservas en tiempo real
- Configuración de perfil empresarial
- Registro público de solicitudes

### 👤 Portal Cliente
**Acceso**: `/cliente/login`
- Búsqueda y filtrado de alojamientos
- Sistema de favoritos persistente
- Gestión de reservas personales
- Perfil de usuario editable
- Centro de notificaciones

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Admin**: Azul (`#1c66d6`) - Confianza y profesionalismo
- **Oferente**: Rojo (`#c73619`) - Energía y acción
- **Cliente**: Rojo (`#c73619`) - Calidez y hospitalidad

### Componentes UI
- Cards con sombras sutiles y bordes redondeados
- Botones con estados hover y animaciones
- Formularios con validación visual
- Toasts para feedback inmediato
- Modales para acciones críticas

## 📱 Funcionalidades por Portal

### Características del Cliente
```typescript
// Ejemplo: Sistema de Favoritos
@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<FavoriteAlojamiento[]>([]);
  favorites$ = this.favoritesSubject.asObservable();
  
  toggle(alojamiento: FavoriteAlojamiento) {
    // Lógica de persistencia en localStorage
  }
}
```

### Gestión de Reservas
- Estados: Activa, Completada, Cancelada
- Filtrado por fechas y estado
- Cancelación con confirmación modal
- Historial completo de transacciones

### Notificaciones Inteligentes
- Confirmaciones de reserva
- Recordatorios de check-in
- Ofertas personalizadas
- Actualizaciones del sistema

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo
npm run build          # Build de producción
npm run test           # Tests unitarios
npm run e2e            # Tests end-to-end

# Utilidades
npm run lint           # Linting del código
npm run analyze        # Análisis del bundle
```

## 🌐 Despliegue

### GitHub Pages (Automático)
El proyecto incluye GitHub Actions para deployment automático:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
```

### Build Manual
```bash
ng build --prod
# Los archivos estarán en dist/arroyo-seco-frontend/
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Convenciones de Commit
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Cambios de formato
- `refactor:` Refactorización de código
- `test:` Tests

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollo Frontend**: Angular + TypeScript
- **Diseño UX/UI**: Responsive Design
- **Arquitectura**: Modular y Escalable

## 🔗 Enlaces Útiles

- [Demo en vivo](https://jairhj-dev.github.io/arroyo-seco-frontend/) *(próximamente)*
- [Documentación de Angular](https://angular.io/docs)
- [Guía de contribución](./CONTRIBUTING.md)
- [Changelog](./CHANGELOG.md)

---

**Desarrollado con ❤️ para el turismo en Arroyo Seco, Querétaro**
