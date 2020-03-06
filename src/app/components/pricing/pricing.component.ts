import { Component, OnInit } from '@angular/core';
import { ICard } from '../../interfaces';

@Component({
  selector: 'neo-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  // TODO
  // Import cards from service

  cards: ICard[] = [{
    title: 'rxb',
    image: './assets/h_b.png',
    active: false,
    desc: {
      title: 'Everything is connected',
      content: 'And every stick has two ends. And both ends are connected by stick!'
    }
  }, {
    title: 'jpr',
    image: './assets/h_r.png',
    active: false,
    desc: {
      title: 'Did you know...',
      content: 'That your clock alarm is your intro song?'
    }
  }, {
    title: 'tcr',
    image: './assets/h_x.png',
    active: false,
    desc: {
      title: 'Advice for today',
      content: "Memes are good for soul and mind. Spend at least 1 hour per day on Reddit, 9GAG, or even 4chan. I won't judge."
    }
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
