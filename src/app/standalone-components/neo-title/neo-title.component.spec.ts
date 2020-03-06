import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoCardTitleComponent } from './neo-card-title.component';

describe('NeoCardTitleComponent', () => {
  let component: NeoCardTitleComponent;
  let fixture: ComponentFixture<NeoCardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoCardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
