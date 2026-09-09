import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
})
export class FirstComponent {
  entreprise: string = 'TopSolid';
  txtColor: string = 'blue';

  clickHandler() {
    alert("J'ai été cliqué !");
  }

  updateEntreprise(inpValue: string) {
    this.entreprise = inpValue;
  }
}
