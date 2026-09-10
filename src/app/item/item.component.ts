import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
  @Output() eventToListe = new EventEmitter<Candidat>();

  sendCandidateToListe() {
    this.eventToListe.emit(this.unCandidat);
  }
}
