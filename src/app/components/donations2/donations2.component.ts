import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-donations2',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './donations2.component.html',
  styleUrl: './donations2.component.scss',
})
export class Donations2Component {
  faFilter = faFilter;
  faMagnifyingGlass = faMagnifyingGlass;
}
