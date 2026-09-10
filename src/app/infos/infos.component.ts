import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idCandidat;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params);
    // Version 1
    // this.idCandidat = this.activatedRoute.snapshot.paramMap.get('id');

    //Version 2
    this.activatedRoute.paramMap.subscribe({
      next: (values: ParamMap) => {
        this.idCandidat = values.get('id');
      },
      error: (err) => {},
    });
  }
}
