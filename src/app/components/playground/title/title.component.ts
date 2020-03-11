import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'playground-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
  @ViewChild('title') title: { nativeElement: HTMLHeadingElement };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let text = this.title.nativeElement;
    let letters: HTMLSpanElement[] = [];
    const chars = [...text.innerText];
    text.innerText = null;
    for (let i in chars) {
      const number = Math.floor(Math.random() * 4) + 1;
      letters.push(document.createElement('span'));
      letters[i].innerText = chars[i];
      letters[i].classList.add(`color${number}`);
      text.appendChild(letters[i]);
    }
    

  }

}
