import { Routes } from '@angular/router';

// Componentes
import { InicioPanelComponent } from './inicio-panel.component';

export const inicioPanelRoutes: Routes = [
  {
    path: '*',
    component: InicioPanelComponent
  }
];
