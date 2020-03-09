export interface ICard {
  title: string,
  image: string,
  active: boolean,
  desc: {
    title: string,
    content: string
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
  slides: [];
  current: 0;
  length: 0;
  state: SliderState.LOADING;
  constructor() {
    this.slides = [];
    this.current = 0;
    this.length = 0;
    this.state = SliderState.LOADING;
  }
}
