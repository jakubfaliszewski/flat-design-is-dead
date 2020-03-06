import { Component, OnInit, ViewChildren, ViewChild, ContentChildren, Directive, ElementRef } from '@angular/core';
import { NeoTitleComponent } from '../neo-title/neo-title.component';
import { ISlider, Slider } from '../../interfaces';

@Component({
  selector: 'neo-slider',
  templateUrl: './neo-slider.component.html',
  styleUrls: ['./neo-slider.component.scss']
})

// Neo Slider Component
// Put inside it any elements with attribute 'neoslider'
// Non neoslider elements won't be calculated as slides

export class NeoSliderComponent implements OnInit {
  @ViewChild(NeoTitleComponent) childQuery;
  slider: ISlider = new Slider;
  constructor(private elt: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const children:HTMLElement[] = this.elt.nativeElement.childNodes ;
    let slides = [];

    for (let ch of children) {
      if (ch.tagName && ch.attributes.getNamedItem('neoslide')) slides.push(ch);
    }

    this.renderSlider(slides);
  }

  renderSlider(slides: HTMLElement[]) {
    for (let slide of slides) {
      slide.classList.add('neo-slide');
    }

    this.slider.slides = slides;
    this.slider.length = slides.length;


    console.log(this.slider);
  }
}
