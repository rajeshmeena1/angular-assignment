import { Component } from '@angular/core';
import { PatService } from '../../services/pat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pat-filters',
  imports: [FormsModule, CommonModule],
  templateUrl: './pat-filters.component.html',
  styleUrl: './pat-filters.component.scss'
})
export class PatFiltersComponent {
  searchTerm = "";
  gender:any = ['All', 'Male', 'Female'];
  animalType:any = ['All', 'Cat', 'Dog'];
  selectedPat:any = 'All';
  selectedAnimalType:any = 'All';

  constructor(private patService: PatService) {}

  applySearchFilters() {
    this.patService.filteredPats(this.searchTerm, this.selectedPat, this.selectedAnimalType)
  }

  applyGenderFilters() {
    this.patService.filteredPats(this.searchTerm, this.selectedPat, this.selectedAnimalType)
  }

  applyPatTypeFilters() {
    this.patService.filteredPats(this.searchTerm, this.selectedPat, this.selectedAnimalType)
  }
}
