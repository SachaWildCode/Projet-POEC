import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssoComponent } from './card-asso.component';

describe('CardAssoComponent', () => {
  let component: CardAssoComponent;
  let fixture: ComponentFixture<CardAssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAssoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
