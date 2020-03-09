import { Component, OnInit } from '@angular/core';
import { ICard, Card } from '../../globals';
import { BasketService } from '../../services/basket.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'add-to-basket-modal',
  templateUrl: './add-to-basket-modal.component.html',
  styleUrls: ['./add-to-basket-modal.component.scss']
})
export class AddToBasketModalComponent implements OnInit {
  newProduct: ICard;

  constructor(private basketService: BasketService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.newProduct = new Card;
    document.body.style.overflow = "hidden";
  }

  ngOnDestroy() {
    document.body.style.overflow = "auto";
  }

  convertImage(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
        this.newProduct.image = reader.result;
      };
    }
  }

  addProduct() {
    console.log(this.newProduct);
    this.basketService.addToBasket(this.newProduct);
    this.basketService.modalVisible = false;
  }

}
