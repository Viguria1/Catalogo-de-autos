#  Catálogo de Autos

##  Descripción

Aplicación web desarrollada con Angular que permite gestionar un catálogo de autos clasificados por marcas. Cuenta con sistema de login/registro, panel de administración, filtros, búsqueda, ordenamiento, detalle individual, CRUD completo y paginación por marca.

---

##  Tecnologías usadas

- Angular CLI version 19.2.15.
- TypeScript
- Firebase Authentication
- Firebase FirestoreDatabase
- AngularFire
- Bootstrap 5
- HTML5 + CSS3

---

##  Cómo instalar y ejecutar

1. Clona el repositorio:

```bash
git https://github.com/Viguria1/Catalogo-de-autos.git

cd Catalogo-de-autos
```

## INSTALA LAS DEPENDENCIAS:
```bash
npm install
```
## Ejecuta el proyecto en modo desarrollo:
```bash
ng serve
```
## Abre en tu navegador:
```bash
http://localhost:4200/
```

##  Arquitectura básica del proyecto
```bash
src/
│
├── app/
│   ├── components/
│   │   ├── autos/
│   │   ├── inicio/
│   │   ├── nuevos/
│   │   ├── sobre-nosotros/
│   │   ├── agregar-auto/
│   ├── pages/
│   │   ├──pagina-no-encontrada/
│   ├── services/
│   ├── interfaces/
│   ├── auth/
│   └── app.routes.ts
│
└── index.html
```

## URL DEL VIDEO DE PRESENTACION:
```bash
http:adbuhisdaasdad
```

##  AUTORES

Andy Yhonai Viguria Urpi — Trabajo Final de Angular 2025

Maicol Orosco Herhuay — Trabajo Final de Angular 2025

##  Generación de código (Scaffolding)

Angular CLI incluye potentes herramientas para generar código automáticamente. Para generar un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para ver la lista completa de esquemas disponibles (como components, directives o pipes), ejecuta:

```bash
ng generate --help
```

##  Compilar el proyecto

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y guardará los archivos resultantes en el directorio dist/. Por defecto, la compilación de producción optimiza tu aplicación para un mejor rendimiento y velocidad.

## Ejecutar pruebas unitarias

Para ejecutar pruebas unitarias con el framework Karma, utiliza el siguiente comando:

```bash
ng test
```

## Ejecutar pruebas end-to-end

Para ejecutar pruebas de extremo a extremo (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no incluye por defecto un framework de pruebas e2e. Puedes elegir el que se adapte mejor a tus necesidades.

## Recursos adicionales

Para más información sobre el uso de Angular CLI y una referencia completa de comandos, visita la página oficial: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
