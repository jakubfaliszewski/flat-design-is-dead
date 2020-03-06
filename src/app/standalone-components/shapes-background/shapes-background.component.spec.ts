import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesBackgroundComponent } from './shapes-background.component';

describe('ShapesBackgroundComponent', () => {
  let component: ShapesBackgroundComponent;
  let fixture: ComponentFixture<ShapesBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapesBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
