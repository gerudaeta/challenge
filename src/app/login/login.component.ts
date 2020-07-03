import { Component, OnInit } from '@angular/core';
import {UsuarioLogin} from '../model/usuarioLogin.model';
import {AuthService} from '../core/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioLogin;
  authenticationError: boolean;
  signinForm: FormGroup;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.creacionFormularioLogin();
  }

  creacionFormularioLogin(): void{
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signin(): void {
    const user = Object.assign({}, this.usuario, this.signinForm.value);

    console.log(user);
    this.authService.login(user).subscribe((value: any) => {
        console.log(value);
        this.authService.guardarToken(value);
        this.router.navigate(['/inicio']);
        this.authenticationError = false;
      },
      error => {
        this.authenticationError = true;
        // this.errorMsg = error.message;
        console.log('error al logearse');
        this.toastr.error('Error al logearse', 'Error!!');
      });
  }

}
