import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv1Component } from './atv1.component';

describe('Atv1Component', () => {
  let component: Atv1Component;
  let fixture: ComponentFixture<Atv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
