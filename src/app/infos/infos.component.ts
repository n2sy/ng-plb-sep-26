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
    this.activatedRoute.paramMap.subscribe({
      next: (values: ParamMap) => {
        this.selCandidate = this.candSer.getCandidateById(values.get('id'));

        if (!this.selCandidate) this.router.navigateByUrl('/404');
      },
      error: (err) => {},
    });
  }
}
