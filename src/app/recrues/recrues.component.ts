import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recrues',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  public recrueService = inject(GestionRecruesService);
}
