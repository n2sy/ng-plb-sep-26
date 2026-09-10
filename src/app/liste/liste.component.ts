import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/candidat.model';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  tousCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  private candService = inject(GestionCandidatsService);
  private candService2 = inject(GestionCandidatsService);

  ngOnInit() {
    this.tousCandidats = this.candService.getAllCandidates();
  }

  showList() {
    console.log(this.candService.getAllCandidates());
  }

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
