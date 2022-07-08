import { UserService } from './../core/service/user-service/user.service';
import { AuthService } from './../core/service/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = 1;

  loginForm!: FormGroup;
  createForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
    this.createForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirmpassword: ['']
    })
  }

  logIn(){
    this.authService.isAuthenticated(this.loginForm.value);
  }
  register(){
    this.userService.userRegister(this.createForm.value).subscribe((res)=>{
      alert('Usuário criado com sucesso!');
      console.log(res);
    })

  }

  //create || login user logic to show the template
  loginUser(){
    this.login = this.login - 1;
  }
  createUser(){
    this.login = this.login + 1;
  }

}
