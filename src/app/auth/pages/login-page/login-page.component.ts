import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    nameUser: ['Richard Bravo', [Validators.required]],
    idUser: ['1', [Validators.required]],
  })

  login() {

    const {nameUser, idUser} = this.myForm.value;

    this.authService.login(nameUser, idUser)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error:(error) => console.log(error)
      })

  }
}
