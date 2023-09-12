import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import { AppUser } from 'src/app/modules/app-module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    collapsed = true; 
    appUser: AppUser;

    constructor(private afAuth : AuthService){
      afAuth.appUser$.subscribe(appUser => this.appUser= appUser);
    }

    logout(){
      this.afAuth.logout(); 
    }
}
