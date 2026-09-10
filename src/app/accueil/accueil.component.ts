import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  idCandidat = 5;
  private router = inject(Router);

  goToCv() {
    // traitement
    this.router.navigateByUrl('/cv');
  }

  goToInfos() {
    this.router.navigate(['cv', this.idCandidat]);
  }
}
