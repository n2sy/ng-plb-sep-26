import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar.pipe';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink, NoAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  selCandidate: Candidat;
  private activatedRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params);
    // Version 1
    // this.idCandidat = this.activatedRoute.snapshot.paramMap.get('id');

    //Version 2

    setTimeout(() => {
      this.activatedRoute.paramMap.subscribe({
        next: (values: ParamMap) => {
          this.candSer.getCandidateByIdAPI(values.get('id')).subscribe({
            next: (data: Candidat) => {
              this.selCandidate = data;
            },
            error: (err) => {
              this.router.navigateByUrl('/404');
            },
          });
        },
        error: (err) => {},
      });
    }, 3000);
  }

  deleteHandler() {
    if (confirm('Etes vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidateAPI(this.selCandidate._id).subscribe({
        next: (data: any) => {
          alert(data.message);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          alert('Impossible de supprimer ce candidat');
        },
      });
    }
  }
}
