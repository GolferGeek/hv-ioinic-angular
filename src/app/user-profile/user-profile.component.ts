import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ThoughtService } from '../shared/thought.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent {
  constructor(public auth: AuthService, public thoughtService: ThoughtService) {


    this.auth.user$.subscribe((user) => {
      if (user) {
        this.thoughtService.getThoughts();
      }
    });

  }

}
