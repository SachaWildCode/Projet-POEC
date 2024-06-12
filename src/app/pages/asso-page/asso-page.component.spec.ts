import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoPageComponent } from './asso-page.component';

describe('AssoPageComponent', () => {
  let component: AssoPageComponent;
  let fixture: ComponentFixture<AssoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
