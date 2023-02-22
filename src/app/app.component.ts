import { Component } from '@angular/core';
import {ThoughtService} from './shared/thought.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public thoughtService: ThoughtService) {}
}
