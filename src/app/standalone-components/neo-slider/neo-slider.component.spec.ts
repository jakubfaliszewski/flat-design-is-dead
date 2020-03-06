import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoSliderComponent } from './neo-slider.component';

describe('NeoSliderComponent', () => {
  let component: NeoSliderComponent;
  let fixture: ComponentFixture<NeoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
