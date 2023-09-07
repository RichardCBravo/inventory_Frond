import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environments';
import { Injectable, inject } from '@angular/core';
import { AuthStatus, User } from '../interfaces';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject(HttpClient);

  public currentUser: User | null = null;
  public AuthStatus: AuthStatus = AuthStatus.checking;



  constructor() { }

  // Este metodo no es el si un login solo verifica que el usuario exita con una peticion get
  login(userName: string, userId: number) {

    const url = `${this.baseUrl}/users/${userId}`

    return this.http.get<User>(url)
      .pipe(
        tap((user: User) => {
          if (user.name === userName) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            return true;
          }
          return false;
        }),
        map(() => true),
        catchError(err => {
          return throwError(() => 'Error')
        })
      )

  }
}
