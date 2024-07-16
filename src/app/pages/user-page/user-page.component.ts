import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Donations2Component } from '../../components/donations2/donations2.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [SideBarComponent, RouterOutlet, Donations2Component],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {}
