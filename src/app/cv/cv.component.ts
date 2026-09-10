import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat.model';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent, HighlightDirective],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 19, 'Designer', 'lisa.png'),
    new Candidat(4, 'marge', 'simpson', 33, 'Designer'),
  ];
  selCandidat: Candidat;

  recupererCandidat(cand) {
    this.selCandidat = cand;
  }
}
