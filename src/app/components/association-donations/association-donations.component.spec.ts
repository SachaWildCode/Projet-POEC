import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationDonationsComponent } from './association-donations.component';

describe('AssociationDonationsComponent', () => {
  let component: AssociationDonationsComponent;
  let fixture: ComponentFixture<AssociationDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationDonationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
