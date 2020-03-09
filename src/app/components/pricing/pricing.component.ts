import { Component, OnInit } from '@angular/core';
import { ICard, GCards } from '../../globals';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'neo-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  cards: ICard[] = GCards;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  slideChanged(index: number) {
    console.info(`Slide changed to ${index}`);
  }

  buyProduct(productIndex) {
    this.basketService.addToBasket(this.cards[productIndex]);
  }

}
