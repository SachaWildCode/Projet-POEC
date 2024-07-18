import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donations2Component } from './donations2.component';

describe('Donations2Component', () => {
  let component: Donations2Component;
  let fixture: ComponentFixture<Donations2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Donations2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Donations2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
