import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparencyPageComponent } from './transparency-page.component';

describe('TransparencyPageComponent', () => {
  let component: TransparencyPageComponent;
  let fixture: ComponentFixture<TransparencyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransparencyPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransparencyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
