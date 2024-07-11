import { Component } from '@angular/core';
import { Donations2Component } from '../../components/donations2/donations2.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [Donations2Component],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {}
