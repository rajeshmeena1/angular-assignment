import { Component, Input } from '@angular/core';
import { Pat } from '../../models/pat.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pat-card',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './pat-card.component.html',
  styleUrl: './pat-card.component.scss'
})
export class PatCardComponent {
  @Input() pat!: Pat;

  @Input() displayedPat: Pat[] = [];

  constructor() {
    console.log('patArr', this.displayedPat)
  }
}
