import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {InicioPanelComponent} from './inicio-panel/inicio-panel.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: 'inicio',
        component: InicioPanelComponent,
        loadChildren: () => import('./inicio-panel/inicio-panel.module').then((m) => m.InicioPanelModule),
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
    pathMatch: 'full',
  }

];
