import { HttpClient } from '@angular/common/http';
import { TokenService } from './../token-service/token.service';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  saveToken(token: string, user: string){
    this.tokenService.setToken(token);
    this.tokenService.setUser(user);
  }
  logout(){
    this.tokenService.destroyToken();
  }
  isLogged(){
    return this.tokenService.hasToken();
  }

  //create new user
  userRegister(createForm: any){
    return this.http.post(`${API}/auth/register`, createForm);
  }
}
