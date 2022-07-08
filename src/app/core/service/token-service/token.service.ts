import { Injectable } from '@angular/core';

const KEY = 'authToken';
const KEY_USER = 'authUser';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  setToken(token: string){
    localStorage.setItem(KEY, token);
  }

  setUser(user: any){
    localStorage.setItem(KEY_USER, user);
  }

  getUser(){
    return localStorage.getItem(KEY_USER) ?? '';
  }

  hasToken(){
    return !!this.getToken();
  }

  destroyToken(){
    localStorage.clear();
  }

}
