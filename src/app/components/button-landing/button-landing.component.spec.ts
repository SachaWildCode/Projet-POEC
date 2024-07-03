import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLandingComponent } from './button-landing.component';

describe('ButtonLandingComponent', () => {
  let component: ButtonLandingComponent;
  let fixture: ComponentFixture<ButtonLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
