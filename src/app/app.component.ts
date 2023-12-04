import { Component } from '@angular/core';
import {ArcService} from './shared/arc.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public arcService: ArcService) {}
}
