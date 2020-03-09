import { Component, OnInit } from '@angular/core';
import { ICard } from './../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  makeCardActive(cardIndex) {
    let card: ICard = null;

    for (let i in this.cards) {
      if (parseInt(i) !== cardIndex) {
        this.cards[i].active = false;
      } else card = this.cards[cardIndex];
    }

    card.active = true;

    console.log(this.cards);
  }

  goToProduct(index) {
    sessionStorage.setItem('currentSlide', index + '');
    this.router.navigate(['pricing']);
  }

}
