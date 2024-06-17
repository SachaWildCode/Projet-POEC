import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  // router: Router;
  // constructor() {
  //   // this.router = inject(Router);
  // }
  //constructor(private router: Router) {}
  // navigate: boolean = true;
  // goToHome(): void {
  //   this.router.navigate(['/home']);
  // }
  // goToAssociation(): void {
  //   this.router.navigate(['/asso']);
  // }
  // goToTransparence(): void {
  //   this.router.navigate(['/transparency']);
  // }
  // goToFaq(): void {
  //   this.router.navigate(['/faq']);
  // }
  // goToLogin(): void {
  //   this.router.navigate(['/profile']);
  // }
}
