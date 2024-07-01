import { Component, Input, OnInit } from '@angular/core';
import { IcardAsso } from '../../shared/models/icard-asso';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-asso',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './card-asso.component.html',
  styleUrl: './card-asso.component.scss',
})
export class CardAssoComponent implements OnInit {
  @Input() association!: IcardAsso;
  @Input() card_width!: string;
  percent = 0;
  faHeart = faHeart;
  faPlus = faPlus;

  ngOnInit() {
    this.percent = (this.association.objectif_current / this.association.objectif_total) * 100;
  }
}
