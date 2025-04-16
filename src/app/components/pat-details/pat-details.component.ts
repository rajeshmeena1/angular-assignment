import { Component } from '@angular/core';
import { Pat } from '../../models/pat.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatService } from '../../services/pat.service';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pat-details',
  imports: [CommonModule],
  templateUrl: './pat-details.component.html',
  styleUrl: './pat-details.component.scss'
})
export class PatDetailsComponent {
  pat: Pat | undefined;

  constructor(private route: ActivatedRoute, private router: Router, 
    private patService: PatService, 
    private notificationService: NotificationService) {}

    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.patService.getPatById(id).subscribe((pat)=> {
        this.pat = pat;
      })
    }

    adoptedPat(){
      if(this.pat) {
        this.patService.adoptedPat(this.pat.id);
        this.notificationService.showNotification(`${this.pat.name} has been adopted...`);
      }
    }

    onNavigate() {
      this.router.navigate(['']);
    }
}
