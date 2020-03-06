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

@Component({
  selector: 'neo-menu',
  templateUrl: './neo-menu.component.html',
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
    }
  ];

  currentRoute = '/';
  loading: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute, private title: Title) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.title.setTitle("Neomorphism - " + this.route.snapshot.children[0].data.name);
        this.currentRoute = this.router.routerState.snapshot.url;
        console.log(this.currentRoute);
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
    console.log(this.routes);
  }

  changePage(url) {
    this.router.navigate([url]);
  }

}
