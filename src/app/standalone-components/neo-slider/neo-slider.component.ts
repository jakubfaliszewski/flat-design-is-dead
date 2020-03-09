import { Component, OnInit, ViewChildren, ViewChild, ContentChildren, Directive, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { NeoTitleComponent } from '../neo-title/neo-title.component';
import { ISlider, Slider, SliderState } from '../../globals';

@Component({
  selector: 'neo-slider',
  templateUrl: './neo-slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./neo-slider.component.scss']
})

// Neo Slider Component
// Put inside it any elements with attribute 'neoslider'
// Non neoslider elements won't be calculated as slides

export class NeoSliderComponent implements OnInit {
  @ViewChild(NeoTitleComponent) childQuery;
  slider: ISlider = new Slider;
  @Output() slideChange: EventEmitter<number> = new EventEmitter();

  constructor(private elt: ElementRef, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const children: HTMLElement[] = this.elt.nativeElement.childNodes[0].children;
    let slides = [];

    for (let ch of children) {
      if (ch.tagName && ch.attributes.getNamedItem('neoslide')) slides.push(ch);
    }

    this.renderSlider(slides);
    this.ref.detectChanges();
  }

  getEntrySlide() {
    let currentSlideStorage = sessionStorage.getItem('currentSlide');
    if (currentSlideStorage)
      this.slider.current = parseInt(currentSlideStorage);
  }

  renderSlider(slides: HTMLElement[]) {
    this.getEntrySlide();
    for (let slideIndex in slides) {
      let slide = slides[slideIndex];
      slide.classList.add('neo-slide');
      slide.style.left = 100 * parseInt(slideIndex) + '%';
    }

    this.slider.slides = slides;
    this.slider.length = slides.length;
    this.slider.state = SliderState.READY;
    this.ref.detectChanges();
  }

  changeSlide(index: number) {
    this.slideChange.emit(index);
    this.slider.current = index;
    sessionStorage.setItem('currentSlide', index + '');
    for (let slideIndex in this.slider.slides) {
      let slide = this.slider.slides[slideIndex];
      if (parseInt(slideIndex) === index)
        slide.classList.remove('hidden')
      else slide.classList.add("hidden");
    }
    this.ref.detectChanges();

  }

}
