import { Component } from '@angular/core';
import { slideInAnimation } from './router-animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  animationState: number;
  constructor(private route: ActivatedRoute) { }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }
}
