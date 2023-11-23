import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  isAdmin(): boolean {
    let result = this.loginService.hasPermission('ADMIN');
    return result;
  }

  isUser(): boolean {
    let result = this.loginService.hasPermission('USER');
    return result;
  }
}
