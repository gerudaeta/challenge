import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { LoginComponent } from './login.component';

// Ruta
import { loginRoutes } from './login.routing';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class LoginModule { }
