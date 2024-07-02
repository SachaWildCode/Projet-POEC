import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { AssoService } from '../../shared/services/asso.service';
@Component({
  selector: 'app-asso-page',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './asso-page.component.html',
  styleUrl: './asso-page.component.scss',
})
export class AssoPageComponent {
  constructor(private assoService: AssoService) {
    // this.assoService.getAllAsso().subscribe(data => {});
  }
}
