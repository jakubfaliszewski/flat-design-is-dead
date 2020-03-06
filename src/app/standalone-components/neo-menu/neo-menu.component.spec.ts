import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoMenuComponent } from './neo-menu.component';

describe('NeoMenuComponent', () => {
  let component: NeoMenuComponent;
  let fixture: ComponentFixture<NeoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
