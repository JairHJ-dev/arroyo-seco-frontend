# Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto Arroyo Seco Frontend! Esta guía te ayudará a empezar.

## 🤝 Cómo Contribuir

### 1. Fork y Clone
```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/tu-usuario/arroyo-seco-frontend.git
cd arroyo-seco-frontend
npm install
```

### 2. Crear una Rama
```bash
git checkout -b feature/nombre-de-tu-feature
```

### 3. Realizar Cambios
- Mantén el código limpio y documentado
- Sigue las convenciones establecidas
- Añade tests si es necesario

### 4. Commit y Push
```bash
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/nombre-de-tu-feature
```

### 5. Pull Request
- Crea un PR con descripción detallada
- Incluye screenshots si hay cambios visuales
- Referencia issues relacionados

## 📝 Estándares de Código

### Convenciones de Naming
```typescript
// Componentes: PascalCase
export class ClienteLoginComponent { }

// Servicios: PascalCase + Service
export class FavoritesService { }

// Archivos: kebab-case
cliente-login.component.ts
favorites.service.ts
```

### Estructura de Componentes
```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss']
})
export class ComponentNameComponent {
  // Propiedades públicas primero
  public property = 'value';
  
  // Propiedades privadas después
  private _internalProperty = false;
  
  // Constructor
  constructor(private service: ServiceName) {}
  
  // Métodos públicos
  public publicMethod(): void { }
  
  // Métodos privados
  private privateMethod(): void { }
}
```

### Estilos SCSS
```scss
// Usar variables CSS custom properties
:host {
  --primary-color: #1c66d6;
  --border-radius: 8px;
}

// Estructura BEM para clases
.component {
  &__element {
    &--modifier {
      // Estilos
    }
  }
}

// Mobile-first approach
.component {
  // Estilos base (móvil)
  
  @media (min-width: 768px) {
    // Tablet y desktop
  }
}
```

## 🧪 Testing

### Tests Unitarios
```bash
# Ejecutar tests
npm run test

# Tests en modo watch
npm run test:watch

# Coverage report
npm run test:coverage
```

### Convenciones de Tests
```typescript
describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do something specific', () => {
    // Arrange
    const expected = 'value';
    
    // Act
    component.method();
    
    // Assert
    expect(component.property).toBe(expected);
  });
});
```

## 📁 Estructura de Archivos

### Nuevos Componentes
```
src/app/alojamiento/components/nuevo-componente/
├── nuevo-componente.component.ts
├── nuevo-componente.component.html
├── nuevo-componente.component.scss
└── nuevo-componente.component.spec.ts
```

### Nuevos Servicios
```
src/app/shared/services/
├── nuevo-servicio.service.ts
└── nuevo-servicio.service.spec.ts
```

## 🎨 Guía de UI/UX

### Colores por Portal
```scss
// Admin - Azul
--admin-primary: #1c66d6;
--admin-hover: #1550a8;

// Oferente - Rojo
--oferente-primary: #c73619;
--oferente-hover: #a12810;

// Cliente - Rojo (mismo que oferente)
--cliente-primary: #c73619;
--cliente-hover: #a12810;
```

### Espaciado Consistente
```scss
// Sistema de espaciado basado en 0.25rem (4px)
--space-1: 0.25rem;  // 4px
--space-2: 0.5rem;   // 8px
--space-3: 0.75rem;  // 12px
--space-4: 1rem;     // 16px
--space-6: 1.5rem;   // 24px
--space-8: 2rem;     // 32px
```

## 🐛 Reportar Bugs

Al reportar bugs, incluye:
1. **Descripción clara** del problema
2. **Pasos para reproducir** el error
3. **Comportamiento esperado** vs actual
4. **Screenshots** si es relevante
5. **Entorno** (navegador, OS, versión)

## 💡 Proponer Features

Para nuevas funcionalidades:
1. **Busca** si ya existe un issue similar
2. **Describe** la funcionalidad propuesta
3. **Explica** el problema que resuelve
4. **Sugiere** la implementación si tienes ideas

## ❓ Preguntas

Si tienes dudas:
- Revisa la documentación primero
- Busca en issues cerrados
- Crea un nuevo issue con la etiqueta "question"

## 📋 Checklist para PRs

- [ ] El código compila sin errores
- [ ] Los tests pasan
- [ ] Se siguieron las convenciones de código
- [ ] Se actualizó la documentación si es necesario
- [ ] Se probó en diferentes navegadores
- [ ] Se incluyeron screenshots si hay cambios visuales

## 🏷️ Etiquetas de Issues

- `bug` - Errores del código
- `enhancement` - Mejoras de funcionalidades existentes
- `feature` - Nuevas funcionalidades
- `documentation` - Mejoras de documentación
- `good first issue` - Ideal para primeras contribuciones
- `help wanted` - Se busca ayuda de la comunidad

¡Gracias por contribuir al crecimiento del turismo en Arroyo Seco! 🏞️