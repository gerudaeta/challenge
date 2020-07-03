import { Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './login.component';

export const loginRoutes: Routes = [
  {
    path: '*',
    component: LoginComponent
  }
];
