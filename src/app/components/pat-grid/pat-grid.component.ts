import { Component, HostListener } from '@angular/core';
import { Pat } from '../../models/pat.model';
import { PatService } from '../../services/pat.service';
import { PatFiltersComponent } from "../pat-filters/pat-filters.component";
import { PatCardComponent } from "../pat-card/pat-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pat-grid',
  imports: [PatFiltersComponent, PatCardComponent, CommonModule],
  templateUrl: './pat-grid.component.html',
  styleUrl: './pat-grid.component.scss'
})
export class PatGridComponent {
  allPats:Pat[] = [];
  displayedPat :Pat[] = [];
  pageSize = 10;
  currentPage = 1;
  loading = false;
  hasMorePats = true;

  constructor(private patService: PatService) {}

  ngOnInit() {
    this.onGetAllPats();
  }

  onGetAllPats() {
    this.patService.getAllPats().subscribe((pats)=>{
      this.allPats = pats;
      this.onLoadPats();
    })
  }

  onLoadPats() {
    const start = (this.currentPage-1) * this.pageSize;
    const newPats = this.allPats.slice(0, start+this.pageSize);
    this.displayedPat = newPats;
    this.hasMorePats = this.displayedPat.length < this.allPats.length;
  }

  @HostListener('window:scroll', ['event'])
  onScroll():void {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-100 && !this.loading && this.hasMorePats){
      this.loading = true;
      setTimeout(() => {
        this.currentPage++;
        this.onLoadPats();
        this.loading = false;
      }, 500);
    }
  }
}
