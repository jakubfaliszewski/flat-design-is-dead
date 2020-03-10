import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BasketService } from '../../services/basket.service';
import { Subscription } from 'rxjs';
import { IBasket } from '../../globals';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'neo-menu',
  templateUrl: './neo-menu.component.html',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(120%)' }),
            animate('0.4s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, transform: 'translateX(0)' }),
            animate('0.2s ease-in',
              style({ opacity: 0, transform: 'translateX(50%)' }))
          ]
        )
      ]
    )
  ],
  styleUrls: ['./neo-menu.component.scss']
})
export class NeoMenuComponent implements OnInit {
  routes = [
    {
      visibleName: 'Home',
      url: '/'
    },
    {
      visibleName: 'Pricing',
      url: '/pricing'
    },
    {
      visibleName: 'Demo',
      url: '/demo'
    }
  ];

  currentRoute = '/';
  basketSub: Subscription;
  menuBasket: IBasket;
  loading: boolean = true;
  basketVisible: boolean = false;
  menuVisible: boolean = false;
  addToBasketModal: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private title: Title, public basketService: BasketService) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.basketVisible = false;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.title.setTitle("NEO - " + this.route.snapshot.children[0].data.name);
        this.currentRoute = this.router.routerState.snapshot.url;
      }, 50);
      setTimeout(() => {
        this.loading = false;
      }, 300);

    }
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.menuBasket = this.basketService.basket;
    this.basketSub = this.basketService.getBasketChange()
      .subscribe(item => { this.menuBasket = item });
  }

  removeFromBasket(itemIndex) {
    this.basketService.removeFromBasket(itemIndex);
  }

  changePage(url) {
    this.router.navigate([url]);
    this.showMenu(true);
  }

  openModal() {
    this.basketService.modalVisible = true;
  }

  showMenu(force?: boolean) {
    if (force) {
      this.menuVisible = false;
      document.body.classList.remove("overflowhide");
      return;
    }
    this.menuVisible = !this.menuVisible;
    if (this.menuVisible)
      document.body.classList.add("overflowhide");
    else document.body.classList.remove("overflowhide");
  }

}
