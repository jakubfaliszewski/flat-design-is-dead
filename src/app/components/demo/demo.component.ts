import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @ViewChild('nativeVideo') nativeVideo: { nativeElement: HTMLVideoElement };

  video = {
    play: false,
    ready: false,
    time: {
      minutes: 0,
      seconds: 0
    },
    progress: 0,
    ref: 0,
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.nativeVideo.nativeElement.addEventListener('timeupdate', () => {
      const video = this.nativeVideo.nativeElement;
      
      let minutes = Math.floor(video.currentTime / 60);
      let seconds = Math.floor(video.currentTime - minutes * 60);
      this.video.time = {
        minutes: minutes,
        seconds: seconds
      };

      // percent value is just more readable form humans
      this.video.progress = (video.currentTime / video.duration);
    });

    this.nativeVideo.nativeElement.addEventListener('ended', () => {
      this.video.play = false;
    });
    this.nativeVideo.nativeElement.addEventListener('loadeddata', () => {
      if (this.nativeVideo.nativeElement.readyState >= 2) {
        this.video.ready = true;
      }
    });
  }


  clickOnProgress(ev) {
    let progress = (ev.offsetX / ev.toElement.offsetWidth) * this.nativeVideo.nativeElement.duration;
    this.nativeVideo.nativeElement.currentTime = progress;
  }

  playVideo() {
    if (this.nativeVideo.nativeElement.paused) {
      this.video.play = true;
      this.nativeVideo.nativeElement.play();
    }
    else {
      this.video.play = false;
      this.nativeVideo.nativeElement.pause();
    }
  
  }

}
