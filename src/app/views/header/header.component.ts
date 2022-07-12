import { TokenService } from './../../core/service/token-service/token.service';
import { Router } from '@angular/router';
import { UserService } from './../../core/service/user-service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName!: string;

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.userName = this.tokenService.getUser();
    console.log(this.userName);
  }

  logout(){
    this.userService.logout();
    this.route.navigate(['/login']);
  }

}
