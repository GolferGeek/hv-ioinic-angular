import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ArcService } from '../shared/arc.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent {
  constructor(public auth: AuthService, public arcService: ArcService) {


    this.auth.user$.subscribe((user) => {
      if (user) {
        this.arcService.getArcs();
      }
    });

  }

}
