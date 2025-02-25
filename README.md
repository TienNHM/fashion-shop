# Sakai19

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Các bước thực hiện thêm một component mới

1. Tạo mới component:
```bash
ng generate component <component-name>
```

Ví dụ:
```bash
ng g c app/pages/products/product-list --standalone
```

Lệnh trên sẽ tạo ra một component mới có tên là `ProductListComponent` trong thư mục `app/pages/products`. Thêm `--standalone` để tạo ra một component không cần phụ thuộc vào một module nào khác.

2. Tạo Routing cho component mới:
Tạo mới file [product.routes.ts](src/app/pages/products/product.routes.ts) trong thư mục `app/pages/products` và thêm nội dung sau:

```typescript
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const productsRoutes: Routes = [
  { path: '', component: ProductListComponent },
];
```

3. Cập nhật file [app-routing.module.ts](src/app/app-routing.module.ts) để thêm routing cho component mới:

```typescript
export const appRoutes: Routes = [
    { path: 'products', loadChildren: () => import('./app/pages/products/product.routes').then(m => m.productsRoutes) },
    ...
];
```

4. Cập nhật API trong thư mục [service](src/app/pages/service/) nếu cần thiết.
- Thêm class/interface mới nếu cần thiết (cho DTO, request, response, ...).
- Thêm mới API service nếu cần thiết.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
