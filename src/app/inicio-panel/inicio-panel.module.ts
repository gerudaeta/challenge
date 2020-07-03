import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { InicioPanelComponent } from './inicio-panel.component';

// ruta
import { inicioPanelRoutes } from './inicio-panel.routing';

// servicio
import {SitesService} from '../services/sites.service';

@NgModule({
  declarations: [InicioPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(inicioPanelRoutes)
  ],
  providers: [
    SitesService
  ]
})
export class InicioPanelModule { }
