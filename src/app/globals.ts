export interface ICard {
  title: string,
  image: string | ArrayBuffer,
  price: number,
  active?: boolean,
  color?: string;
  desc?: {
    title: string,
    content: string
  }
}

export class Card implements ICard {
  title: string;
  image: string | ArrayBuffer;
  price: number;

  constructor() {
    this.title = '';
    this.image = null;
    this.price = 1;
  }
}

export enum SliderState {
  LOADING,
  READY
}
export interface ISlider {
  slides: HTMLElement[],
  current: number;
  length: number,
  state: SliderState
}

export class Slider implements ISlider {
  slides: HTMLElement[];
  current: number;
  length: number;
  price: number;
  state: SliderState;

  constructor() {
    this.slides = [];
    this.current = 0;
    this.length = 0;
    this.price = 120;
    this.state = SliderState.LOADING;
  }
}

export class IBasket {
  items: ICard[];
  total: number
}

export let GCards: ICard[] = [{
  title: 'rxb',
  image: './assets/h_b.png',
  active: false,
  price: 120,
  color: '#73c2c5',
  desc: {
    title: 'Everything is connected',
    content: 'And every stick has two ends. And both ends are connected by stick!'
  }
}, {
  title: 'jpr',
  image: './assets/h_r.png',
  active: false,
  price: 139,
  color: '#d26363',
  desc: {
    title: 'Did you know...',
    content: 'That your clock alarm is your intro song?'
  }
}, {
  title: 'tcr',
  image: './assets/h_x.png',
  active: false,
  price: 139,
  color: '#d084ca',
  desc: {
    title: 'Advice for today',
    content: "Memes are good for soul and mind. Spend at least 1 hour per day on Reddit, 9GAG, or even 4chan. I won't judge."
  }
}];
