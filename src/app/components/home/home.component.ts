import { Component, OnInit } from '@angular/core';
import { ICard, GCards } from './../../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'neo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  cards: ICard[] = GCards;

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
