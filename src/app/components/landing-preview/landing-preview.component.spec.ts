import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPreviewComponent } from './landing-preview.component';

describe('LandingPreviewComponent', () => {
  let component: LandingPreviewComponent;
  let fixture: ComponentFixture<LandingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
