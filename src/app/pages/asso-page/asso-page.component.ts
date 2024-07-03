import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { AssoService } from '../../shared/services/asso.service';
import { IAssoModel } from '../../shared/models/IAsso-model';
import { CardAssoComponent } from '../../components/card-asso/card-asso.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-asso-page',
  standalone: true,
  imports: [SearchbarComponent, CardAssoComponent, CommonModule],
  templateUrl: './asso-page.component.html',
  styleUrl: './asso-page.component.scss',
})
export class AssoPageComponent {
  associations: IAssoModel[] = [];
  constructor(private assoService: AssoService) {
    this.assoService.getAllAsso().subscribe(data => {
      console.warn(data);
      this.associations = data;
    });
  }
}
