import { UserService } from './../user-service/user.service';
import { TokenService } from './../token-service/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

authentication(user: User){
  return this.http.post(`${API}/auth/login`, user).pipe(
    tap((res: any)=>{
      const user = res.user;
      const authToken = res.token
      this.userService.saveToken(authToken, user);
    })
  )
}

isAuthenticated(user: User){
  this.authentication(user).subscribe((res)=>{
    this.router.navigate(['']); // home
    this.showMessage('Login realizado com sucesso!');
  }, (error)=>{
    if(error.status === 403){
      this.showMessage('Email e senha Obrigatório!');
    }
    if(error.status === 404){
      this.showMessage('Usuário não existe!');
    }
    if(error.status === 400){
      this.showMessage('Senha inválida!');
    }
  })
}

showMessage(msg: string): void {
  this.snackBar.open(msg, "Close", {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: "top"
  })
}

}
