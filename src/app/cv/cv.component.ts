import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'Chef de projet', 'homer.png'),
    new Candidat(1, 'lisa', 'simpson', 19, 'Designer', 'lisa.png'),
  ];
  selCandidat: Candidat;

  recupererCandidat(cand) {
    this.selCandidat = cand;
  }
}
