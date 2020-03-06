export interface ICard {
  title: string,
  image: string,
  active: boolean,
  desc: {
    title: string,
    content: string
  }
}

export interface ISlider {
  slides: HTMLElement[],
  length: number,
}

export class Slider {
  slides: [];
  length: 0;
}
