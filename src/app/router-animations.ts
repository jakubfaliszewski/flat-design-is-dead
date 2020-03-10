import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


const slideToLeft = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%', 'transform-origin': 'center' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%) scale(0.85)', opacity: 0 }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%) scale(1)', opacity: 1 }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%) scale(1)', opacity: 1  }),
      animate('0.8s ease-in-out', style({ transform: 'translateX(-100%) scale(0.85)', opacity:0 }))
    ], { optional: true }),
  ])
];

const slideToRight = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%) scale(0.85)', opacity: 0 }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%) scale(1)', opacity: 1 }))
    ], { optional: true }),
    query(':leave', [
      style({ transform: 'translateX(0%) scale(1)', opacity: 1 }),
      animate('0.8s ease-in-out', style({ transform: 'translateX(100%) scale(0.85)', opacity: 0 }))
    ], { optional: true }),
  ])
];

export const slideInAnimation =
  trigger('routeAnimations', [
    transition(':increment', slideToLeft),
    transition(':decrement', slideToRight),
  ]);

