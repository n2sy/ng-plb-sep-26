import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, SecondComponent],
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
  extraireMsg(msg) {
    this.entreprise = msg;
  }
}
