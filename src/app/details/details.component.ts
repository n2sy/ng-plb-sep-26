import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selectedCandidat: Candidat;
}
