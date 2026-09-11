import { HttpClient } from '@angular/common/http';
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
  private http = inject(HttpClient);

  onGet() {
    this.http.get('https://jsonplaceholder.typicode.com/usersssss').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur capturée', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }

  goToCv() {
    // traitement
    this.router.navigateByUrl('/cv');
  }

  goToInfos() {
    this.router.navigate(['cv', this.idCandidat]);
  }

  ngOnDestroy() {
    console.log('DESTRUCTION');
  }
}
