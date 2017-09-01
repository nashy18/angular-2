import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../app.component.css']
})
export class LandingComponent {
  title = 'Landing';
  
  public items: Array<string>;

  constructor() {
    this.items = ["item1", "item2", "item3"]
  }

  public open(event, item) {
    alert('Open ' + item);
  }
}
