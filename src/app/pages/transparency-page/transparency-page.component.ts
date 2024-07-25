import { Component } from '@angular/core';

import { UnderConstructComponent } from '../../components/under-construct/under-construct.component';

@Component({
  selector: 'app-transparency-page',
  standalone: true,
  imports: [UnderConstructComponent],
  templateUrl: './transparency-page.component.html',
  styleUrl: './transparency-page.component.scss',
})
export class TransparencyPageComponent {}
