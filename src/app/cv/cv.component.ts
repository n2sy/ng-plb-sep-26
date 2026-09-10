import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat.model';
import { HighlightDirective } from '../highlight.directive';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { RecruesComponent } from '../recrues/recrues.component';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    ListeComponent,
    DetailsComponent,
    HighlightDirective,
    RecruesComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  allCandidates: Candidat[] = [];
  selCandidat: Candidat;

  //1ere méthode
  //constructor(private candService: GestionCandidatsService) {}

  //2eme méthode
  private candService = inject(GestionCandidatsService);

  ngOnInit() {
    this.candService.showInfos();
    this.allCandidates = this.candService.getAllCandidates();
  }

  addNewCandidate() {
    this.candService.addCandidate();
  }

  showList() {
    console.log(this.candService.getAllCandidates());
  }

  recupererCandidat(cand) {
    this.selCandidat = cand;
  }
}
