import { Injectable, Output } from '@angular/core';
import { IBasket, ICard } from '../globals';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket: IBasket;
  @Output() basketChange: EventEmitter<IBasket> = new EventEmitter();
  modalVisible: boolean = false;
  constructor() {
    this.loadBasket();
  }

  loadBasket() {
    let storageBasket = localStorage.getItem('basket');
    if (storageBasket)
      this.basket = JSON.parse(storageBasket)
    else this.basket = {
      items: [],
      total: 0
    };
  }

  addToBasket(item: ICard) {
    this.basket.items.push(item);
    this.recalculateBasket();
    console.log(this.basket);
  }

  recalculateBasket() {
    let totalPrice = 0;
    for (let item of this.basket.items) {
      totalPrice += item.price
    }
    this.basket.total = totalPrice;
    localStorage.setItem('basket', JSON.stringify(this.basket));

    this.emitBasketChange();
  }

  public removeFromBasket(itemIndex) {
    this.basket.items.splice(itemIndex, 1);
    this.recalculateBasket();
  }

  emitBasketChange() {
    this.basketChange.emit(this.basket);
  }

  getBasketChange() {
    return this.basketChange;
  }
}
