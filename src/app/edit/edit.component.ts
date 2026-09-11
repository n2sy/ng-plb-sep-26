import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candidateToEdit: Candidat;
  private activatedRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  ngOnInit() {
    this.candSer
      .getCandidateByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (data) => {
          this.candidateToEdit = data;
        },
        error: (err) => {
          console.log('Probleme avec GetCandidateById');
        },
      });
  }

  submitHandler(fValue) {
    fValue._id = this.candidateToEdit._id;
    this.candSer.updateCandidate(fValue).subscribe({
      next: (data: any) => {
        alert(data.message);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Probleme avec updateCandidat');
      },
    });
  }
}
