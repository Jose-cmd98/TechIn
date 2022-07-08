import { UserService } from './../user-service/user.service';
import { TokenService } from './../token-service/token.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { tap } from 'rxjs/operators';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService
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
    alert('logou')
  })
}


}
