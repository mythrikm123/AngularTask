import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCardComponent } from './left-card.component';

describe('LeftCardComponent', () => {
  let component: LeftCardComponent;
  let fixture: ComponentFixture<LeftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftCardComponent]
    });
    fixture = TestBed.createComponent(LeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
